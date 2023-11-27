import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FilterComponent } from "../../components/filter/filter.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, NavigationComponent, CarouselComponent, FilterComponent]
})
export class HomePageComponent {

}
