import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { RegistroPage } from '../registro/registro';

import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loginService: LoginService
  ) {
    this.hideMenu();
  }

  ionViewDidLoad() {
    this.isLogged();
  }

  private hideMenu(): void {
    this.menuCtrl.enable(false);
  }

  public isLogged() {
    this.loginService.isLogged().subscribe(
      logged => {
        this.navCtrl.setRoot(DashboardPage);
      },
      error => this.hideMenu());
  }

  public onClickSignUp():void {
    this.navCtrl.push(RegistroPage);
  }

  public onClickLogin():void {
    this.loginService.login().subscribe(
      logged => {
        this.navCtrl.setRoot(DashboardPage);
      },
      error => this.hideMenu());
  }

}
