import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public timeout: number;

    constructor(public navCtrl: NavController) {

    }

    startTimer(seconds: number): void {
        this.tick(seconds);
        if (seconds > 0) {
            setTimeout(() => this.startTimer(seconds - 1), 1000);
        }
    }

    tick(secondsLeft: number): void {
        console.log(secondsLeft);
    }
}
