// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './styles/index.less';

import lanRow from './components/lan-row'
import lanCol from './components/lan-col'
import lanButton from './components/lan-button'
import lanSwitch from './components/lan-switch'
import lanRadioGroup from './components/lan-radioGroup'
import lanRadio from './components/lan-radio'
import LanCheckboxGroup from './components/lan-checkboxGroup'
import lanCheckbox from './components/lan-checkbox'
import lanInput from './components/lan-input'
import lanSelect from './components/lan-select'
import lanOption from './components/lan-option'
import lanTimePicker from './components/lan-timePicker'
import lanDatePicker from './components/lan-datePicker'
import lanModal from './components/lan-modal'
import lanMessageBox from './components/lan-messageBox'
import lanMessage from './components/lan-message'
import lanPagination from './components/lan-pagination'
import lanTable from './components/lan-table'
import lanTooltip from './components/lan-tooltip'

const components = {
    lanRow,
    lanCol,
    lanButton,
    lanSwitch,
    lanRadioGroup,
    lanRadio,
    LanCheckboxGroup,
    lanCheckbox,
    lanInput,
    lanSelect,
    lanOption,
    lanTimePicker,
    lanDatePicker,
    lanModal,
    lanMessageBox,
    lanMessage,
    lanPagination,
    lanTable,
    lanTooltip
};

const install = function(Vue, opts = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$Modal = lanModal;
  Vue.prototype.$Message = lanMessage;
  Vue.prototype.$messageBox = lanMessageBox;
};

// auto install
install(Vue);

const API = {
  version: '0.0.1',
  install,
  ...components
};

//module.exports.default = module.exports = API;   // eslint-disable-line no-undef

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
