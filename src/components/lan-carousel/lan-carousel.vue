<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-container`">
      <div :class="`${prefixCls}-item`" v-for="item in carouselSource">
        <img :src="item"/>
      </div>
    </div>
    <ul :class="`${prefixCls}-dots`">
      <template v-for="n in carouselSource.length">
        <li>
          <span class="bullet" :class="n == index ? 'active' : ''"></span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>

  const prefixCls = 'lan-carousel';

  export default {
    props: {
      carouselSource: Array,
      height: {
        type: [String, Number],
        default: 'auto',
        easing: {
          type: String,
          default: 'ease'
        },
      },
    },
    data () {
      return {
        prefixCls : 'lan-carousel',
        index: 1,
        trackWidth: 0,
        trackOffset: 0,
        trackCopyOffset: 0,
      };
    },
    computed: {
      trackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
          transition: `transform .5s ${this.easing}`
        };
      },
    },
    watch: {
      height () {
        //this.updatePos();
      },
    },
    methods: {
      //find option component
      findChild (cb) {
        const find = function (child) {
          const name = child.$options.componentName;

          if (name) {
            cb(child);
          } else if (child.$children.length) {
            child.$children.forEach((innerChild) => {
              find(innerChild, cb);
            });
          }
        };

        if (this.slideInstances.length || !this.$children) {
          this.slideInstances.forEach((child) => {
            find(child);
          });
        } else {
          this.$children.forEach((child) => {
            find(child);
          });
        }
      },
      updatePos () {
        this.findChild((child) => {
          child.width = this.listWidth;
          child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
        });

        this.trackWidth = (this.slides.length || 0) * this.listWidth;
      },
    }
  };
</script>
