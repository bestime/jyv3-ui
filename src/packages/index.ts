import type { App } from 'vue';

import JyButton from './JyButton/index.vue';

export { JyButton };

const install = (app: App) => {
  console.log('注册5', JyButton.name, JyButton);
  app.component(JyButton.name, JyButton);
};

const MyUi = {
  install,
  abd: function () {
    console.log('撒旦撒旦');
  },
};

export default MyUi;
