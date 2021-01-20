import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { CorpoComponent } from './corpo/corpo.component';

const routes: Routes = [
  {path:'', redirectTo:'corpo', pathMatch:'full'},

  {path:'corpo', component:CorpoComponent},
  {path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
