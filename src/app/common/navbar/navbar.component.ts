import {Component, OnInit, HostListener, ElementRef, Input} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

// import {faBu}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navbarColor;

  public navbar: any;
  public mobileNavActive: boolean;
  public navbarDark: boolean;
  public navbarTransparent: boolean;
  public navbarClasses: object;

  constructor(private router: Router, private el: ElementRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        document.body.classList.remove('modal-open');
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.navbar.classList.add('short');
      if (this.navbarTransparent && !this.navbarDark) {
        this.navbar.classList.remove('navbar-dark', 'bg-transparent');
        this.navbar.classList.add('navbar-light', 'bg-white');
      }
    } else {
      this.navbar.classList.remove('short');
      if (this.navbarTransparent && !this.navbarDark) {
        this.navbar.classList.add('navbar-dark', 'bg-transparent');
        this.navbar.classList.remove('navbar-light', 'bg-white');
      }
    }
  }

  ngOnInit() {
    if (this.navbarColor === 'dark') {
      this.navbarDark = true;
      this.navbarTransparent = false;
    } else if (this.navbarColor === 'transparent') {
      this.navbarDark = false;
      this.navbarTransparent = true;
    }

    this.navbar = this.el.nativeElement.children[0];

    this.navbarClasses = {
      'bg-primary': this.navbarDark,
      'navbar-light bg-white': !this.navbarDark && !this.navbarTransparent,
      'navbar-dark bg-transparent': this.navbarTransparent
    };
  }

  navbarToggle() {
    this.mobileNavActive = !this.mobileNavActive;
    this.mobileNavActive ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }

}
