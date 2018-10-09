import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import {BusinessPage} from '../business/business';
import {EntertainmentPage} from '../entertainment/entertainment';
import {HealthPage} from '../health/health';
import {SciencePage} from '../science/science';
import {SportsPage} from '../sports/sports';
import {TechnologyPage} from '../technology/technology';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bussinespage;
  entertainmentpage;
  healthpage;
  sciencepage;
  sportspage;
  technologypage;
  constructor(public navCtrl: NavController, public serviceprovider: ServiceProvider) {
    this.bussinespage=BusinessPage;
    this.entertainmentpage=EntertainmentPage;
    this.healthpage=HealthPage;
    this.sciencepage=SciencePage;
    this.sportspage=SportsPage;
    this.technologypage=TechnologyPage;

  
  }
   
 


};



