import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../scroll-animate.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-skill-experience',
  standalone: true,
  imports: [
    ScrollAnimateDirective,
    NgOptimizedImage
  ],
  templateUrl: './skill-experience.component.html',
  styleUrl: './skill-experience.component.scss'
})
export class SkillExperienceComponent {

}
