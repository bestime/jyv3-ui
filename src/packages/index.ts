import type { App } from 'vue';

import JyButton from './JyButton/index.vue';

const utils = {
  add(...ars: number[]) {
    return ars.reduce(function (total, num) {
      return total + num;
    }, 0);
  },
};

function install(app: App) {
  console.log('注册', JyButton.name, JyButton);
  app.component(JyButton.name, JyButton);
}

export default {
  install,
  JyButton,
  utils,
};
