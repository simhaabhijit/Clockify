import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
