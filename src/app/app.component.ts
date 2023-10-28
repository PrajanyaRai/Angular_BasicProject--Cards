import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this neat tree today'
  },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainLover',
      content: 'Here is a pic of a snowy mountain'
    },
    {
      title: 'Biking lover',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1122',
      content: 'I did some biking today'
    }
  ];
}
