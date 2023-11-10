import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AreaService {
    private endPointListadoAreas: string = 'http://localhost:8080/areas/listadoAreas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }

    getAreasConCantidadPersonas(): Observable<any[]> {
        return this.http.get<any[]>(this.endPointListadoAreas);
    }

}
