import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import MaterialsModule from '../materials/materials.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, MaterialsModule],
    exports: [HeaderComponent],
})
export class CoreModule {}
