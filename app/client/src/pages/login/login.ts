import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  showMenuIcon:boolean;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loginService: LoginService
  ) {
    this.hideMenu();
  }

  ionViewDidLoad() {}

  showMenu() {
    this.menuCtrl.enable(true);
    this.showMenuIcon = true;
  }

  hideMenu() {
    this.menuCtrl.enable(false);
    this.showMenuIcon = false;
  }

  hasLogin() {
    this.loginService.loginState().subscribe(
      logged => this.showMenu(),
      error => this.hideMenu());
  }

  removeLogin() {
    this.loginService.logout().subscribe(
      logged => this.hideMenu(),
      error => this.hideMenu());
  }

  doLogin() {
    this.loginService.doLogin().subscribe(
      logged => this.showMenu(),
      error => this.hideMenu());
  }

}
