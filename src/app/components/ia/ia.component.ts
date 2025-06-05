import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Importar FormsModule
import { ImageToTextService } from 'src/app/servicios/image-to-text.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ia',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        FormsModule
    ],
    templateUrl: './ia.component.html',
    styleUrl: './ia.component.css'
})
export class IaComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Referencia al input de tipo file

  selectedImage: string | ArrayBuffer | null = null;
  imageUrl: string = '';
  generatedText: string = '';

  constructor(private imageToTextService: ImageToTextService, private http: HttpClient) { }

  /**
   * Este metodo se utiliza cuando el usuario selecciona una imagen desde el equipo local,
   * y busca en su file system algún archivo jpg o png.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      }
      reader.readAsDataURL(file);// Esto ejecuta el reader. Y convierte la imagen a un string base64
      const blob = new Blob([file], { type: file.type });
      this.imageToTextService.convertImageToText(blob)
        .subscribe({
          next: (response) => {
            this.generatedText = response[0]?.generated_text || 'No se generó texto.';
            console.log(`Resultado: ${this.generatedText}`);
          },
          error: (err) => {
           this.errorDriver(err);
          }
        });
    }
  }

  /**
   * Este método se ejecuta cuando el usuario ingresa la imagen por medio
   * de una url, en lugar de seleccionarla desde el equipo local.
   */
  onUrlInput(): void {
    // Si se ingresa una URL, resetear el input de tipo file
    if (this.fileInput) {
      this.fileInput.nativeElement.value = ''; // Borrar el valor del input file
    }
    this.selectedImage = '';
    this.http.get(this.imageUrl, { responseType: 'blob' }).pipe(
      catchError(err => {
        console.error('Error al obtener la imagen', err);
        return of(null);
      })
    ).subscribe(blob => {
      if (blob) {
        const file = new File([blob], 'image.jpg');  // Nombre del archivo temporal
        // Crear una URL a partir del Blob para mostrar la imagen
        this.selectedImage = URL.createObjectURL(blob);
        this.imageToTextService.convertImageToText(file)
          .subscribe(response => {
            this.generatedText = response[0]?.generated_text || 'No se generó texto.';
            console.log(`resultado: ${this.generatedText}`);
          },
        error =>{
          this.errorDriver(error);
        });
      }
    });
  }

  /**
   * Manejador de errores de la API Inference
   */
  errorDriver(err:any){
    if (err?.error?.message?.includes('loading') || err?.status === 503) {
      // Detecta si el error está relacionado con la carga del modelo
      this.generatedText = 'El modelo aún se está cargando. Por favor, intentar nuevamente en unos momentos.';
    } else {
      // Manejador genérico para otros errores
      this.generatedText = `Ocurrió un error al generar el texto: ${JSON.stringify(err.message)}`
    }
    console.error('Error en la conversión de imagen a texto:', err);
  }

}
