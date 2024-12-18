import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { CASAComponent } from './Home/casa.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


export const routes: Routes = [
  
  { path: 'CASA', component: CASAComponent },
  { path: '', redirectTo: '/CASA', pathMatch: 'full' }, 
];

bootstrapApplication(CASAComponent, {
  providers: [provideRouter(routes),
    ButtonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
}).catch((err) => console.error(err));