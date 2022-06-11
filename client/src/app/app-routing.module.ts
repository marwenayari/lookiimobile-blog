import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@layout/components/login/login.component';
import { TermsComponent } from '@layout/components/terms/terms.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'articles',
    loadChildren: () => import('@articles/articles.module').then((m) => m.ArticlesModule)
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: '**',
    redirectTo: 'articles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
