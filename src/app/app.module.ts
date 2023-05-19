import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { MainSidebarComponent } from './composants/main-sidebar/main-sidebar.component';
import { FooterComponent } from './composants/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { ArticlesComponent } from './pages/articles/articles/articles.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StatistiqueComponent,
    ArticlesComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
