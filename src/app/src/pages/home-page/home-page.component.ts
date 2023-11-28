import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { CardComponent } from "../../components/card/card.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginComponent } from "../../components/login/login.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, NavigationComponent, CarouselComponent, FilterComponent, CardComponent, PaginationComponent, FooterComponent, LoginComponent]
})
export class HomePageComponent {
  recipes = [
    {
      name: 'How to keep your body fit with a good diet aaaaaaaaaaaaaaa',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      name: 'Recipe 2',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2'
    },
    {
      name: 'Recipe 3',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 3'
    },
    {
      name: 'Recipe 4',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 4'
    },
    {
      name: 'Recipe 5',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 5'
    },
    {
      name: 'Recipe 6',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 6'
    },
    {
      name: 'Recipe 7',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 7'
    },
    {
      name: 'Recipe 8',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 8'
    },
    {
      name: 'Recipe 9',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 9'
    },
    {
      name: 'Recipe 10',
      image: 'https://images.pexels.com/photos/19149303/pexels-photo-19149303/free-photo-of-a-cup-of-hot-chocolate-sits-on-a-bed-next-to-a-book.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      description: 'This is a description of recipe 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 10'
    },
  ];

    constructor() {}
}
