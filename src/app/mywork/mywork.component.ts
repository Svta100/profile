import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.css'
})
export class MyworkComponent {
   htmlTitle:string = "HTML Developer"
   htmlDesc:string = "HTML Developer making adjustment to the client's website design  HTML developers are responsible for the complete end-to-end coding of websites."
   cssTitle:string = "CSS Developer"
   cssDesc:string = "CSS developers are web professionals whose primary responsibility is to deliver a polished and styled product to the visitor's browser"
   bootTitle:string = "Bootstrap Developer"
   bootDesc:string = "A Bootstrap developer specializes in building websites using Bootstrap. This front-end framework enables them to craft visually appealing sites that work"
   uiTitle:string = "UI Developer"
   uiDesc:string ="UI developers work on the aesthetic of a website or app to make it appealing to the user while maintaining functionality."
   fronTitle:string = "Fron End Developer"
   frontDESC:string ="A front-end developer is basically a web developer who has a specialization in creating user interfaces for applications and websites"
   agTitle:string = "Angular Developer"
   angDesc:string = "An Angular developer is a professional who not only develops in JavaScript but also has an excellent command of the AngularJS framework. "
}
