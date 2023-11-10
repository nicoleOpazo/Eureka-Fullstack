import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service';
import { AreaService } from '../../services/area.service';
import { Persona } from '../../models/persona.model';
import { Area } from '../../models/area.model';

@Component({
    selector: 'app-resultadosTabla',
    templateUrl: './resultadosTabla.component.html',
    styleUrls: ['./resultadosTabla.component.css']
})
export class ResultadosTablaComponent implements OnInit {
    title: string = 'Tabla de Resultados';
    personas: Persona[] = [];
    areas: Area[] = [];
    areasConCantidadPersonas: any[] = [];

    constructor(
        private router: Router,
        private personaService: PersonaService,
        private areaService: AreaService) { }

    ngOnInit(): void {
        this.getAreasConCantidadPersonas();
    }



    navigateToResultadosTabla() {
        this.router.navigate(['/rtabla']);
    }

    getAreasConCantidadPersonas(): void {
        this.areaService.getAreasConCantidadPersonas().subscribe((areas) => {
            this.areasConCantidadPersonas = areas;
        });
    }
}
