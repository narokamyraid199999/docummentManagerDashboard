import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWheelsComponent } from './main-wheels.component';

const routes: Routes = [
  {
    path: '',
    component: MainWheelsComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('./modules/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
      },
      {
        path: 'folders-category',
        loadChildren: () =>
          import('./modules/folders-category/folders-category.module').then(
            (m) => m.FoldersCategoryModule
          ),
      },
      {
        path: 'document-library',
        loadChildren: () =>
          import('./modules/document-library/document-library.module').then(
            (m) => m.DocumentLibraryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainWheelsRoutingModule {}
