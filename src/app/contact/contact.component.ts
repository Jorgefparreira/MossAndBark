import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// Send Mail

var $form = $('form');
$form.submit(function(){
   $.post($(this).attr('action'), $(this).serialize(), function(response){
         // do something here on success
   },'json');
   return false;
});
  }

}
