import { DetailModule } from './detail/detail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import locFi from '@angular/common/locales/fi';
import { registerLocaleData } from '@angular/common';
import { PluralPipe } from './plural.pipe';
import { SortPipe } from './sort.pipe';
import { CalculatorComponent } from './calculators/calculator/calculator.component';
import { CalculatorContainerComponent } from './calculators/calculator-container/calculator-container.component';
import { EventCalculatorComponent } from './calculators/event-calculator/event-calculator.component';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';


registerLocaleData(locFi);

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    PluralPipe,
    SortPipe,
    CalculatorComponent,
    CalculatorContainerComponent,
    EventCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DetailModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
