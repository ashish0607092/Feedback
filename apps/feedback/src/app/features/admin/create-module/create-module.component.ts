import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateModule } from '../module-list/store/actions/module.action';
import { Module } from '@feedback-workspace/api-interfaces';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {
  moduleForm = new FormGroup({
    moduleControl: new FormControl('', Validators.required),
    moduleDescriptionControl: new FormControl(''),
    moduleColorControl: new FormControl('')
  })

  constructor(private store: Store) { }

  ngOnInit() {
  }
  addModule() {
    const createModulePayload: Module = {
      name: this.moduleName,
      description: this.moduleDescription,
      color: this.moduleColor
    }
    this.store.dispatch(new CreateModule(createModulePayload))
  }
  get moduleName() {
    return this.moduleForm.controls.moduleControl.value;
  }
  get moduleDescription() {
    return this.moduleForm.controls.moduleDescriptionControl.value;
  }
  get moduleColor() {
    return this.moduleForm.controls.moduleColorControl.value;
  }
}
