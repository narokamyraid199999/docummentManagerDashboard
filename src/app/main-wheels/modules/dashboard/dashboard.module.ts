import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DashboardComponent, TitleCardComponent, NewsCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    DashboardRoutingModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
