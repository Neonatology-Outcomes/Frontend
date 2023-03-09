import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import RulesComponent from './rules.component';

@NgModule({
  declarations: [RulesComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class RulesModule { }
