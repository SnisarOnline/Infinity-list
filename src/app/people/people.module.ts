import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListService } from './services/people-list.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({

  imports: [
    SharedModule,
    PeopleRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    PeopleListComponent,
    PeopleDetailComponent,
  ],
  providers: [PeopleListService]
})
export class PeopleModule { }
