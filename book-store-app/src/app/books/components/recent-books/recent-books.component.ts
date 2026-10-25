import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  public recentBooks: BookModel[];
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }
  private getRecentBooks(): void {
    //this.recentBooks = this._bookService.recentBooks();
  }
}
