# Maintaining Separation of Concerns Through Angular Directives

![img](https://miro.medium.com/max/1400/1*z72M1pr8-q5k2QJ4SaUR8g.png)

We have a date picker component in our application. We send an event each time a user changes the date to our analytics provider. We have one use of it so far, so the analytics code was inside the component that uses it:

```
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroyed';

@UntilDestroy()
class FooComponent {
  timespanControl = new FormControl();

  ngOnInit() {
    this.timespanControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(({ preset }) => {
        this.analyticsService.track('timespan-filter apply', {
          value: preset,
        });
      });
  }
}
```

However, now we have more places where we must use this code, and we don’t want to duplicate it everywhere. One might think that the logic could be incorporated into the date picker component and passed as input:

```
class DatePickerComponent {
  @Input() analyticsContext: string;
   
  constructor(private analyticsService: AnalyticsService) {}

  apply() {
    this.analyticsService.track('timespan-filter apply', {
      context: this.analyticsContext,
      value: this.preset,
    });

    ...
  }
}
```



Indeed, that would work, but it’s not the ideal design. [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) means that the date picker component isn’t concerned with the analytics and doesn’t need to know anything about it.

Furthermore, in this case, we have control over the source code since it’s an internal component, but what if it was a third-party component?

A better option here would be to use Angular directives. Let’s create a directive that obtains a reference to the form control via DI, subscribes to value changes, and fires the analytics event:

```

@UntilDestroy()
@Directive({
  selector: '[datePickerAnalytics]',
})
export class DatePickerAnalyticsDirective implements OnInit {
  @Input('datePickerAnalytics') analyticsContext: string;

  constructor(
    private dateFormControl: NgControl,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.dateFormControl
      .control.valueChanges.pipe(untilDestroyed(this))
      .subscribe(({ preset }) => {
        this.analyticsService.track(
          'timespan-filter apply',
          {
            value: preset,
            context: this.analyticsContext
          }
        );
      });
  }
}
```

We can now use it every time we use the date picker:

```
<date-picker [formControl]="control" datePickerAnalytics="fooPage"></date-picker>
```

