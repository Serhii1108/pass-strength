import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';

@NgModule({
  declarations: [
    FormComponent,
    PassStrengthComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormComponent,
    PassStrengthComponent
  ]
})
export class AuthModule { }
