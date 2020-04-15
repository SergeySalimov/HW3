import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent implements OnInit {

  warningClass = 'alert alert-warning text-center';

  constructor() { }

  ngOnInit(): void {
  }

}
