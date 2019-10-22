import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PullthewordComponent } from './pulltheword/pulltheword.component';

import { HttpClientModule } from '@angular/common/http';

import { WordService } from './word.service';
import { EditComponent } from './edit/edit.component';

//import { AddwordComponent } from './addword/addword.component';

@NgModule({
  declarations: [
    AppComponent,
   // AddwordComponent
   routingComponents,
   PullthewordComponent,
   EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
