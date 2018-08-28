import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input()
  private rating: number = 0;
  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [true, true, true, true, true]
  }

}
