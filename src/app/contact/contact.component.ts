import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm:any;
  alertshow:string='notShowAlert';
 constructor(private formData:FormBuilder){}

 ngOnInit(){
    this.contactForm = this.formData.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      fileAddress:['',[Validators.required]],
      msg:['',[Validators.required]]
    })
 }

 formSubmit(data:FormGroup){
  console.log(data.value);
  console.log(this.contactForm.value);
  this.alertshow = 'showAlert';
  this.contactForm.reset();
  setTimeout( ()=>{
    this.alertshow = 'notShowAlert'
  },5000)
  
}

}
