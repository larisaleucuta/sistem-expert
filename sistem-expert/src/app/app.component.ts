import { Component } from '@angular/core';
import {data, rules} from "./baza_de_cunostinte";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  renderResults: boolean = false;
  questions = data;
  activeQuestion: any = this.questions[0];
  answeredQuestions = {};
  ruleStack = rules;
  result = '';

  constructor() {

  }

  popRule(index) {
    this.ruleStack.splice(index, 1)
  }

  applyRule() {
    let nextQuestion;
    let index = 0;
    while(!nextQuestion) {
      nextQuestion = this.ruleStack[index].call(this.answeredQuestions);
      index++;
    }
    this.popRule(index - 1);
    return nextQuestion
  }

  nextQuestion(): void {
    this.answeredQuestions[`question${this.activeQuestion.id}`] = this.activeQuestion.answer;

    const nextQuestion = this.applyRule();

    if(typeof(nextQuestion) === 'string') {
      this.renderResults = true;
      this.result = nextQuestion;
    } else {
      this.activeQuestion = nextQuestion
    }
  }
}
