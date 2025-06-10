import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Llm7Service } from 'src/app/servicios/llm7.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-llm7-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './llm7-chat.component.html',
  styleUrls: ['./llm7-chat.component.css']
})
export class Llm7ChatComponent {
  question: string = '';
  answer: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private llm7Service: Llm7Service) {}

  sendQuestion() {
    this.answer = '';
    this.error = '';
    this.loading = true;
    this.llm7Service.askQuestion(this.question).subscribe({
      next: (resp) => {
        this.answer = resp;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error: ' + (err?.message || err);
        this.loading = false;
      }
    });
  }
}
