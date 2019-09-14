import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Axios from 'axios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  name;
  phone;
  email;
  message;
  formVal;
  messageResponse = "";
  messageState;  

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required, Validators.minLength(2)]),
      'phone': new FormControl(this.phone, []),
      'email': new FormControl(this.email, [Validators.required, Validators.minLength(4), Validators.email ]),
      'message': new FormControl(this.message, [Validators.required, Validators.minLength(2)])
    });   
  }

  submitForm(){

    this.formVal = `name=${this.contactForm.value.name}&phone=${this.contactForm.value.phone}&email=${this.contactForm.value.email}&message=${this.contactForm.value.message}`;

    Axios.post('https://us-central1-mossandbark-4c8e2.cloudfunctions.net/contactMailer', this.formVal)
    .then((response) => {
      this.messageResponse = "Thank you for your message! We'll be in contact as soon as possible.";
      this.messageState = "success"; 
    })    
    .catch(error => {
      this.messageResponse = "Oops, there's been an error. Please try again later.";
      this.messageState = "danger";
      console.log(error);
    });    

    return false;    
  }

}
