import { People } from './people.model';

export class PeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
