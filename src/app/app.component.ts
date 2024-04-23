import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor() {
    console.log('App component constructor called!');
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  ngAfterViewInit() {
    console.log('App component template View initialized, ngAfterViewInit Hook called!');
  }

  ngAfterViewChecked() {
    console.log('Template View checked and updated, ngAfterViewChecked Hook called!');
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
