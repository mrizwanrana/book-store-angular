import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  public titleErrorMessage: string;

  prices: any[] = [
    { value: 1000, viewValue: '1000' },
    { value: 2000, viewValue: '2000' },
    { value: 3000, viewValue: '3000' },
    { value: 4000, viewValue: '4000' },
    { value: 5000, viewValue: '5000' },

  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Doller' },
    { value: 'INR', viewValue: 'Indian Rupees' },
    { value: 'PKR', viewValue: 'Pakistani Rupees' },
    { value: 'AED', viewValue: 'UAE Dirham' },
    { value: 'SAR', viewValue: 'Sauidi Arab Ryal' },
  ];

  public addBookForm: FormGroup
  constructor(private _bookService: BookService, private _formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();

    //console.log(this.addBookForm.controls.title);
    //console.log(this.addBookForm.get('title'));

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    });
  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors')
  }

  private initForm(): void {

    this.addBookForm = this._formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      //author: '',
      totalPages: '',
      price: this._formbuilder.group({
        currency: '',
        value: ''
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formbuilder.array([this.getAuthorsControl()])


      /*this.addBookForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
        author: new FormControl(),
        totalPages: new FormControl(),
        price: new FormGroup({
          currency: new FormControl(),
          value: new FormControl()
        }),
        publishedOn: new FormControl(),
        isPublished: new FormControl(),
        formatType: new FormControl(),
        pdfFormat: new FormControl(),
        docFormat: new FormControl()*/
    });
  }

  private getAuthorsControl(): FormGroup {
    return this._formbuilder.group({
      fullName: '',
      address: ''
    });
  }

  /*updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'ASP',
      author: 'Muhammad Rizwan'
    });
  }*/

  public saveBook(): void {
    //console.log(this.addBookForm.value);
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value)
      .subscribe(x => {
        console.log(x);
      });
    }
    else {
      alert('From invalid');
    }
  }

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors.required) {
        this.titleErrorMessage = 'This is required field';
      }
      else if (titleControl.errors.minlength) {
        this.titleErrorMessage = 'Minimum length is ' + titleControl.errors.minlength.requiredLength;
      }
    }
  }

  private formatTypeChanged(formatType: string | null): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    pdfControl?.clearValidators();
    docControl?.clearValidators();

    if (formatType === 'pdf') {
      pdfControl?.setValidators(Validators.required);
    } else if (formatType === 'doc') {
      docControl?.setValidators(Validators.required);
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

  public addMoreAuthors(): void{
    this.authors.push(this.getAuthorsControl());
  }

  public removeAuthor(i: number): void{
    this.authors.removeAt(i);
  }
}
