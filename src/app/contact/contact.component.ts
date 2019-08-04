import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../services/contact-us.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
declare var $: any;

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

  constructor(
    private contactUsService: ContactUsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.phone, [Validators.required, Validators.minLength(2)]),
      'phone': new FormControl(this.phone, []),
      'email': new FormControl(this.email, [Validators.required, Validators.minLength(4), Validators.email ]),
      'message': new FormControl(this.phone, [Validators.required, Validators.minLength(2)])
    });
  }

  submitForm(){
    this.formVal = $(".contact-form").serialize();
    this.contactUsService.submitContactForm(this.formVal);
    $(".alert").slideDown()
    return false;    
  }

}
