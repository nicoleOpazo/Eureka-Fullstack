import { Area } from "./area.model";

export class Persona {
    id?: number;
    nombre: string;
    email: string;
    area?: Area;

    constructor() {
        this.nombre = '';
        this.email = '';
    }
}
