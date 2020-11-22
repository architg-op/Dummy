import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TcoCompCalcComponent } from './tco-comp-calc/tco-comp-calc.component';
import { ChosenFeaturesComponent } from './chosen-features/chosen-features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TcoCompCalcComponent,
    ChosenFeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
