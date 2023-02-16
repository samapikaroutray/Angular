import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  favoriteSeason: string="";
  seasons= [{name:'Winter',isCheck:true}, {name:'Spring',isCheck:false}];
  constructor() {
    this.favoriteSeason = this.seasons[0].name;
  }
}
