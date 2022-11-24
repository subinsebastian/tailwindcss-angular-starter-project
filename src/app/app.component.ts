import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly START_TIMER_AT = 10;

  missionStatus$ = new BehaviorSubject<
    'yet to start' | 'started' | 'aborted' | 'liftoff'
  >('yet to start');

  countdown$ = of(this.START_TIMER_AT);
}
