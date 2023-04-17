import { App } from 'vue';
import SvgIconVue from '@/components/SvgIcon.vue';
import 'virtual:svg-icons-register';
export default {
  install: (app: App) => {
    app.component('SvgIcon', SvgIconVue);
  }
};
