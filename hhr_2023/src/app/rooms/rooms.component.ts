import {Component, HostListener} from '@angular/core';


import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  animations: [
    trigger('onScroll', [
      transition(':enter', [
        query('.all-rooms-desc', [
          style({opacity: 0, transform: 'translateY(-20%)'}),
          stagger(30, [
            animate('100ms', style({ opacity: 1, transform: 'translateY(0)'}))
          ])
        ])
      ])
    ])
  ]
})

export class RoomsComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          document.querySelectorAll(". deluxe-single")[0].classList.add("animations");
          document.querySelectorAll(". grand-double")[1].classList.add("animations");
          document.querySelectorAll(". royal-suite")[2].classList.add("animations");
        }
      })
    });
    //observer.observe.querySelectorAll(". all-rooms-desc"));
  }
}
