import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Route[] = [
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleRoutingModule { }
