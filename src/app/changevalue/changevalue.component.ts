import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-changevalue',
  templateUrl: './changevalue.component.html',
  styleUrls: ['./changevalue.component.css']
})
export class ChangevalueComponent implements OnInit {
  @Input()
  changevalue:number;

  @Output()
  update = new EventEmitter<number>();

  constructor(){
  }

  ngOnInit(): void {
  }
  updateprice(){
    this.update.emit(this.changevalue);
  }
}
