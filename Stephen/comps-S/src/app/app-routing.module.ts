import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: 'elements',
    loadChildren:()=>import('./elements/elements.module').then((m)=>m.ElementsModule)
  },
  {
    path: 'collections',
    loadChildren:()=>import('./collections/collections.module').then((m)=>m.CollectionsModule)
  },
  {
    path: 'views',
    loadChildren:()=>import('./view/view.module').then((m)=>m.ViewModule)
  },
  {
    path: 'mods',
    loadChildren:()=>import('./modss/modss.module').then((m)=>m.ModssModule)
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
