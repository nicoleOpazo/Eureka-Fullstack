import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonaService } from './persona.service';
import { Persona } from '../models/persona.model';

describe('PersonaService', () => {
    let service: PersonaService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PersonaService],
        });

        service = TestBed.inject(PersonaService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('debería crearse el servicio', () => {
        expect(service).toBeTruthy();
    });

    it('debería devolver una lista de personas', () => {
        const mockPersonas: Persona[] = [
            { id: 1, nombre: 'Persona1', email: 'persona1@example.com', area: { id: 1, nombre: 'Área1' } },
            { id: 2, nombre: 'Persona2', email: 'persona2@example.com', area: { id: 1, nombre: 'Área1' } },
        ];

        service.getPersonas().subscribe(personas => {
            expect(personas).toEqual(mockPersonas);
        });

        const req = httpMock.expectOne('http://localhost:8080/personas/listadoPersonas');
        expect(req.request.method).toBe('GET');
        req.flush(mockPersonas);
    });

    it('debería devolver la cantidad de personas por área', () => {
        const areaId = 1;
        const mockCantidadPersonas = 5;

        service.getPersonasPorArea(areaId).subscribe(cantidad => {
            expect(cantidad).toEqual(mockCantidadPersonas);
        });

        const req = httpMock.expectOne(`http://localhost:8080/personas/countByArea/${areaId}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockCantidadPersonas);
    });
});
