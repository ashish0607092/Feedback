import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { ModuleComponent } from './module/module.component';
import { MaterialModule } from '../../common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateModuleComponent } from './create-module/create-module.component';
import { ModuleListComponent } from './module-list/component/module-list.component';
import { NgxsModule } from '@ngxs/store';
import { ModuleState } from './module-list/store/state/module.state';
@NgModule({
  declarations: [ModuleComponent, CreateModuleComponent, ModuleListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ModuleState])
  ]
})
export class AdminModule { }
