import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Larrytech } from './larrytech/larrytech';
import { Proyecto } from './proyecto/proyecto';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "Larrytech",
        component: Larrytech
    },
    {
        path: "Proyecto/:id",
        component: Proyecto
    }
];
