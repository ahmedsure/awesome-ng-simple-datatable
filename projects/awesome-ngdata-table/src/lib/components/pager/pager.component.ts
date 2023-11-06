import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OnChanges } from '@angular/core';
import { PagerService } from '../../services/pager.service';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() items: any[];
  @Input() pageSize = 10;
  @Input() totalItemsCount = 0;
  @Output() onPageChanged = new EventEmitter<any>();
  @Output() onPageSizeChanged = new EventEmitter<any>();
  // pager object
  pager: any = {};
  pages: any[];

  currentPage:number;
  constructor(private pagerService: PagerService) {
    this.pager = this.pagerService.getPager(this.totalItemsCount, this.currentPage, this.pageSize);
   }

  ngOnInit() {
    this.currentPage = 1;
    this.pages = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pager = this.pagerService.getPager(this.totalItemsCount, this.currentPage, this.pageSize);
    if (changes?.['totalItemsCount']) {
      this.currentPage = 1;
    }
  }

  changePage(page: number) {
    this.currentPage = page;
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalItemsCount, this.currentPage, this.pageSize);
    // get current page of items
    this.onPageChanged.emit(page);
  }

  next() {
    this.changePage(this.currentPage + 1);
  }
  previous() {
    this.changePage(this.currentPage - 1);
  }

  pageSizeChanged( newPageSize: any){
    const sentValue = newPageSize?.target?.value;
    if (sentValue && !isNaN(sentValue) ){
      this.pageSize = parseInt(sentValue);
      this.onPageSizeChanged.emit(parseInt(sentValue));
    }
  }

}
