import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatLLM7 } from 'langchain-llm7';

@Injectable({
  providedIn: 'root'
})
export class Llm7Service {
  private llm: ChatLLM7;

  constructor() {
    // Puedes configurar el modelo y la API key aquí si es necesario
    this.llm = new ChatLLM7({
      // apiKey: 'TU_API_KEY', // Si es necesario
      // model: 'llama-3-sonar-large-32k-online', // O el modelo que prefieras
    });
  }

  askQuestion(question: string): Observable<string> {
    return from(this.llm.invoke(question)).pipe(
      map((result: any) => {
        // El resultado puede variar según el modelo, ajusta si es necesario
        return typeof result === 'string' ? result : result?.content || '';
      })
    );
  }
}
