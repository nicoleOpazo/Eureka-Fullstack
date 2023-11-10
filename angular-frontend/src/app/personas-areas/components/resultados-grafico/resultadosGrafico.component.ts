import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { Chart } from 'chart.js/auto';

@Component({
    selector: 'app-resultadosGrafico',
    templateUrl: './resultadosGrafico.component.html'
})
export class ResultadosGraficoComponent implements OnInit {

    @ViewChild('barChart')
    barChart!: ElementRef;
    barChartRef: any;

    areasConCantidadPersonas: any[] = [];

    constructor(
        private router: Router,
        private areaService: AreaService) { }

    navigateToResultadosTabla() {
        this.router.navigate(['/rtabla']);
    }

    createBarChart(): void {
        const ctx = this.barChart.nativeElement.getContext('2d');
        this.barChartRef = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.areasConCantidadPersonas.map(area => area.nombre),
                datasets: [{
                    label: 'Cantidad de Personas por Área',
                    data: this.areasConCantidadPersonas.map(area => area.cantidadPersonas),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: Math.ceil(Math.max(...this.areasConCantidadPersonas.map(area => area.cantidadPersonas)) / 10) * 10 
                    }
                }
            }
        });
    }


    ngOnInit(): void {
        this.areaService.getAreasConCantidadPersonas().subscribe((areas) => {
            this.areasConCantidadPersonas = areas;
            this.createBarChart();
        });
    }

}
