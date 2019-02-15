import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-method-dropdown',
  templateUrl: './method-dropdown.component.html',
  styleUrls: ['./method-dropdown.component.css']
})
export class MethodDropdownComponent implements OnInit {

  @Input() methods:[];
  @Input() selectedMethod: number;

  constructor() { }

  ngOnInit() {
    console.log("passed methods", this.methods);
  }

}
