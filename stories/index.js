import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import * as material from 'material-colors';
import ReactCircleColorPicker from '../src/react-circle-color-picker';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Circle Color Picke')} />);

storiesOf('Circle Color Picker', module)
  .add('Component', () => <ReactCircleColorPicker 
    colors={[material.red[500], material.blue[500], material.green[500]]}
    onChange={action('onChange')}
    />);