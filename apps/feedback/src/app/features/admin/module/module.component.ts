import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteModule } from '../module-list/store/actions/module.action';
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  @Input() module;
  constructor(private store: Store) { }

  ngOnInit() {
  }
  deleteModule(module) {
    this.store.dispatch(new DeleteModule(module._id))
  }
}
