import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    public faFacebookMessenger = faFacebookMessenger;
    public faInstagram = faInstagram;
    public faWhatsapp = faWhatsapp;
    public isHome = true;

    constructor(private title: Title) {
        title.setTitle('Doglio - Contacto');
    }

    ngOnInit() {}
}
