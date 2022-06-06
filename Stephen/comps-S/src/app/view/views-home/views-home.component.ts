import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of users' },
    { value: 28, label: '# of gorda' },
    { value: 25, label: '# of brunan' },
  ]
  items=[
    {image:'./assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch'
    },
    {image:'./assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a fantastic dresser'
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
