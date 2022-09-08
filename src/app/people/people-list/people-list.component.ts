import { Component, OnDestroy, OnInit} from '@angular/core';
import { forkJoin, map, Observable, of, Subject, Subscription, switchMap, tap } from "rxjs";

import { PeopleListService } from '../services/people-list.service';
import { PeopleResponse } from '../../shared/models/people-response.model';
import { People } from '../../shared/models/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit, OnDestroy {

  peopleList$: Observable<People[]>;

  private subscribtion = new Subscription();
  private nextPage = 1;
  private nextPageUrl = '';
  private scrollTrigger$ = new Subject<boolean>();

  constructor(
    private peopleListService: PeopleListService
  ) { }

  ngOnInit(): void {
    this.initPeopleList();
    this.handleScrollEvent();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  onScroll(): void {
    if(!this.nextPageUrl) {
      console.log('No more items');
      return;
    }
    this.nextPage += 1;
    this.scrollTrigger$.next(true);
  }

  private initPeopleList(): void {
     this.peopleListService.getPeopleList().pipe(
       tap((response: PeopleResponse) => this.nextPageUrl = response.next),
       map((response: PeopleResponse) => this.peopleListService.addPersonId(response.results)),
       tap((people: Observable<People[]>) =>  this.peopleList$ = people)
     ).subscribe()
  }

  private handleScrollEvent(): void {
    const zeroIndex = 0;
    const firstIndex = 1;
    this.subscribtion.add(
    this.scrollTrigger$.pipe(
      switchMap(() => this.peopleListService.getPeoplePage(this.nextPage)),
      tap((response: PeopleResponse) => this.nextPageUrl = response.next),
      switchMap((response: PeopleResponse) => forkJoin([this.peopleList$, of(response.results)])),
      tap((result) => this.peopleList$ = this.peopleListService.addPersonId([...result[zeroIndex], ...result[firstIndex]])),
    ).subscribe()
    )
  }

}
