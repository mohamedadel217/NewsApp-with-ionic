import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiceProvider } from '../providers/service/service';
import {SigninPage} from '../pages/signin/signin';
import {SinglenewPage} from '../pages/singlenew/singlenew';
import { HttpClientModule } from '@angular/common/http';
import {BusinessPage} from '../pages/business/business';
import {EntertainmentPage} from '../pages/entertainment/entertainment';
import {HealthPage} from '../pages/health/health';
import {SciencePage} from '../pages/science/science';
import {SportsPage} from '../pages/sports/sports';
import {TechnologyPage} from '../pages/technology/technology';
import { Facebook} from '@ionic-native/facebook';
import{AboutUsPage} from '../pages/about-us/about-us';
import{Home2Page} from '../pages/home2/home2';









@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SinglenewPage,
    BusinessPage,
    EntertainmentPage,
    HealthPage,
    SciencePage,
    SportsPage,
    TechnologyPage,
    AboutUsPage,
    Home2Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SinglenewPage,
    BusinessPage,
    EntertainmentPage,
    HealthPage,
    SciencePage,
    SportsPage,
    TechnologyPage,
    AboutUsPage,
    Home2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
