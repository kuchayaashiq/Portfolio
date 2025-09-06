import { Component } from '@angular/core';

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
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
        // Show success message
        alert('Message sent successfully!');
      }, 2000);
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
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
