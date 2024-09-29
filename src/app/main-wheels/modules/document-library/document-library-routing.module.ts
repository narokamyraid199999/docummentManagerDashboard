import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentLibraryComponent } from './document-library.component';

const routes: Routes = [{ path: '', component: DocumentLibraryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentLibraryRoutingModule { }
