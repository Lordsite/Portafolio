import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Larrytech } from './larrytech/larrytech';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "Larrytech",
        component: Larrytech
    }
];
