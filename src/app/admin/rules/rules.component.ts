import { Component, OnInit, DoCheck } from '@angular/core';
// import { forkJoin } from 'rxjs';
import { isEmpty, isNil, omit, pick, find, map } from 'ramda';
import { Rule } from './model';
// import HttpService from 'src/app/services/http.service';
// import { endpoints } from 'src/constants/api';


const rulesSeed: Rule[] = [
  {id: 1, name: 'Human milk consumption', category: "Birth Details", dataField: 'Day of Life', operator: '<=', value: '', units: '', description: ''},
  {id: 2, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
  {id: 3, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
  {id: 4, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
  {id: 5, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
  {id: 6, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
  {id: 7, name: 'Hydrogen', category: "category", dataField: 'H', operator: '', value: '', units: '', description: ''},
];

@Component({
  selector: 'app-rules-index',
  styleUrls: ['rules.component.scss'],
  templateUrl: 'rules.component.html',
})


export default class RulesComponent implements OnInit, DoCheck {
  public displayDialog: boolean = false;
  public submitted = false;
  public loading = false;
  public editing = false;
  public dialogHeader: string;
  public selectedRule: Rule;
  

  public displayedColumns: string[] = ['name', 'category'];

  public newRule: Rule;

  public rules: Rule[];
  

  public validForm: boolean;

  constructor(
    // private httpService: HttpService,
  ) {
    this.rules = [...rulesSeed];
    this.newRule = new Rule();
    this.editing = false;
    this.validForm = false;
  }

  private fetchRulesData() {
    //
  }

  public ngOnInit() {
    // this.fetchRulesData();
  }

  private validateForm() {
    this.validForm = !isNil(this.newRule.name) && !isEmpty(this.newRule.description)
    &&  !isEmpty(this.newRule.category);
  }

  public showCreateDialog() {
    this.newRule = new Rule();
    this.editing = false;
    this.dialogHeader = 'Create rule';
    this.displayDialog = true;
  }

  public showEditDialog({ data }) {
    this.newRule = { ...data };
    this.editing = true;
    this.validForm = true;
    this.dialogHeader = 'Edit rule';
    this.displayDialog = true;
  }

  public save() {}

  private createRule(): void {}

  public ngDoCheck() {
    this.validateForm();
  }

}
