import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageToTextService {
  private apiKey = "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";
  //private apiUrl = 'https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning';
  private apiUrl = 'https://api-inference.huggingface.co/models/microsoft/git-base';
  //private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large';
  constructor(private http: HttpClient) { }

  /*   convertImageToText(image: File): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.apiKey}`,
        'method': "POST",
        'body': JSON.stringify(data),
      });
      const formData = new FormData();
      formData.append('file', image);
  
      return this.http.post<any>(this.apiUrl, formData, { headers }).pipe(
        catchError(err => {
          console.error('Error al procesar la solicitud', err);
          return throwError(err);
        })
      );
    }
   */
  convertImageToText(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, JSON.stringify(data), { headers });

  }
}
