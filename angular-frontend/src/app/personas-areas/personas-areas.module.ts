import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AcercaComponent } from './components/acerca-de/acerca.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResultadosTablaComponent } from './components/resultados-tabla/resultadosTabla.component';
import { ResultadosGraficoComponent } from './components/resultados-grafico/resultadosGrafico.component';

@NgModule({
    imports: [
        RouterModule, 
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        AcercaComponent,
        RegistroComponent,
        ResultadosTablaComponent,
        ResultadosGraficoComponent
    ],
    declarations: [
        AcercaComponent,
        RegistroComponent,
        ResultadosTablaComponent,
        ResultadosGraficoComponent
    ],
    providers: [],
})
export class PersonasAreasModule {
}