import { configure, addDecorator } from '@storybook/react';
//  stories: ['../src/**/*.stories.js'],

// function loadStories() {
//   require('../stories/index');
// }

function loadStories() {
  require('../src/stories/index');
}


configure(loadStories, module);