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
  //private apiUrl = 'https://api-inference.huggingface.co/models/microsoft/git-base';
  //private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large';
  //private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base';
  private apiUrl = 'https://api-inference.huggingface.co/models/ifmain/vit-gpt2-image2promt-stable-diffusion';
  
  constructor(private http: HttpClient) { }

  convertImageToText(data: Blob): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, data, { headers });

  }
}
