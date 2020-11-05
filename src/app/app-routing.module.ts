import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index } from './components/index.component'
const routes: Routes = [{
  path:'dupa', component:Index
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
