import { APP_BASE_HREF } from '@angular/common';
import { linkTo } from '@storybook/addon-links';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

storiesOf('App Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [CoreModule],
      declarations: [AppComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
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
