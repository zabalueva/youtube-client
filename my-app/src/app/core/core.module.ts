import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import MaterialsModule from '../shared/materials/materials.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [CommonModule, MaterialsModule, RouterModule, FormsModule],
  exports: [HeaderComponent, NotFoundComponent, MaterialsModule],
})
export class CoreModule {}
