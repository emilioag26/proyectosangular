import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'james',
      age: 24,
      job: 'Brunan',
      hasJob: true
    },
    {
      name: 'Ana',
      age: 24,
      job: 'Brunan',
      hasJob: false
    },
    {
      name: 'Paola',
      age: 24,
      job: 'Brunan',
      hasJob: true
    },
  ]
  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'hasJob',
      label: 'hasJob',
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
