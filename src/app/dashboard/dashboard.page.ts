import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    constructor(
        private fingerprint: FingerprintAIO
    ) { }

    ngOnInit() {
    }

    public login(): void {
        this.fingerprint.loadBiometricSecret({

        })
    }

}
