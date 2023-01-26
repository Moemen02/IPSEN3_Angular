import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnChanges{
  @Input() total: number
  @Output() buttonPress = new EventEmitter<number>()
  
  currentPage = 0
  
  ngOnChanges() {
  this.currentPage = 0
  }

  goUp() {
    if ((this.currentPage + 1) * 25 < this.total) {
      this.currentPage += 1
      this.buttonPress.next(this.currentPage)
    }
  }

  goDown() {
    if (this.currentPage > 0) {
      this.currentPage -= 1
      this.buttonPress.next(this.currentPage)
    }
  }
}
