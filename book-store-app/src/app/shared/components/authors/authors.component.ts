import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorsModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  /*@ContentChild(AuthorsAddressComponent) authorAddress: AuthorsAddressComponent
  @Input() data: number;
  @Input() data2: boolean;
  @Input() authors: AuthorsModel;

  public childCounter: number = 0;

  constructor() {
    console.log('Hello from author constructor');
   }
  ngAfterContentInit(): void {
    console.log('This is afterContentInit '+ this.authorAddress?.address);
  }

  ngAfterContentChecked(): void {
    console.log('This is afterContentChecked '+ this.authorAddress?.address);
  }

  ngDoCheck(): void {
    console.log(this.authors);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Hello from author ngOnInit');
  }

  public incCounter(): void{
    this.childCounter++;
  }

  ngOnDestroy(): void {
    console.log('Authors component destroyed');
  }
  public data: number;
  public setData(value: number): void {
    this.data = value;
  }
  constructor(private _testService: TestService) { }
  public btnClick(): void{
    this._testService.myData = 'This text is from child component';
  }
  @Output() myData = new EventEmitter<string>();
  public btnClick(): void{
    this.myData.emit('This text is from child component');
  }
  
  @Input() 
  get data(){
    return this._data
  }
  set data(value: number){
    this._data = ++value;
  }
  private _data: number;*/

  //@Input()
  //showAuthors: boolean;
}
