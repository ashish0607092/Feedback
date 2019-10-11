import { GenericResponse, Module } from '@feedback-workspace/api-interfaces';

export interface ModuleResponse extends GenericResponse {
  data: Array<Module>
}
