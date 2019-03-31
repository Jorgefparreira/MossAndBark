import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../services/contact-us.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formVal;

  constructor(
    private contactUsService: ContactUsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.nullValidator]
    })
  }

  submitForm(){
    this.formVal = $(".contact-form").serialize();
    this.contactUsService.submitContactForm(this.formVal);
    $(".alert").slideDown()
    return false;    
  }

}
