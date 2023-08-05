import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ButtonsComponent } from './components/views/buttons/buttons.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "buttons", component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
