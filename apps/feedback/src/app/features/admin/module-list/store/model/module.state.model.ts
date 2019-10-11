import { Module } from '@feedback-workspace/api-interfaces';
export class ModuleStateModel {
  moduleLoading: boolean;
  moduleCreated: boolean;
  moduleDeleted: boolean;
  module: Array<Module>;
}
