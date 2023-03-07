import { DropdownModule } from 'primeng/dropdown';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';
// import { DataTableModule } from 'primeng'
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox'; 
import { routing } from './bundle.routing';
import BundlesComponent from './bundles.component';

@NgModule({
  declarations: [BundlesComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule, ReactiveFormsModule,
    ButtonModule, TableModule,
    ButtonModule, DynamicDialogModule,
    // DataTableModule, 
    DialogModule,
    DropdownModule, ConfirmDialogModule,
    CheckboxModule, ToastModule,
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BundlesModule { }
