import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersCategoryComponent } from './folders-category.component';

const routes: Routes = [{ path: '', component: FoldersCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersCategoryRoutingModule { }
