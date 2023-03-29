import type { App } from 'vue';

import JyButton from './JyButton/index.vue';

const utils = {
  say(name: string) {
    console.log('你好呀：', name);
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
