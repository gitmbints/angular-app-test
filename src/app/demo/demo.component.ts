import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  title: string = 'Demo component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;

  constructor() {
    console.log('Demo component constructor called!');
  }

  /* This will be called whenever
   * the inputs property message is initialized
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called!');
  }

  ngOnInit() {
    console.log('ngOnInit Hook Called!');
    // console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck() {
    console.log('ngDoCheck Hook called!');
    // console.log('in ngDoCheck', this.paraContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called!');
    // console.log('in ngAfterContentInit', this.paraContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Hook called!');
    console.log(
      'in ngAfterContentChecked',
      this.paraContent.nativeElement.innerHTML
    );
  }
}
