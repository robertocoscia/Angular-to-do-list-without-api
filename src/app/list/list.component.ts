import { Component, OnInit } from '@angular/core';
import {Task} from '../core/models/Task.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList : Task [] = []

  addTask(){
    this.taskList.push(new Task())
  }
  removeTask(index: number){
    if(index>-1){
      this.taskList.splice(index,1);
    }
  }

}
