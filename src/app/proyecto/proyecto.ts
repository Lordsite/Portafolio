import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  imports: [CommonModule],
  templateUrl: './proyecto.html',
  styleUrl: './proyecto.css',
})
export class Proyecto {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id')
    this.proyectoData(id);
  }

  proyectos: any[] = [];
  proyecto: any = null;

  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  async proyectoData(id: string | null){
    let response = await fetch("data/data.json");
    this.proyectos = await response.json();

    this.proyecto = this.proyectos.find(p => p.id === id)
    console.log(this.proyecto);
  }



  
}
