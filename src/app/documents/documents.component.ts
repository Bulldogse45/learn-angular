import { Component } from '@angular/core'
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Desc 1",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    },
    {
      title: "My Second Doc",
      description: "Desc 2",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    },
    {
      title: "My Third Doc",
      description: "Desc 3",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    }
  ]
}