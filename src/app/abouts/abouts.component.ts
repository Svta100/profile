import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CountUpDirective } from 'ngx-countup';
@Component({
  selector: 'app-abouts',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './abouts.component.html',
  styleUrl: './abouts.component.css'
})
export class AboutsComponent {
  skillTitle:string = "Skills"
  eduTitle:string = "Education"
  experianceTitle:string = "Experiance"
  langauagesTitle:string = "Language"


  // animation counter

  projectCount:number = 0;
  projectCountries:number = 0;
  projectWorldwide:number = 0;
  AwardWinners:number = 0;
  
  prjectCountStop:any = setInterval(() => {
    this.projectCount++;
   if(this.projectCount == 150){
    clearInterval(this.prjectCountStop)
   }
  },50)

  projectCountriesStop:any = setInterval(() => {
    this.projectCountries++;
   if(this.projectCountries == 11){
    clearInterval(this.projectCountriesStop)
   }
  },50)

  projectWorldwideStop:any = setInterval(() => {
    this.projectWorldwide++;
   if(this.projectWorldwide == 80){
    clearInterval(this.projectWorldwideStop)
   }
  },50)

  AwardWinnersStop:any = setInterval(() => {
    this.AwardWinners++;
   if(this.AwardWinners == 10){
    clearInterval(this.AwardWinnersStop)
   }
  },50)
}
