import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  constructor(private router: Router) { }

  navigateToAcerca() {
    this.router.navigate(['/acerca']);
  }
}
