import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "Document 1",
      description: "Description 1",
      file_url: "www.google.com",
      updated_at: "Today",
      image_url: "www.google.com"
    },
    {
      title: "Document 2",
      description: "Description 1",
      file_url: "www.google.com",
      updated_at: "Today",
      image_url: "www.google.com"
    },
    {
      title: "Document 3",
      description: "Description 1",
      file_url: "www.google.com",
      updated_at: "Today",
      image_url: "www.google.com"
    }
  ]
}