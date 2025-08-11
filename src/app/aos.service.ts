import { Injectable } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

@Injectable({
  providedIn: 'root'
})
export class AosService {

  constructor() {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: 'ease',
      once:true,
      // Add other options as needed
    });
     // Initialize AOS
  }

}
