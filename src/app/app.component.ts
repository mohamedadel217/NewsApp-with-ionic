import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import {SigninPage} from '../pages/signin/signin';
import{HomePage} from '../pages/home/home';
import{AboutUsPage} from '../pages/about-us/about-us';
import{Home2Page} from '../pages/home2/home2';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;
  homepage;
  AboutUspage;
  Home2page;
  openPage(page)
  {this.rootPage=page;}


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.homepage=HomePage;
    this.AboutUspage=AboutUsPage;
    this.Home2page=Home2Page;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }
}

