import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

interface contactForm{
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  form: contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  images : string[] = [
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg'
  ]
  
  menuAbierto = false;

  currentIndex = 0;

  next(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(){
    this.currentIndex = (this.currentIndex - 1) % this.images.length;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  send(formRef: any) {

    // SI EL FORM ES INVÁLIDO
    if (formRef.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor, completa todos los campos correctamente antes de enviar.',
      });

      // marcar todos como "touched"
      Object.values(formRef.controls).forEach((control: any) => control.markAsTouched());

      return;
    }

    // LOADER
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espera',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    emailjs.send('service_55rxyc8', 'template_5dr2uqr', {...this.form}, {
      publicKey: '60Nq4rEme0MUi46u4'
    }).then(() => {

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarnos, te responderemos pronto.',
      });

      // reset form
      formRef.reset();
      this.form = { name: '', email: '', phone: '', message: '' };

    }).catch(() => {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
      });

    });
  }

}
