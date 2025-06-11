import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class Llm7Service {
  private llm: any; // No tipar para evitar error de tipo
  private llmReady: Promise<any>;

  constructor() {
    // Import dinámico de la librería solo cuando se instancia el servicio
    this.llmReady = import('langchain-llm7').then(mod => {
      this.llm = new mod.ChatLLM7({
        //modelName: 'gpt-4.1-mini-2025-04-14',
        //modelName: 'grok',
        modelName: 'gpt-4.1-2025-04-14',
        //modelName: 'llama-3-sonar-large-32k-online',
        //modelName: 'deepseek-r1',
        //modelName: "gpt-4.1-nano", // Default
        temperature: 0.80,
        // maxTokens: 150,
      });
      return this.llm;
    });
  }

  askQuestion(question: string): Observable<string> {
    return from(this.llmReady).pipe(
      switchMap(llm => from(llm.invoke(question))),
      map((result: any) => {
        // El resultado puede variar según el modelo, ajusta si es necesario
        return typeof result === 'string' ? result : result?.content || '';
      })
    );
  }
}
