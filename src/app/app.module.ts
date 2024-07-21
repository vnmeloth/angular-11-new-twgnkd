import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { CustomPipe } from './main/custom-pipe.pipe';

const appRoute: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Main', component: MainComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    CustomPipe,
  ],
  bootstrap: [AppComponent],
  exports: [HomeComponent, AboutComponent, MainComponent],
})
export class AppModule {}
