import { Component } from '@angular/core';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css'
})
export class MyProjectComponent {
  ProjectTitle:string ="Project";
  
  projectName:string = "Project Name"
  projectResponsivebility:string = "Responsivebility"
  completeDay:string = "Day"
  teamself:string ="Team/Self"
}
