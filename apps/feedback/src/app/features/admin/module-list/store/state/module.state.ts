import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap, catchError } from 'rxjs/operators';
import * as HttpStatus from 'http-status-codes'
import { ModuleStateModel } from '../model/module.state.model';
import { AppState } from '../../../../../app.state.model';
import { GetAllModule, GetAllModuleSuccess, GetAllModuleFailed, CreateModule, DeleteModule } from '../actions/module.action';
import { ModuleService } from '../service/module.service';

@State<ModuleStateModel>({
  name: AppState.module,
  defaults: {
    moduleLoading: false,
    module: [],
    moduleCreated: false,
    moduleDeleted: false
  }
})
export class ModuleState {
  constructor(private moduleService: ModuleService) { }
  @Selector()
  static isModuleLoading(state: ModuleStateModel) {
    return state.moduleLoading;
  }
  @Selector()
  static isModuleCreated(state: ModuleStateModel) {
    return state.moduleCreated;
  }
  @Selector()
  static getAllModule(state: ModuleStateModel) {
    return state.module || [];
  }
  /**Commands */
  @Action(GetAllModule)
  getAllModule(ctx: StateContext<ModuleStateModel>) {
    return this.moduleService.getAllModule().pipe(
      tap(res => {
        if (res.statusCode === HttpStatus.OK && res.data !== null) {
          return ctx.dispatch(new GetAllModuleSuccess(res.data));
        } else {
          return ctx.dispatch(new GetAllModuleFailed());
        }
      }),
      catchError(err => {
        return ctx.dispatch(new GetAllModuleFailed());
      })
    );
  }
  @Action(CreateModule)
  createModule(ctx: StateContext<ModuleStateModel>, event: CreateModule) {
    ctx.patchState({
      moduleLoading: true
    })
    return this.moduleService.createModule(event.createModulePayload).pipe(
      tap(res => {
        if (res.status === HttpStatus.CREATED) {
          ctx.patchState({
            moduleLoading: false,
            moduleCreated: true,
          })
          ctx.dispatch(new GetAllModule());
          this.resetValue(ctx, { ModuleCreated: false });
        } else {
          ctx.patchState({
            moduleLoading: false
          })
        }
      }),
      catchError(err => {
        return err;
      })
    );
  } @Action(DeleteModule)
  deleteModule(ctx: StateContext<ModuleStateModel>, event: DeleteModule) {
    ctx.patchState({
      moduleLoading: true
    })
    return this.moduleService.deleteModule(event.id).pipe(
      tap(res => {
        if (res.status === HttpStatus.OK) {
          ctx.patchState({
            moduleLoading: false,
            moduleDeleted: true,
          })
          ctx.dispatch(new GetAllModule());
          this.resetValue(ctx, { moduleDeleted: false });
        } else {
          ctx.patchState({
            moduleLoading: false
          })
        }
      }),
      catchError(err => {
        return err;
      })
    );
  }

  /**Events */
  @Action(GetAllModuleSuccess)
  setStateOnGetAllModuleSuccess(ctx: StateContext<ModuleStateModel>, event: GetAllModuleSuccess) {
    ctx.patchState({
      moduleLoading: false,
      module: event.module
    })
  }
  @Action(GetAllModuleFailed)
  setStateOnGetAllModuleFailed(ctx: StateContext<ModuleStateModel>) {
    ctx.patchState({
      moduleLoading: false,
      module: []
    })
  }
  private resetValue(ctx, value) {
    setTimeout(() => {
      ctx.patchState(value)
    }, 1000)
  }
}
