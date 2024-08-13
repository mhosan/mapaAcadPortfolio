import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageToTextService {
  private apiKey = "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";
  
  /** Este modelo carga rápido. Es bastante preciso.*/
  private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base';

  /** Este modelo demora un poco en cargar. Es bastante preciso. En una acuarela con un fondo con nubes
   * o humo, dijo que era una pintura e identifico tres objetos en la pintura. */
  //private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large';

  /** Este modelo carga rápido. Es mas o menos preciso. */
  //private apiUrl = 'https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning';          
  
  /** Este modelo de Microsoft demora un poco en cargar. Es muy preciso y a veces tira opiniones sobre
   * la imagen. En una acuarela con un fondo con nubes o humo, dijo que "Hay un cielo nublado"*/
  //private apiUrl = 'https://api-inference.huggingface.co/models/microsoft/git-base';                            
  
  /** Este modelo demora un poco en cargar. NO es preciso, a veces pone palabras inconexas.*/
  //private apiUrl = 'https://api-inference.huggingface.co/models/ifmain/vit-gpt2-image2promt-stable-diffusion';
  
  constructor(private http: HttpClient) { }

  convertImageToText(data: Blob): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, data, { headers });

  }
}
