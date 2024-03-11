import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleHighlightDirective } from './toggle-highlight.directive';
import { ConditionalDisplayDirective } from './conditional-display.directive';
import { ProductsComponentComponent } from './products-component/products-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleHighlightDirective,
    ConditionalDisplayDirective,
    ProductsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
