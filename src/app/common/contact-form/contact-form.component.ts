import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
    @Input() formDark;

    public form: NgForm;
    public name: string;
    public email: string;
    public message: string;
    public submitTrigger: boolean;
    public faWhatsapp = faWhatsapp;
    public mouseOverSubmit: boolean;
    public whatsapp = 'https://api.whatsapp.com/send/?phone=525554306690&text=$text&app_absent=0';

    constructor() {}

    ngOnInit() {
        console.log(this.form);
    }

    submit(contactForm: any) {
        this.submitTrigger = true;
        const msg = `Soy ${contactForm.name}, ${contactForm.message}`;
        window.open(this.whatsapp.replace('$text', encodeURIComponent(msg)), '_blank');
    }
}
