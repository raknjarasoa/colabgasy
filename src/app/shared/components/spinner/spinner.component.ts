import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-spinner',
  template: `
    <div class="sk-wave" *ngIf="loading">
      <div class="sk-rect sk-rect1"></div>
      <div class="sk-rect sk-rect2"></div>
      <div class="sk-rect sk-rect3"></div>
      <div class="sk-rect sk-rect4"></div>
      <div class="sk-rect sk-rect5"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input()
  loading = false;
}
