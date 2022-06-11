import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@authentication/components/login/login.component';
import { AuthenticationGuard } from '@authentication/guards/authentication.guard';
import { TermsComponent } from '@layout/components/terms/terms.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
    data: { isLoginPage: true }
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
