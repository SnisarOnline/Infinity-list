import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PeopleListService } from '../services/people-list.service';
import { People } from '../../shared/models/people.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleDetailComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private peopleListService: PeopleListService
  ) { }

  personDetail$: Observable<People>;

  ngOnInit(): void {
    this.getCurrentPersonId();
  }

  private getCurrentPersonId(): void {
    let personId = this.router.snapshot.paramMap.get('id') as string;
    this.personDetail$ = this.getPersonDetails(personId);
  }

  private getPersonDetails(currentPhotoId: string): Observable<People> {
   return this.peopleListService.getPeopleDetail(currentPhotoId);
  }

}
