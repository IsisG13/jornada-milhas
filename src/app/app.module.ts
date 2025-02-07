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
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './sheared/container/container.component';
import { CardBuscaComponent } from './sheared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentosComponent } from './sheared/card-depoimentos/card-depoimentos.component';
import { FormBuscaComponent } from './sheared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './sheared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { BotaoControleComponent } from './sheared/botao-controle/botao-controle.component';
import { HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './sheared/form-busca/dropdown-uf/dropdown-uf.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocoesComponent,
    DropdownUfComponent,
    DepoimentosComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
