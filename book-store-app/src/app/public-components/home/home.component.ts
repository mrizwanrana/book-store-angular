import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorsModel } from 'src/app/shared/models/authors.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){}
ngOnInit(): void {
    
  }


  /*@ViewChild('btnCounter') btnCounter: ElementRef;
  @ViewChild(AuthorsComponent) authorsComponent: AuthorsComponent;

  public count: number =0;
  public test: boolean = false;
  public obj: AuthorsModel = {id:10, name:'Rizwan'};
  public address: string = 'Pakistan apna';

  private time: any;

  constructor(public _testService: TestService) {
    //console.log('Hello from home constructor');
   }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log('Home component destroyed');
  }
  ngAfterViewChecked(): void {
    //console.log(this.authorsComponent.childCounter);
  }
  ngAfterViewInit(): void {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = 'Button text updated';
  }

  ngOnInit(): void {
    console.log('Hello from home ngOnInit');
    this.timer();
    
  }

  public counter(): void{
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    this.address = this.address + this.count;
  }

  timer(): void{
    this.time=setInterval(() => {
      console.log(this.count);
      this.count++;
    }, 1000)
  }

  
  constructor(public _testService: TestService) { }
  @ViewChild('decButton') private decButton: MatButton;
  @ViewChild('authors') private childAuthor: AuthorsComponent;
  @ViewChild('title') private title: ElementRef;
  constructor(public _counterServices: CounterService) { }

  public childData($event: any): void{
    console.log($event);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childAuthor.setData(10);
      this.decButton.color = 'primary';
      this.decButton.disabled = true;

      this.title.nativeElement.innerHTML = 'This is updated tilte';
      console.log(this.title);
    }, 0);
  }
  public increase(): void{
    this._counterServices.incCounter();
  }
  public decrease(): void{
    this._counterServices.decCounter();
  }*/

}
