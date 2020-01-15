import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = 'envapp';
  @Input() settings: any;

  ngOnInit() {
    this.title = this.settings.environment;
  }

}
