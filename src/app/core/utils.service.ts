import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  projects: Array<{ name: string, id: number, clocks: Array<{ task: string, createdOn: Date }> }> = [];
  currentProject = 0;

  constructor() {
  }

  updateProjects(projs: any) {

    this.projects = JSON.parse(JSON.stringify(projs));
    localStorage.setItem('projects', JSON.stringify(this.projects));

  }

  getProjects() {
    const projs = localStorage.getItem('projects');

    if (!projs) {
      this.projects = [];
      localStorage.setItem('projects', JSON.stringify(this.projects));
    } else {
      this.projects = JSON.parse(projs);
    }

    return this.projects;
  }

  
  updateCurrentProject(pId) {
    this.currentProject = pId;
  }


}
