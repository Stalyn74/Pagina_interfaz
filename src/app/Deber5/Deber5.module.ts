// deber5.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deber5Component } from './Deber5.component';
import { CarouselModule } from 'primeng/carousel';  // Importar PrimeNG Carousel
import { TagModule } from 'primeng/tag';              // Importar PrimeNG Tag
import { ButtonModule } from 'primeng/button';        // Importar PrimeNG Button
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Deber5Component],  // Declaras tu componente aquí
  imports: [
    CommonModule,
    CarouselModule,  // Importas los módulos de PrimeNG que vas a utilizar
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: Deber5Component }  // Aquí defines las rutas específicas si es un módulo perezoso
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Deber5Module { }
