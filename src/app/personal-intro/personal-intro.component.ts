import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-personal-intro',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss'
})
export class PersonalIntroComponent {
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/Sanim_HossainCV.pdf';
    link.download = 'Sanim_Hossain_CV.pdf';
    link.click();
  }
}
