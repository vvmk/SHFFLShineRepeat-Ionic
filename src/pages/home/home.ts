import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public timeout: number;
    public currentTitle: string = "";
    public currentTick: number = 0;
    public drills: any;
    public drillIndex: number = 0;

    constructor(public navCtrl: NavController) {
        this.drills = [
        {
            title: "First Drill",
            duration: 10
        },
        {
            title: "Second Drill",
            duration: 5
        }];
    }

    runDrills() {
        for (let drill of this.drills) {
            this.currentTitle = drill.title;
            this.startTimer(drill.duration);

        }
    }

    startTimer(seconds: number): void {
        this.currentTitle = this.drills[this.drillIndex].title;
        this.tick(seconds);
        if (seconds > 0) {
            setTimeout(() => this.startTimer(seconds - 1), 1000);
        } else {
            if (this.drillIndex < this.drills.length) {
                this.drillIndex++;
                setTimeout(() => this.startTimer(this.drills[this.drillIndex].duration), 1000);
            }
        }
    }
    

    tick(secondsLeft: number): void {
        this.currentTick = secondsLeft;
    }
}
