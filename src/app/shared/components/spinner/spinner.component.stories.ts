import { action } from '@storybook/addon-actions';
import { boolean, button, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';

storiesOf('SpinnerComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [],
      schemas: [],
      declarations: [SpinnerComponent],
      providers: []
    })
  )
  .addDecorator(withNotes)
  .add('Default spinner', () => ({
    component: SpinnerComponent,
    props: {
      loading: true
    }
  }))
  .add(
    'Simple note',
    () => ({
      template: `
        <cg-spinner [loading]="isLoading"></cg-spinner>
        <button type="button" (click)="handleClick()">Toggle</button>
    `,
      props: {
        isLoading: true,
        handleClick: action('Click')
      }
    }),
    { notes: 'Click button to toggle spinner display' }
  )
  .addDecorator(withKnobs)
  .add('Custom knobs', () => {
    const loading = boolean('loading', true);
    button('Arbitrary action', action('You clicked it!'));

    return {
      component: SpinnerComponent,
      props: {
        loading
      }
    };
  });
