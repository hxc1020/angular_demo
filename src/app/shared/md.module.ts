///<reference path="../../../node_modules/@angular/material/typings/button/index.d.ts"/>
/**
 * Created by 林皓 on 2017/6/3 0003.
 */
import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
/**
 * Created by 林皓 on 2017/6/3 0003.
 */
@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdCardModule, MdToolbarModule, MdSidenavModule,
    MdIconModule, MdListModule, MdChipsModule, MdGridListModule, MdInputModule, MdMenuModule],
  declarations: [],
  exports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdCardModule, MdToolbarModule, MdSidenavModule,
    MdIconModule, MdListModule, MdChipsModule, MdGridListModule, MdInputModule, MdMenuModule]
})

export class MdModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdModule,
      providers: []
    };
  }
}
