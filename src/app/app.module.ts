import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sheared/header/header.component';
import { FooterComponent } from './sheared/footer/footer.component';
import { BannerComponent } from './sheared/banner/banner.component';
import { CardComponent } from './sheared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
