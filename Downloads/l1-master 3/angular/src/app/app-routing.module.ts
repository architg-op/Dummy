import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TcoComparisonCalculatorComponent } from './tco-comparison-calculator/tco-comparison-calculator.component';

const routes: Routes = [{
  path: '',
  component: TcoComparisonCalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
