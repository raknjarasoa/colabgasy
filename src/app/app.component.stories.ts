import { linkTo } from '@storybook/addon-links';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

storiesOf('App Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
      schemas: [],
      declarations: [AppComponent],
      providers: []
    })
  )
  .add('Component with separate template', () => ({
    component: AppComponent,
    props: {}
  }));

storiesOf('Addon|Links', module).add(
  'button with link to another story',
  () => ({
    component: Button,
    props: {
      text: 'Go to Welcome Story',
      onClick: linkTo('Welcome')
    }
  })
);
