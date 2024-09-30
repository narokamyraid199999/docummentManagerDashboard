import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainWheelsRoutingModule } from './main-wheels-routing.module';
import { MainWheelsComponent } from './main-wheels.component';
import { WheelNavbarComponent } from './shared/wheel-navbar/wheel-navbar.component';

@NgModule({
  declarations: [MainWheelsComponent, WheelNavbarComponent],
  imports: [CommonModule, MainWheelsRoutingModule],
})
export class MainWheelsModule {}
