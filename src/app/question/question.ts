import { Component, signal } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionService } from '../../services/main.service';
import linkifyHtml from "linkify-html"

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  protected webData = signal<QuestionModel[]>([])
  protected webError = signal<any>(null)
  constructor() {
    QuestionService.getAllAdmissionQuestions()
      .then(rsp => this.webData.set(rsp.data))
      .catch(e => this.webError.set(e))
  }

  convertToLinks(text : string) {
    return linkifyHtml(text)
  }
}
