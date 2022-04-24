import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() task: string;

  timer: string;
  seconds: number;
  clock: any;


  constructor() { }

  ngOnInit(): void {
    this.timer = '00:00:00';
    this.seconds = 0;
  }

  startTimer() {

    this.clock = setInterval(() => {
      this.seconds++;
      this.formatTimer(this.seconds);
    }, 1000);

  }

  stopTimer() {
    clearInterval(this.clock);

  }

  formatTimer(seconds: number) {

    let secs: any = seconds % 60;
    let minutes: any = Math.floor(seconds / 60);
    let hours: any = Math.floor(minutes / 60);

    console.log(secs, minutes, hours);

    secs = secs < 10 ? '0' + secs : secs;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    this.timer = hours + ':' + minutes + ':' + seconds;

  }

}
