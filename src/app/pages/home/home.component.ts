import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  servicios: any[] = [
    {
      nombre: 'Limpieza dental',
      imagen: 'assets/limpieza.jpg',
      descripcion: 'Realizamos limpiezas dentales profesionales para mantener tus dientes sanos y brillantes.'
    },
    {
      nombre: 'Extracción de dientes',
      imagen: 'assets/extraccion.jpg',
      descripcion: 'Ofrecemos extracciones dentales seguras y sin dolor para tratar problemas como muelas del juicio.'
    },
    {
      nombre: 'Tratamientos de ortodoncia',
      imagen: 'assets/ortodoncia.jpg',
      descripcion: 'Brindamos tratamientos de ortodoncia personalizados para corregir la alineación de tus dientes.'
    },
    {
      nombre: 'Implantes dentales',
      imagen: 'assets/implantes.jpg',
      descripcion: 'Colocamos implantes dentales duraderos y de alta calidad para reemplazar dientes perdidos.'
    },
    {
      nombre: 'Carillas dentales',
      imagen: 'assets/Carillas.jpg',
      descripcion: 'Es un medio rápido y eficaz para mejorar la estética de la boca y tener una gran sonrisa'
    },
    {
      nombre: 'Exámenes de rutina',
      imagen: 'assets/rutina.jpg',
      descripcion: 'Realizar citas de rutina para mantener una sonrisa sana y que les guste mucho a nuestros clientes'
    },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
  }
  scrollTo(sectionId: string) {
    const section = this.el.nativeElement.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  logout(){
    this.router.navigate(['/login'])
      }
}
