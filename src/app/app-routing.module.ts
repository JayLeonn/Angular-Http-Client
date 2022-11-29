import { CalculatorContainerComponent } from './calculators/calculator-container/calculator-container.component';
import { BooklistComponent } from './booklist/booklist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooklistComponent }, // localhost:4200
  { path: 'calculators', component: CalculatorContainerComponent }, // localhost:4200/calculators
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
