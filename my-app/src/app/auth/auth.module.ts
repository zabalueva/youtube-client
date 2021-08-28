import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import MaterialsModule from '../shared/materials/materials.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, MaterialsModule,
  ],
})
export class AuthModule { }
