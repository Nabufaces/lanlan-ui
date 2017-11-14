/**
 * doc look https://popper.js.org/documentation.html
 */
var PopperJS = require('./popper');

module.exports = {
  props: {
    // top,bottom,left,right,(top-start|top-end)
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    offset: {
      default: 0
    },
    value: Boolean, // 支持 v-model
    visibleArrow: Boolean,
    transition: String,
    options: {
      type: Object,
      default: function(){
        return {
          gpuAcceleration: false // 是否开启gpu
        };
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function(){
    return {
      showPopper: false,
      currentPlacement: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler: function(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper: function(val) {
      //val ? this.updatePopper() : this.destroyPopper();
      val ? this.updatePopper() : this.closePopper();
      this.$emit('input', val);
    }
  },

  methods: {

    createPopper: function(){

      this.currentPlacement = this.currentPlacement || this.placement;

      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }
      // 引用元素,和 popper目标元素
      var popper = this.popperEl || this.$refs.popper;
      var reference = this.referenceEl || this.$refs.reference;

      if (!popper || !reference) return;

      if (this.visibleArrow) this.appendArrow(popper);

      if (this.appendToBody) document.body.appendChild(popper);

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      var options = this.options;
      options.placement = this.currentPlacement;
      options.boundariesPadding = this.boundariesPadding;
      options.offset = this.offset;

      if(this.removeOnDestroy){
        options.removeOnDestroy = this.removeOnDestroy;
      }

      this.popperJS = new PopperJS.Popper(reference, popper, options);
    },

    updatePopper: function() {
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },

    resetTransformOrigin: function() {
      var placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      var origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1
        ? 'center ' + origin
        : origin + ' center';
    },

    closePopper: function(){
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },

    destroyPopper: function(){

      if (!this.popperJS) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    appendArrow: function(element){

      if (this.appended) {
        return;
      }

      this.appended = true;

      var arrow = document.createElement('div');
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }

  }
}
