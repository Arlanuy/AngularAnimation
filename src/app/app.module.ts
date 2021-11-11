import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './routes/home.component';

import { BasicComponent } from './routes/basic.component';

import { ContainedComponent } from './routes/contained.component';

import { AdvancedComponent } from './routes/advanced.component';

import { NotFoundComponent } from './routes/notfound.component';

import { AnimboxComponent } from './animbox.component';
const animationRoutes:Routes = [

  {

    path: 'animation-home',

    component: HomeComponent

  },

  {

    path: 'animation-basics',

    component: BasicComponent

  },

  {

    path: 'animation-contained',

    component: ContainedComponent

  },

  {

    path: 'animation-advanced',

    component: AdvancedComponent

  },

  {

    path: '',

    redirectTo: '/animation-home',

    pathMatch: 'full'

  },

  {
    path: '**',
    component: NotFoundComponent
  }



];

@NgModule({
  declarations: [
    AppComponent,
    AnimboxComponent,
    HomeComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
