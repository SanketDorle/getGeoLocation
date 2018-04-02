import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Native plugins.....
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-list',
  templateUrl: 'geoLoaction.html'
})
export class GeoLoactionPage {
  lat
  long
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    this.getCurrentLatLong();
  }
  getCurrentLatLong(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude
      this.long = data.coords.longitude
     });
  }
}
