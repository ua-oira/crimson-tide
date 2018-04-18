import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
});

configure(loadStories, module);
