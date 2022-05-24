import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Goal123Component } from './goal123/goal123.component';
import { Goal456Component } from './goal456/goal456.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'goal123' },
  { path: 'goal123', component: Goal123Component},
  { path: 'goal456', component: Goal456Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
