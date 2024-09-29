import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersCategoryRoutingModule } from './folders-category-routing.module';
import { FoldersCategoryComponent } from './folders-category.component';


@NgModule({
  declarations: [
    FoldersCategoryComponent
  ],
  imports: [
    CommonModule,
    FoldersCategoryRoutingModule
  ]
})
export class FoldersCategoryModule { }
