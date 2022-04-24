import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  projectName: string = '';

  projects: Array<{ name: string, id: number, clocks: Array<{ task: string, createdOn: Date }> }>;

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.projects = [];
    this.projects = this.utils.getProjects();
  }

  addProject() {
    this.projects.push({ name: this.projectName, id: this.projects.length, clocks: [] });
    // this.utils.projects = this.projects;
    this.utils.updateProjects(this.projects);
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
    this.utils.updateProjects(this.projects);
  }

  selectProject(index: number) {
    this.utils.updateCurrentProject(index);
  }

}
