import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterLinkActive} from "@angular/router";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
  ],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  animations: [
    trigger('openCloseNavbar', [
      state('closed', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block',
      })),
      state('open', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        display: 'none',
      })),
      transition('open <=> closed', animate('500ms ease-in-out')),
    ])
  ]
})
export class TopHeaderComponent implements OnInit{
  logoName:string = "Md.Sanim Hossain";
  isNavbarOpen: boolean = false;
  screenIsMdOrLarger: boolean = false;
  constructor() {
  }
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      this.screenIsMdOrLarger = window.innerWidth >= 768;
      this.isNavbarOpen = this.screenIsMdOrLarger;
    }
    else {
      this.screenIsMdOrLarger = true;
      this.isNavbarOpen = false;
    }
  }
  navbarClose(){
    this.screenIsMdOrLarger = window.innerWidth >= 768;
    if(!this.screenIsMdOrLarger){
      this.isNavbarOpen = false;
    }
  }
}
