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
  START_TIMER_AT = 10;

  interval$ = timer(0, 1000).pipe(tap(console.log));

  missionStatus$ = new BehaviorSubject<
    'yet to start' | 'started' | 'aborted' | 'liftoff'
  >('yet to start');

  countdown$ = of(this.START_TIMER_AT);
}
