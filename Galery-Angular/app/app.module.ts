import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import {MainComponent} from '../app/main/MainComponent';
import {AdminComponent} from '../app/admin/AdminComponent';
import {PaintingsComponent} from "../app/paintings/PaintingsComponent";
import { Configuration} from "../app/services/Constants";
import { PaintingService} from "../app/services/PaintingService";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    AdminComponent,
    PaintingsComponent,
  ],
  bootstrap: [  MainComponent  ],
  providers: [
      Configuration,
      PaintingService,
  ]
})
export class AppModule { }
