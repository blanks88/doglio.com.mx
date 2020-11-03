import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    @Input() light;
    public year = new Date().getFullYear();
    public faFacebookMessenger = faFacebookMessenger;
    public faInstagram = faInstagram;
    public faWhatsapp = faWhatsapp;
    public faHeart = faHeart;
    public isHome: boolean;

    constructor(private router: Router) {
        this.router.events.subscribe((events) => {
            if (events instanceof NavigationEnd) {
                events.url === '/home' || events.url === '/' || events.url === '/contact'
                    ? (this.isHome = true)
                    : (this.isHome = false);
            }
        });
    }

    ngOnInit() {}
}
