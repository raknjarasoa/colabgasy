import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CountryService } from 'src/app/shared/services/country.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountryListComponent } from './country-list.component';

storiesOf('CountryListComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
      declarations: [CountryListComponent],
      providers: [CountryService]
    })
  )
  .add('Country list with filter', () => ({
    component: CountryListComponent,
    props: {
      loading: true
    }
  }));
