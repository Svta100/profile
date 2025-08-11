import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent{
  

  header_variable:any=false;

  @HostListener("document:scroll")

  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true
    }
    else{
      this.header_variable=false
    }
  }
}
