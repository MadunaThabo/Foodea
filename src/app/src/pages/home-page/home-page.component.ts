import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, NavigationComponent, CarouselComponent, FilterComponent, CardComponent]
})
export class HomePageComponent {
  recipes = [
    {
      name: 'Recipe 1',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 1'
    },
    {
      name: 'Recipe 2',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 2'
    },
    {
      name: 'Recipe 3',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 3'
    },
    {
      name: 'Recipe 4',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 4'
    },
    {
      name: 'Recipe 5',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 5'
    },
    {
      name: 'Recipe 6',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 6'
    },
    {
      name: 'Recipe 7',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 7'
    },
    {
      name: 'Recipe 8',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 8'
    },
    {
      name: 'Recipe 9',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 9'
    },
    {
      name: 'Recipe 10',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of recipe 10'
    },
  ];

    constructor() {}
}
