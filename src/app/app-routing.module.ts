import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddwordComponent } from './addword/addword.component';
import { AppComponent } from './app.component';
import { PullthewordComponent } from './pulltheword/pulltheword.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {

    path: '', redirectTo: '/pulltheword', pathMatch: 'full'

  },




  // {

  //   path: '', redirectTo: '/app', pathMatch: 'full'

  // },


  {

    path: 'editword',
    component: EditComponent,
  },
 
  {

    path: 'pulltheword',
    component: PullthewordComponent
  },
 


  {

    path: 'addword',
    component: AddwordComponent

  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AddwordComponent, AppComponent, PullthewordComponent]
