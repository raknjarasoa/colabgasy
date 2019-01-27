import 'jest-preset-angular';
import './jestGlobalMocks';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });
