import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage =0
  images = [
    {
      title: "At the beach",
      imageURl: 'https://images.unsplash.com/photo-1652867063719-8359d0daab05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the brunan",
      imageURl: 'https://images.unsplash.com/photo-1652845546552-9cb18c0015c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the blue",
      imageURl: 'https://images.unsplash.com/photo-1652867769695-f08d770ce88e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the miso",
      imageURl: 'https://images.unsplash.com/photo-1652488635135-633fad113a51?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the beach",
      imageURl: 'https://images.unsplash.com/photo-1652867063719-8359d0daab05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the brunan",
      imageURl: 'https://images.unsplash.com/photo-1652845546552-9cb18c0015c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the blue",
      imageURl: 'https://images.unsplash.com/photo-1652867769695-f08d770ce88e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the miso",
      imageURl: 'https://images.unsplash.com/photo-1652488635135-633fad113a51?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the beach",
      imageURl: 'https://images.unsplash.com/photo-1652867063719-8359d0daab05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the brunan",
      imageURl: 'https://images.unsplash.com/photo-1652845546552-9cb18c0015c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the blue",
      imageURl: 'https://images.unsplash.com/photo-1652867769695-f08d770ce88e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    },
    {
      title: "At the miso",
      imageURl: 'https://images.unsplash.com/photo-1652488635135-633fad113a51?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400'
    }

  ]
  onChangePage(index:number){
    this.currentPage = index
  }
  checkWindowIndex(index:number){
    return Math.abs(this.currentPage-index)<5
  }
}
