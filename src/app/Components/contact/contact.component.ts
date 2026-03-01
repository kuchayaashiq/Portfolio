import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  ngOnInit() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(environment.emailjs.publicKey);
    }
  }

  async onSubmit() {
    if (!this.isFormValid()) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message,
      to_email: 'kucchayaashiq@gmail.com',
    };

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
      );
      this.submitStatus = 'success';
      this.resetForm();
    } catch (error) {
      console.error('EmailJS error:', error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
      setTimeout(() => (this.submitStatus = 'idle'), 5000);
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.form.name &&
      this.form.email &&
      this.form.subject &&
      this.form.message
    );
  }

  private resetForm() {
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
