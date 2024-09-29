import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LoginComponent } from './components/Login/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AuthComponent, NavBarComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    InputTextModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
        ],
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
