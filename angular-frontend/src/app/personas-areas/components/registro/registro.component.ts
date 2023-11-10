import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/personas-areas/models/persona.model";
import { PersonaService } from "src/app/personas-areas/services/persona.service";
import { AreaService } from "src/app/personas-areas/services/area.service";
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
    title: string = 'Registro de Personas';
    persona: Persona = new Persona();
    areas: any[] = [];

    constructor(
        private personaService: PersonaService,
        private areaService: AreaService) { }

    ngOnInit(): void {
        this.areaService.getAreasConCantidadPersonas().subscribe((areas) => {
            this.areas = areas;
        });
    }

    agregarPersona(form: NgForm): void {
        if (form.invalid) {
            swal.fire({
                title: "Error",
                text: "Por favor, completa todos los campos del formulario.",
                icon: "error"
            });
            return;
        }

        this.personaService.create(this.persona)
            .subscribe((persona) => {
                swal.fire({
                    title: "Nueva Persona",
                    text: `Persona ${persona.nombre} creada con éxito!`,
                    icon: "success"
                });
            });
    }

}
