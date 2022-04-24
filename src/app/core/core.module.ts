import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { ProjectModule } from '../project/project.module';



@NgModule({
  declarations: [
    SideNavComponent,
    WrapperComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    ProjectModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
