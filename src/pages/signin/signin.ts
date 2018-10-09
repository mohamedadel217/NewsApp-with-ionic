import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Home2Page} from '../home2/home2';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook) {
  }

  onFacebookLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => this.navCtrl.push(Home2Page))
  .catch(e => console.log('Error logging into Facebook', e));
  
  }
  onGOtohome()
  { this.navCtrl.setRoot(Home2Page);

  }
}
