// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './styles/index.less';

import lanRow from './components/lan-row'
import lanCol from './components/lan-col'
import lanButton from './components/lan-button'
import lanSwitch from './components/lan-switch'
import lanRadioGroup from './components/lan-radioGroup'
import lanRadio from './components/lan-radio'
import LanCheckboxGroup from './components/lan-checkboxGroup'
import lanCheckbox from './components/lan-checkbox'
import lanIcon from './components/lan-icon'
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
import lanTabs from './components/lan-tabs'
import lanTabPane from './components/lan-tab-pane'
import lanTooltip from './components/lan-tooltip'
import lanBackTop from './components/lan-backTop'
//import lanCarousel from './components/lan-carousel'

const components = {
    lanRow,
    lanCol,
    lanButton,
    lanSwitch,
    lanRadioGroup,
    lanRadio,
    LanCheckboxGroup,
    lanCheckbox,
    lanIcon,
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
    lanTabs,
    lanTabPane,
    lanTooltip,
    lanBackTop,
    //lanCarousel
};

const install = function(Vue, opts = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$Message = lanMessage;
  Vue.prototype.$messageBox = lanMessageBox;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  version: '0.1.1',
  install,
  ...components
};
