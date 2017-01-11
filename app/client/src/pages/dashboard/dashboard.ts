import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    public menuCtrl: MenuController
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.isLogged();
  }

  private getData():void {
    console.log("getdata");
  }

  private isLogged() {
    this.loginService.isLogged().subscribe(
      logged => this.getData(),
      error => this.navCtrl.setRoot(LoginPage)
    );
  }

}
