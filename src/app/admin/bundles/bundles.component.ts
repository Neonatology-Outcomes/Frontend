import { Component, OnInit, DoCheck } from '@angular/core';
import { forkJoin } from 'rxjs';
import { isEmpty, isNil, omit, pick, find, map } from 'ramda';
import { MessageService } from 'primeng/api';
import { Bundle } from './model';
// import HttpService from 'src/app/services/http.service';
// import { endpoints } from 'src/constants/api';

@Component({
  selector: 'app-bundles-index',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
  providers: [MessageService],
})
export default class BundlesComponent implements OnInit, DoCheck {
  public displayDialog: boolean = false;
  public submitted = false;
  public loading = false;
  public editing = false;
  public dialogHeader: string;
  public selectedBundle: Bundle;

  public newBundle: Bundle;

  public bundles: Bundle[];

  public validForm: boolean;

  constructor(
    // private httpService: HttpService,
    private messageService: MessageService,
  ) {
    this.bundles = [];
    this.newBundle = new Bundle();
    this.editing = false;
    this.validForm = false;
  }

  private fetchBundlesData() {
    //
  }

  public ngOnInit() {
    // this.fetchBundlesData();
  }

  private validateForm() {
    this.validForm = !isNil(this.newBundle.name) && !isEmpty(this.newBundle.description)
    &&  !isEmpty(this.newBundle.category);
  }

  public showCreateDialog() {
    this.newBundle = new Bundle();
    this.editing = false;
    this.dialogHeader = 'Create bundle';
    this.displayDialog = true;
  }

  public showEditDialog({ data }) {
    this.newBundle = { ...data };
    this.editing = true;
    this.validForm = true;
    this.dialogHeader = 'Edit bundle';
    this.displayDialog = true;
  }

  public save() {}

  private createBundle(): void {}

  public ngDoCheck() {
    this.validateForm();
  }

}
