import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
