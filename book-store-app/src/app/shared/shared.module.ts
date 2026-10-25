import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoudComponent } from './components/not-foud/not-foud.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
import { HttpClientModule } from '@angular/common/http';
import { CustompipePipe } from './pipe/custompipe.pipe';




@NgModule({
  declarations: [
    NotFoudComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorsAddressComponent,
    CustompipePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorsComponent,
    AuthorsAddressComponent,
    HttpClientModule,
    CustompipePipe
  ]
})
export class SharedModule { }
