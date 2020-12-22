import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadorPage } from './calculador.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadorPageRoutingModule {}
