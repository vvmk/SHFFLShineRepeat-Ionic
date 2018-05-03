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
    public drills: Drill[] = [];
    public drillIndex: number = 0;

    constructor(public navCtrl: NavController) {
        this.drills.push(new Drill("Dash->Wavedash", 10));
        this.drills.push(new Drill("Short hop->Laser", 5));
    }

    runDrills(index: number): void {
        if (index >= this.drills.length)
            return;
        let d: Drill = this.drills[index];
        this.currentTitle = d.title;
        this.startTimer(d.duration);
    }

    startTimer(seconds: number): void {
        this.tick(seconds);
        if (seconds > 0) {
            setTimeout(() => this.startTimer(seconds - 1), 1000);
        } else {
            this.drillIndex++;
            setTimeout(() => this.runDrills(this.drillIndex), 1000);
        }
    }


    tick(secondsLeft: number): void {
        this.currentTick = secondsLeft;
    }
}

class Drill {
    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }
}
