import { addDecorator, addParameters, configure } from '@storybook/react';
import requireContext from 'require-context.macro';

function loadStories() {
  const req = requireContext('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
