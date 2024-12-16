import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { CASAComponent } from './Home/casa.component';
import { Deber1Component } from './Deber1/Deber1.component';
import { Deber2Component } from './Deber2/Deber2.component';
import { Deber3Component } from './Deber3/Deber3.component';
import { Deber4Component } from './Deber4/Deber4.component';
import { Deber5Component } from './Deber5/Deber5.component';
import { Deber5Module } from './Deber5/Deber5.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: 'Deber1', component: Deber1Component},
  { path: 'Deber2', component: Deber2Component },
  { path: 'Deber3', component: Deber3Component },
  { path: 'Deber4', component: Deber4Component },
  { path: 'Deber5', component: Deber5Component },


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