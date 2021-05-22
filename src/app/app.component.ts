import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('logo', { static: true }) logo!: ElementRef<HTMLDivElement>;
  title = 'cool-weather-app';


  ngOnInit(): void {
    this.initAnimations();   
  }
  initAnimations(): void {
    gsap.from(this.logo.nativeElement, {
      delay: 0.3,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
}

}
