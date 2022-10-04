import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing capability.
// The next import, HeroesComponent, gives the Router somewhere to go once you configure the routes.
// Notice that the CommonModule references and declarations array are unnecessary, so are no longer part of AppRoutingModule.
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // The following line adds the RouterModule to the AppRoutingModule imports array 
  // and configures it with the routes in one step by calling RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],
  // The method is called forRoot() because you configure the router at the application's root level. 
  // The forRoot() method supplies the service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  // Next, AppRoutingModule exports RouterModule to be available throughout the application.
  exports: [RouterModule]
})
export class AppRoutingModule { }