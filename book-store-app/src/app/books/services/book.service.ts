import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _httpClient: HttpClient){}

  public addBook(bookModel: BookModel): Observable<BookModel> {
    return this._httpClient.post<BookModel>('https://localhost:7157/api/Books', bookModel)
  }

  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7157/api/Books')
  }
}
/*export class BookService {
  private allBooks: BookModel[] = [
    this.createBook(1, 'C# Programming', 450, 'Andrew Troelsen', 'USD', 49, true),
    this.createBook(2, 'ASP.NET Core MVC', 620, 'Adam Freeman', 'USD', 59, true),
    this.createBook(3, 'Angular for Beginners', 380, 'Narasimha Reddy', 'INR', 299, true),
    this.createBook(4, 'Azure walkthrough', 879, 'Pintu Verma', 'INR', 399, true),
    this.createBook(5, 'ASP.NET Core Web API', 546, 'Nagesh Khatri', 'USD', 99, true),
    this.createBook(6, 'Mathematics Book', 2345, 'Rich Johonson', 'USD', 342, true),
    this.createBook(7, 'Chemistry Book', 342, 'Darvin Musk', 'INR', 345, true)
  ];

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): BookModel[] {
    return this.allBooks;
  }

  public recentBooks(): BookModel[] {
    return [
      this.createBook(1, 'C# Programming', 450, 'Andrew Troelsen', 'USD', 49, true),
      this.createBook(2, 'ASP.NET Core MVC', 620, 'Adam Freeman', 'USD', 59, true)
    ];
  }

  private createBook(
    id: number,
    title: string,
    totalPages: number,
    author: string,
    currency: string,
    price: number,
    isPublished: boolean
  ): BookModel {
    const book = new BookModel();
    book.id = id;
    book.title = title;
    book.totalPages = totalPages;
    book.author = author;
    book.price = { currency, value: price };
    book.isPublished = isPublished;
    return book;
  }
}*/
