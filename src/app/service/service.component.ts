import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  serOneTitle:string = "HTML Design"
  serTwoTitle:string = "Wed & Responsive Design"
  serThreeTitle:string = "Wed Dynamic Design"
  serFourTitle:string = "Front End Developer"
  
}
