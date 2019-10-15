import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { CreateModule } from '../module-list/store/actions/module.action';
import { Module } from '@feedback-workspace/api-interfaces';
import { ColorEvent } from 'ngx-color';
import { ModuleState } from '../module-list/store/state/module.state';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {
  @Select(ModuleState.isModuleCreated) isModuleCreated$;
  moduleForm = new FormGroup({
    moduleControl: new FormControl('', Validators.required),
    moduleDescriptionControl: new FormControl(''),
    moduleColorControl: new FormControl('')
  })
  colorArray = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080']
  state = ''
  private createModuleSubs = new SubSink();
  constructor(private store: Store) { }

  ngOnInit() {
    this.createModuleSubs.add(this.isModuleCreated$.subscribe(val => {
      if (val) {
        this.moduleForm.reset();
      }
    }))
  }
  changeComplete(event: ColorEvent) {
    this.moduleColor.setValue(event.color.hex)
  }
  addModule() {
    const createModulePayload: Module = {
      name: this.moduleName.value,
      description: this.moduleDescription.value,
      colorCode: this.moduleColor.value
    }
    this.store.dispatch(new CreateModule(createModulePayload));
  }
  get moduleName() {
    return this.moduleForm.controls.moduleControl;
  }
  get moduleDescription() {
    return this.moduleForm.controls.moduleDescriptionControl;
  }
  get moduleColor() {
    return this.moduleForm.controls.moduleColorControl;
  }
}
