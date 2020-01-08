import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlited', style({
        'background-color': 'green',
        'transform': 'translateX(100px)'
      })),
      transition('normal <=> highlited', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlited', style({
        'background-color': 'green',
        'transform': 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'blue',
        'transform': 'translateX(0) scale(.5)'
      })),
      transition('normal => highlited', animate(300)),
      transition('highlited => normal', animate(800)),
      transition('shrunken <=> *', [
        animate(500, style({
          'background-color': 'orange'
        })),
        animate(500, style({
          'border-radius': '50px'
        })),
        animate(1000)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      transition('void => *', [
        style({
          'opacity': '0',
          'transform': 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          'transform': 'translateX(100px)',
          'opacity': '0'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        'opacity': 1,
        'transform': 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            'transform': 'translateX(-100px)',
            'opacity': '0',
            'offset': '0'
          }),
          style({
            'transform': 'translateX(-50px)',
            'opacity': '.5',
            'offset': '.3'
          }),
          style({
            'transform': 'translateX(-20px)',
            'opacity': '1',
            'offset': '.8'
          }),
          style({
            'transform': 'translateX(0)',
            'opacity': '1',
            'offset': '1'
          })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  state: string = 'normal';
  wildState: string = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }
  
  onAnimate() {
    this.state == 'normal' ? this.state = 'highlited' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlited' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
