import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcomePage/welcome-page/welcome-page.component';

const routes: Routes = [
{path:'', component:WelcomePageComponent},  
{path:'board',loadChildren: () => import('./modules/board/board.module').then(m=>m.BoardModule)},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
