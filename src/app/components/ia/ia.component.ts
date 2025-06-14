import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';

import { IaOrquestadorService } from '../../servicios/ia-orquestador.service';

@Component({
    selector: 'app-ia',
    standalone: true,
    templateUrl: './ia.component.html',
    styleUrl: './ia.component.css',
    imports: [HttpClientModule, CommonModule, FormsModule, RouterLink]
})
export class IaComponent {
  ciudad: string = '';
  resultado: string = '';
  loading: boolean = false;

  constructor(private iaOrquestadorService: IaOrquestadorService) {}

  obtenerPronostico() {
    if (!this.ciudad) return;
    this.loading = true;
    this.resultado = '';
    this.iaOrquestadorService.obtenerResumenPronostico(this.ciudad).subscribe({
      next: (res) => {
        // Extraer solo la propiedad "content" del resultado JSON-RPC y formatear como párrafo
        if (res && res.result && res.result.content) {
          // Reemplazar saltos de línea múltiples por un solo espacio
          this.resultado = res.result.content.replace(/\s*\n+\s*/g, ' ').trim();
        } else {
          this.resultado = typeof res === 'object' ? JSON.stringify(res, null, 2) : res;
        }
        this.loading = false;
      },
      error: (err) => {
        this.resultado = 'Error al obtener el pronóstico';
        this.loading = false;
      }
    });
  }
}
