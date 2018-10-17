import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Você Sabia?',
      message: 'O Bizon está te observando!',
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

};