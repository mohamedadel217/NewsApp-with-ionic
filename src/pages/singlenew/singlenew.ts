import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SinglenewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlenew',
  templateUrl: 'singlenew.html',
})
export class SinglenewPage {
data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.data=this.navParams.data;

  
  }

  

}
