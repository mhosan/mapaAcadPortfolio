import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
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
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.css'
})
export class IaComponent {
  selectedImage: string | ArrayBuffer | null = null;
  imageUrl: string = '';
  generatedText: string = '';

  constructor(private imageToTextService: ImageToTextService, private http: HttpClient) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      }
      reader.readAsDataURL(file);// Esto ejecuta el reader y convierte la imagen a un string base64
      const blob = new Blob([file], { type: file.type });
      this.imageToTextService.convertImageToText(blob).subscribe(response => {
        this.generatedText = response[0]?.generated_text || 'No text generated';
        console.log(`resultado: ${this.generatedText}`);
      });
    }
  }

  // Método para manejar la entrada de la URL de la imagen
  onUrlInput(): void {
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
        this.imageToTextService.convertImageToText(file).subscribe(response => {
          this.generatedText = response[0]?.generated_text || 'No text generated';
          console.log(`resultado: ${this.generatedText}`);
        });
      }
    });
  }

}
