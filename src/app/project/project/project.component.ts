import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/utils.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  currentProj: any;
  clockTask: string = '';
  clocks: Array<{ task: string, createdOn: Date }> = [];

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.currentProj = this.utils.currentProject;
    console.log(this.currentProj);
    this.clocks = this.utils.projects.length ? this.utils.projects[this.currentProj].clocks: [];
  }

  createClock() {
    this.clocks.push({ task: this.clockTask, createdOn: new Date() });
    console.log(this.utils.projects);
    this.utils.updateProjects(this.utils.projects);
  }

}
