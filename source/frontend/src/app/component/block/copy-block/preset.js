/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('copy-block', require('./copy-block.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/copy-block @root}}
		</hbs>`,
  require('./data'),
);
