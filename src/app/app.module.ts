import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposals/proposals-list.component';
import { ProposalNewComponent } from './proposals/proposal-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
