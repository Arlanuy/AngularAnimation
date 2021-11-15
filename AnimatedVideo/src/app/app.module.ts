import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress.component';
import { ToolbarComponent } from './toolbar.component';
import { OptionsComponent } from './options.component';

import { VideoService } from './video.service';

import { TimeDisplayPipe } from "./timedisplay.pipe";

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PlayOverlayComponent } from './playoverlay.component';

import { VideoTitleComponent } from './videotitle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ToolbarComponent,
    OptionsComponent,
    TimeDisplayPipe,
    PlayOverlayComponent,
    VideoTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
