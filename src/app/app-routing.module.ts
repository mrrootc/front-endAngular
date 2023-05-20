import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { ArticlesComponent } from './pages/articles/articles/articles.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "statistique",
        component: StatistiqueComponent
      },
      {
        path: "articles",
        component: ArticlesComponent
      },
      {
        path:"nouvelarticle",
        component: NouvelArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
