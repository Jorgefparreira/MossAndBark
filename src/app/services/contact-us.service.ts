import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  message = "";
  messageState;

  public submitContactForm(values){
    Axios.post('https://us-central1-mossandbark-4c8e2.cloudfunctions.net/contactMailer', values)
    .then((response) => {
      this.message = "Thank you for your message! We'll be in contact as soon as possible.";
      this.messageState = "danger"; 
      console.log("sent")
    })    
    .catch(error => {
      this.message = "Oops, there's been an error. Please try again later.";
      this.messageState = "danger";
      console.log(error);
    });       
  }
}
