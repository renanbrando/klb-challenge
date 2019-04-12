import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  actions = [
    { text: "Aprovar", value: 1 },
    { text: "Recusar", value: 2 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
