import LoadingBar from './lan-loadingBar.vue'
import Vue from 'vue'

LoadingBar.newInstance = properties => {

  const Instance = new Vue({
    data: properties,
    render (h) {
      return h(LoadingBar, {
        props: properties
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const loading_bar = Instance.$children[0];

  return {
    update (options) {
      if ('percent' in options) {
        loading_bar.percent = options.percent;
      }
      if (options.status) {
        loading_bar.status = options.status;
      }
      if ('visible' in options) {
        loading_bar.visible = options.visible;
      }
    },
    component: loading_bar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('lan-loadingBar')[0]);
    }
  };
};

export default LoadingBar
