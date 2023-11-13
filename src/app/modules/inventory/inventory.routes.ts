import { Routes } from "@angular/router";
import { MarcaPageComponent, MedidaPageComponent } from "./pages";


export const routes:Routes = [
    {
        path: 'medida',
        title: 'Medida',
        component: MedidaPageComponent
    },
    {
        path: 'marca',
        title: 'Marca',
        component: MarcaPageComponent
    }
]