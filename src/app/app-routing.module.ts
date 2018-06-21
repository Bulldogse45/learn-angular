import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalListComponent } from './proposals/proposals-list.component';
import { ProposalNewComponent } from './proposals/proposal-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'proposals', component: ProposalListComponent},
  { path: 'proposals/new', component: ProposalNewComponent},
  { path: 'documents', component: DocumentsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}