import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  usernameFree: string = "md-close"; // md-close md-checkmark
  user:any = {}

  ionViewDidLoad() {

  }

  public search(term: string):void {
    console.log(term);
  }

  public onClickRegistrar():void {
    console.log("registrar", this.user);
  }

  // public isValidUser():boolean {
  //   console.log(this.user);
  //   if (this.user.username != null && this.user.username != "" &&
  //   this.user.password != null && this.user.repeatPassword != "" &&
  //   this.user.email != null && this.user.email != "" &&
  //   this.user.password === this.user.repeatPassword) {
  //     return true;
  //   }
  //   return false;
  // }

}
