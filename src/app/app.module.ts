import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PracticeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PracticeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
