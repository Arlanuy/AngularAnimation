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
import { MouseComponent } from './mouse.component';
import {FadeBlockComponent} from './fadeblock.component'

const animationRoutes:Routes = [

  {

    path: 'animation-home',

    component: HomeComponent,

    data: {

      animation: {

        value: 'home',

      }

    }

  },

  {

    path: 'animation-basics',

    component: BasicComponent,

    data: {

      animation: {

        value: 'basic',

      }

    }

  },

  {

    path: 'animation-contained',

    component: ContainedComponent,

    data: {

      animation: {

        value: 'contained',

      }

    }

  },

  {

    path: 'animation-advanced',

    component: AdvancedComponent,

    data: {

      animation: {

        value: 'advanced',

      }

    }

  },

  {

    path: '',

    redirectTo: '/animation-home',

    pathMatch: 'full',

    data: {

      animation: {

        value: 'home',

      }

    }

  }

];

@NgModule({
  declarations: [
    AppComponent,
    AnimboxComponent,
    HomeComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent,
    MouseComponent,
    FadeBlockComponent
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
