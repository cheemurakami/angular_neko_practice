import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PracticeListComponent } from './practice-list/practice-list.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PracticeListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PracticeListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
