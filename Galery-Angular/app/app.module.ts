import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import {MainComponent} from '../app/main/MainComponent';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
  ],
  declarations: [
    MainComponent
  ],
  bootstrap: [  MainComponent  ]
})
export class AppModule { }
