import { Component } from "@angular/core";

@Component ({
    selector: 'app-sideBar',
    templateUrl: './sideBar.component.html',
    styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent {
    title: string = 'Gestión de Personas App'
}