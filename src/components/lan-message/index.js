import lanMessage from './lan-message.vue'
import Vue from 'vue'

lanMessage.newInstance = properties => {

  const Instance = new Vue({
    data: properties,
    render (h) {
      return h(lanMessage, {
        props: properties
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const message = Instance.$children[0];

  return {
    addProps (props) {
      message.addProps(props);
    },
    component: message,
    destroy (element) {
      document.body.removeChild(document.getElementsByClassName(element)[0]);
    }
  };
};

let messageInstance;

function getMessageInstance () {
  messageInstance = lanMessage.newInstance({});
  return messageInstance;
}

function initMessage (message = '', duration = 3000, type = 'success') {

  let instance = getMessageInstance();

  instance.addProps({
    message,
    type,
    duration
  });

}

export default {
  name: 'lanMessage',

  warning (options) {
    return this.message('warning', options);
  },
  error (options) {
    return this.message('error', options);
  },
  success (options) {
    return this.message('success', options);
  },
  message(type, options){
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    return initMessage(options.message, options.duration, type);
  },
  destroy () {
    let instance = getMessageInstance();
    messageInstance = null;
    instance.destroy('lan-message');
  }
};
