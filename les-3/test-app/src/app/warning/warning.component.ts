import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  errorMessage = 'This is an error message!';
  warningClass = 'alert alert-warning text-center';

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick(e, str) {
    console.log(e);
    console.log(str);
  }

  public getError() {
    return this.errorMessage + '!!!!!';
  }
}
