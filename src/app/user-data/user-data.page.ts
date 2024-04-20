import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Informe seus dados',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        },
        {
          name: 'phone',
          type: 'tel',
          placeholder: 'Telefone'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Enviar',
          handler: (data) => {
            this.presentToast(`Email: ${data.email}, Telefone: ${data.phone}`);

          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
