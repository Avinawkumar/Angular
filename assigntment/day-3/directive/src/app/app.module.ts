import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleHighlightDirective } from './toggle-highlight.directive';
import { ConditionalDisplayDirective } from './conditional-display.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToggleHighlightDirective,
    ConditionalDisplayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
