import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../scroll-animate.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    ScrollAnimateDirective,
    NgOptimizedImage
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

}
