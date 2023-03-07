import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import TopbarComponent from './topbar.component';
import {
  MessageService,
} from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopbarModule { }
