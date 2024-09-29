import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentLibraryRoutingModule } from './document-library-routing.module';
import { DocumentLibraryComponent } from './document-library.component';


@NgModule({
  declarations: [
    DocumentLibraryComponent
  ],
  imports: [
    CommonModule,
    DocumentLibraryRoutingModule
  ]
})
export class DocumentLibraryModule { }
