import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  @Input() active;
  @Output() mobileNavToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  closeMobileNav() {
    this.mobileNavToggle.emit(false);
  }

}
