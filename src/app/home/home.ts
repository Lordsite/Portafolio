import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
RouterModule

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  menuAbierto = false;

toggleMenu() {
  this.menuAbierto = !this.menuAbierto;
}
}
