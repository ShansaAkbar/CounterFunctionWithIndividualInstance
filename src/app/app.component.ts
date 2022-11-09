import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  message = '';
  title = 'testing-app'
  ngOnInit() {
    const [getA, addA] = this.counter(10);
    const [getB, addB] = this.counter(1);
    console.log('getting..', getA());
    addA()
    console.log('getting..', getA());
    addA()
    addA()
    console.log('getting..', getA());
    addA()
    addA();
    console.log('getting..B', getB());
    addB();
    console.log('getting..B', getB());
  }
  counter(countrtValue: number = 0) {
    let getCounter = function () {
      return countrtValue;
    };
    let addCounter = function (count) {
      return function () {
        countrtValue += 1;
        return countrtValue;
      }
    }(0);
    return [getCounter, addCounter]
  }
}