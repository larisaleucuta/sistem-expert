import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result;
  resultImgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.result)
    this.resultImgUrl = `../../../assets/images/${this.result}.jpg`;
  }
}
