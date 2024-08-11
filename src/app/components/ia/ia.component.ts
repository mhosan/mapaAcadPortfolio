import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Importar FormsModule


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

  // Método para manejar la selección de archivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Método para manejar la entrada de la URL de la imagen
  onUrlInput(): void {
    this.selectedImage = this.imageUrl;
  }
}
