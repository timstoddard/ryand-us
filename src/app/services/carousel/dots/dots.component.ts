import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class DotsComponent implements OnInit {
  @Input() length = 0;
  @Input() activeDotIndex = 0;
  @Output() select = new EventEmitter<number>();
  numbers = [];

  ngOnInit() {
    this.numbers = Array(this.length).fill(0);
  }

  selectDot(index: number) {
    this.select.emit(index);
  }
}
