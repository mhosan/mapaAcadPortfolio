import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiNasaService {

  constructor(private http: HttpClient) { }

  getApodImage(): Observable<any> {
    let datosNasa = this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=2Fl85OVkIikD8adDGusEHohFyLB1YED3MtTWT5So');
    return datosNasa;
  }
}
