import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  markers : any[] = [];

  constructor() {}

  usernameDisplay() {
    var x = localStorage.getItem("username");
    document.getElementById("usernameDisplay").innerHTML = x;
  }

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  currentLat ;
  currentLon ;

  ngAfterViewInit() {
    this.usernameDisplay();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.currentLat = position.coords.latitude;
      this.currentLon = position.coords.longitude;

      this.markers.push({
        position: {
          lat: this.currentLat + ((Math.random() - 0.5) * 2) / 10,
          lng: this.currentLon + ((Math.random() - 0.5) * 2) / 10,
        },
        label: {
          color: 'red',
          text: 'My Location',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        options: { animation: google.maps.Animation.BOUNCE },
      })
    })

  }

  logOut(){
    localStorage.removeItem('token');

    console.log(localStorage.getItem('token'))
  }

}
