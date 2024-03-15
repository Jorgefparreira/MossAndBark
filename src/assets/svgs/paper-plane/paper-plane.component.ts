import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paper-plane',
  templateUrl: './paper-plane.component.html',
  standalone: true
})
export class PaperPlaneComponent implements OnInit {
  @Input() fill: string = "";

  constructor() { }

  ngOnInit() {
  }

}
