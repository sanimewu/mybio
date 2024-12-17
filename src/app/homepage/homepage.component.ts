import { Component } from '@angular/core';
import {TopHeaderComponent} from "../top-header/top-header.component";
import {PersonalIntroComponent} from "../personal-intro/personal-intro.component";
import {EducationComponent} from "../education/education.component";
import {AchievementComponent} from "../achievement/achievement.component";
import {SkillExperienceComponent} from "../skill-experience/skill-experience.component";
import {ProjectsComponent} from "../projects/projects.component";
import {BlogComponent} from "../blog/blog.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    TopHeaderComponent,
    PersonalIntroComponent,
    EducationComponent,
    AchievementComponent,
    SkillExperienceComponent,
    ProjectsComponent,
    BlogComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
