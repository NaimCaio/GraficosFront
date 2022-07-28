import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphPageComponent } from './graph-page/graph-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"graph", component:GraphPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
