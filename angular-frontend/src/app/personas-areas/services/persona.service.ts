import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
    providedIn: 'root',
})
export class PersonaService {
    private apiUrl: string = 'http://localhost:8080/personas';
    private endPointGetAll: string = 'http://localhost:8080/personas/listadoPersonas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }


    create(persona: Persona): Observable<Persona> {
        return this.http.post<Persona>(`${this.apiUrl}`, persona, { headers: this.httpHeaders })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 400 || error.error === 'Email duplicado') {
                        return throwError('El correo electrónico ya está registrado');
                    }
                    return throwError(error);
                })
            );
    }

    getPersonas(): Observable<Persona[]> {
        return this.http.get(this.endPointGetAll).pipe(map(response => response as Persona[]));
    }

    getPersonasPorArea(areaId: number): Observable<number> {
        const url = `${this.apiUrl}/countByArea/${areaId}`;
        return this.http.get<number>(url);
    }
}
