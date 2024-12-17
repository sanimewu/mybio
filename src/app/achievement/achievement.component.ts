import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../scroll-animate.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [
    ScrollAnimateDirective,
    NgOptimizedImage
  ],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {

}
