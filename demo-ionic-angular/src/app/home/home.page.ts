import { GoogleAuth } from '@WMOH-DEV/capacitor-google-auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  public async signIn() {
    let googleUser = await GoogleAuth.signIn();
    console.log(googleUser);
  }

  public signOut() {
    GoogleAuth.signOut();
  }
}
