import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { ToolbarComponent } from './toolbar.component';


@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolbarModule { }
