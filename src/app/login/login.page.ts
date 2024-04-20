import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username?: string;
  password?: string;

  constructor(
    public alertController: AlertController,
    private router: Router
  ) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/welcome']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Usuário ou senha inválidos.',
      buttons: ['OK']
    });

    await alert.present();
  }

}