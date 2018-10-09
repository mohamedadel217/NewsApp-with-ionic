import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SinglenewPage } from '../singlenew/singlenew';


/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  articles = [];
  response;
  singlenew;
  items = [];
  toggled = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public service: ServiceProvider) {
    this.initializeItems();
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.service.gettechnology().subscribe((news) => {
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
