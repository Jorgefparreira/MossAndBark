import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(
    public _http: HttpClient
  ) { } 

  public submitContactForm(values){
    let url = "https://us-central1-mossandbark-4c8e2.cloudfunctions.net/app";
    // this._http.get(url)
    $.post(url, values, function(response){
    },'json');    
  }
}
