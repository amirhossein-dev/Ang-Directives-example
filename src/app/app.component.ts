import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructeralDirective';
  isCorrect: Boolean = false;

  users: string[] = ['Amir Hossein','Sanaz', 'Azhdar', 'Shayan','Shahram'];

  usersObj:any = [
    {
      id:1,
      name:'Amir Hossein'
    },
    {
      id:2,
      name:'Sanaz'
    },
    {
      id:3,
      name:'Azhdar'
    },
    {
      id:4,
      name:'Shayan'
    },
    {
      id:5,
      name:'Shahram'
    },
  ];

  public addNewUser() {
    this.usersObj = [
      {
        id:1,
        name:'Amir Hossein'
      },
      {
        id:2,
        name:'Sanaz'
      },
      {
        id:3,
        name:'Azhdar'
      },
      {
        id:4,
        name:"Ejhdehaha2"
      },
      {
        id:5,
        name:'Shayan'
      },
      {
        id:6,
        name:'Shahram'
      },
      {
        id:7,
        name:'asghar'
      },
      {
        id:8,
        name:'Ejhdehaha'
      },
    ];
  };
  public trackByFunc(index: number , el: any) {
    return el.id;
  }

}
