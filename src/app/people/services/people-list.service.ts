import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { ApiHttpService } from '../../core/services/api-http.service';
import { People } from '../../shared/models/people.model';
import { PeopleResponse } from '../../shared/models/people-response.model';

@Injectable()

export class PeopleListService {

  private readonly peopleListApi = 'https://swapi.dev/api/people/';

  constructor(
    private apiHttp: ApiHttpService
  ) {
  }

  getPeopleList(): Observable<PeopleResponse> {
    return this.apiHttp.get(this.peopleListApi);
  }

  getPeoplePage(page: number): Observable<PeopleResponse> {
    const pageApi = `${this.peopleListApi}?page=${page}`;
    return this.apiHttp.get(pageApi);
  }

  getPeopleDetail(id: string): Observable<People> {
    const personApi = `${this.peopleListApi}${id}`;
    return this.apiHttp.get(personApi);
  }

  addPersonId(persons: People[]): Observable<People[]> {
    return of(persons.map((person, i) => {
      return {
        ...person,
        id: i + 1
      }
    }));
  }

}
