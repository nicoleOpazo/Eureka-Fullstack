import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './personas-areas/components/registro/registro.component';
import { AcercaComponent } from './personas-areas/components/acerca-de/acerca.component';
import { ResultadosTablaComponent } from './personas-areas/components/resultados-tabla/resultadosTabla.component';
import { ResultadosGraficoComponent } from './personas-areas/components/resultados-grafico/resultadosGrafico.component';


const routes: Routes = [
    { path: '', redirectTo: '/registro', pathMatch: 'full' },
    { path: 'registro', component: RegistroComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'rtabla', component: ResultadosTablaComponent},
    { path: 'rgrafico', component: ResultadosGraficoComponent}
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
