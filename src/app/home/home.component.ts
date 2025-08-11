import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  myTitle:string="UI Developer & Front End Developer"
  
  
  text: string = "UI Developer & Front End Developer";
  typedText: string = "";
  index: number = 0;
  typingForward: boolean = true;

  ngOnInit(): void {
    this.type();
  }

  type(): void {
    if (this.typingForward) {
      if (this.index < this.text.length) {
        this.typedText += this.text.charAt(this.index);
        this.index++;
      } else {
        // Start erasing
        this.typingForward = false;
        setTimeout(() => {
          this.erase();
        }, 1000); // Adjust delay before erasing starts
        return;
      }
    } else {
      if (this.index > 0) {
        this.typedText = this.typedText.slice(0, -1);
        this.index--;
      } else {
        // Start typing again
        this.typingForward = true;
        setTimeout(() => {
          this.type();
        }, 1000); // Adjust delay before typing starts again
        return;
      }
    }

    setTimeout(() => {
      this.type();
    }, 100); // Adjust typing speed here
  }

  erase(): void {
    if (this.index > 0) {
      this.typedText = this.typedText.slice(0, -1);
      this.index--;
    } else {
      // Start typing again
      this.typingForward = true;
      setTimeout(() => {
        this.type();
      }, 1000); // Adjust delay before typing starts again
      return;
    }

    setTimeout(() => {
      this.erase();
    }, 100); // Adjust erasing speed here
  }

}
