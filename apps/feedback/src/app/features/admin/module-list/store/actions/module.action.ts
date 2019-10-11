import { Module } from '@feedback-workspace/api-interfaces';

export class GetAllModule {
  static readonly type = '[Module] GET_ALL_MODULE';
}
export class GetAllModuleSuccess {
  static readonly type = '[Module] GET_ALL_MODULE_SUCCESS';
  constructor(public module: Array<Module>) { }
}
export class GetAllModuleFailed {
  static readonly type = '[Module] GET_ALL_MODULE_FAILED';
}
export class CreateModule {
  static readonly type = '[Module] CREATE_MODULE';
  constructor(public createModulePayload: Module) {
  }
}
export class DeleteModule {
  static readonly type = '[Module] DELETE_MODULE';
  constructor(public id: string) {
  }
}
