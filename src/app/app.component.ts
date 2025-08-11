import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyworkComponent } from './mywork/mywork.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ServiceComponent } from './service/service.component';
import { AboutsComponent } from './abouts/abouts.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AosService } from './aos.service';
import { CountUpDirective } from './count-up.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, HeaderComponent, ServiceComponent, FooterComponent, HomeComponent, ContactComponent, MyworkComponent, GallaryComponent, AboutsComponent, MyProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile';

  constructor( private aosService: AosService){} 

}
 