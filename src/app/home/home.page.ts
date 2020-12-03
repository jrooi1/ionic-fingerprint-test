import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private fingerprint: FingerprintAIO,
        private navCtrl: NavController,
        private pinDialog: PinDialog
    ) {}

    public authenticated(): void {
        this.fingerprint.registerBiometricSecret({
            description: "Some biometric description",
            secret: "my-super-secret",
            invalidateOnEnrollment: true,
            disableBackup: true,
        }).then( (value) => {
            console.log(value);
        this.navCtrl.navigateRoot('dashboard');
        }).catch( (error) => {
            console.log(error);
        });
    }

    public pinCode(): void {
        console.log("pinCode click");
        this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
            .then( (result) => {
                console.log("hellow");
                if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
                else if (result.buttonIndex == 2) console.log('User cancelled');
            }).catch( (error)=> console.log("Pin code error", error));
    }



}
