import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SinglenewPage } from '../singlenew/singlenew';
import { } from 'rxjs/add/operator/filter';


/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  response;
  articles = [];
  singlenew;
  items = [];
  toggled = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public loadingCtrl: LoadingController) {
    this.initializeItems();
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.service.getbussines().subscribe((news) => {
      this.response = news;
      this.articles = this.response.articles;


      loader.dismiss();
    })
    this.singlenew = SinglenewPage;

  }
  initializeItems() {
    this.items = this.articles;


  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  public toggle(): void {
    this.toggled = !this.toggled;
  }
}
