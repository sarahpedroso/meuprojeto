import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController, private router: Router) {}

  async showToast(item: string) {
    const toast = await this.toastController.create({
      message: `Item selecionado: ${item}`,
      duration: 2000
    });
    toast.present();
  }
}
