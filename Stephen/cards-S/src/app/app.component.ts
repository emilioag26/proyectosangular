import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageURL: 'assets/tree.jpeg',
      username: 'brunan',
      content: 'I saw this awesome tree today',
    },
    {
      title: 'Snow mountain',
      imageURL: 'assets/mountain.jpeg',
      username: 'brunan',
      content: 'mountain',
    },
    {
      title: 'mountain Bike',
      imageURL: 'assets/biking.jpeg',
      username: 'brunan',
      content: 'bike',
    },

  ]
}
