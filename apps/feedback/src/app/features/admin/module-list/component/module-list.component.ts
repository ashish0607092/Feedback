import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ModuleState } from '../store/state/module.state';
import { GetAllModule } from '../store/actions/module.action';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  @Select(ModuleState.getAllModule) getAllModule$;
  @Select(ModuleState.isModuleLoading) isModuleLoading$;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllModule());
  }

}
