<template>
  <div :class="prefixCls">
    <div :class="arrowClasses" class="left" @click="arrowEvent(-1)">
      <lan-icon name="backward"></lan-icon>
    </div>
    <div :class="`${prefixCls}-list`">
      <div :class="[prefixCls + '-track', showCopyTrack ? '' : 'higher']" :style="trackStyles" ref="originTrack">
        <slot></slot>
      </div>
      <div :class="[prefixCls + '-track', showCopyTrack ? 'higher' : '']" :style="copyTrackStyles" ref="copyTrack" v-if="loop">
      </div>
    </div>
    <div :class="arrowClasses" class="right" @click="arrowEvent(1)">
      <lan-icon name="forward"></lan-icon>
    </div>
    <ul :class="`${prefixCls}-dots`" v-if="dots">
      <template v-for="n in slides.length">
        <li :class="[n - 1 === currentIndex ? prefixCls + '-active' : '']"  @click="dotsEvent(n - 1)"></li>
      </template>
    </ul>
  </div>
</template>
<script>
  import lanIcon from '../lan-icon'
  import { getStyle, findComponentsDownward, typeOf } from '../../base/assist'
  import { on, off } from '../../base/dom'

  export default {
    name: 'lan-carousel',
    components: {
      lanIcon
    },
    props: {
      autoplay: {
        type: Boolean,
        default: true
      },
      autoplaySpeed: {
        type: Number,
        default: 4000
      },
      loop: {
        type: Boolean,
        default: true
      },
      easing: {
        type: String,
        default: 'ease'
      },
      dots: {
        type: Boolean,
        default: true
      },
      value: {
        type: Number,
        default: 0
      },
      height: {
        type: [String, Number],
        default: 'auto',
        validator (value) {
          return value === 'auto' || typeOf(value) === 'number';
        }
      }
    },
    data () {
      return {
        prefixCls: 'lan-carousel',
        listWidth: 0,
        trackWidth: 0,
        trackOffset: 0,
        trackCopyOffset: 0,
        showCopyTrack: false,
        slides: [],
        slideInstances: [],
        timer: null,
        currentIndex: this.value,
        trackIndex: this.value,
        copyTrackIndex: this.value,
        hideTrackPos: -1, // 默认左滑
      };
    },
    computed: {
      arrowClasses () {
        return [
          `${this.prefixCls}-arrow`,
          `${this.prefixCls}-arrow-hover`
        ];
      },
      trackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate(${-this.trackOffset}px, 0px)`,
          transition: `transform 500ms ${this.easing}`
        };
      },
      copyTrackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate(${-this.trackCopyOffset}px, 0px)`,
          transition: `transform 500ms ${this.easing}`,
          position: 'absolute',
          top: 0
        };
      }
    },
    methods: {
      // copy trackDom
      initCopyTrackDom () {
        this.$nextTick(() => {
          this.$refs.copyTrack.innerHTML = this.$refs.originTrack.innerHTML;
        });
      },
      updateSlides (init) {
        let slides = [];
        const children = findComponentsDownward(this, 'lan-carousel-item');
        children.forEach((child) => {
          slides.push({
            $el: child.$el
          });

          this.slideInstances.push(child);
        });
        this.slides = slides;
      },
      updatePos () {
        const children = findComponentsDownward(this, 'lan-carousel-item');
        children.forEach((child) => {
          child.width = this.listWidth;
          child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
        });

        this.trackWidth = (this.slides.length || 0) * this.listWidth;
      },
      // use when slot changed
      slotChange () {
        this.$nextTick(() => {
          this.slides = [];
          this.slideInstances = [];

          this.updateSlides();
          this.updatePos();
          this.updateOffset();
        });
      },
      handleResize () {
        this.listWidth = parseInt(getStyle(this.$el, 'width'));
        this.updateSlides();
        this.updatePos();
        this.updateOffset();
      },
      updateTrackPos (index) {
        if (this.showCopyTrack) {
          this.trackIndex = index;
        } else {
          this.copyTrackIndex = index;
        }
      },
      updateTrackIndex (index) {
        if (this.showCopyTrack) {
          this.copyTrackIndex = index;
        } else {
          this.trackIndex = index;
        }
      },
      add (offset) {
        // 获取单个轨道的图片数
        let slidesLen = this.slides.length;
        // 如果是无缝滚动，需要初始化双轨道位置
        if (this.loop) {
          if (offset > 0) {
            // 初始化左滑轨道位置
            this.hideTrackPos = -1;
          } else {
            // 初始化右滑轨道位置
            this.hideTrackPos = slidesLen;
          }
          this.updateTrackPos(this.hideTrackPos);
        }
        // 获取当前展示图片的索引值
        let index =  this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
        index += offset;
        while (index < 0) index += slidesLen;
        if (((offset > 0 && index === slidesLen) || (offset < 0 && index === slidesLen - 1)) && this.loop) {
          // 极限值（左滑：当前索引为总图片张数， 右滑：当前索引为总图片张数 - 1）切换轨道
          this.showCopyTrack = !this.showCopyTrack;
          this.trackIndex += offset;
          this.copyTrackIndex += offset;
        } else {
          if (!this.loop) index = index % this.slides.length;
          this.updateTrackIndex(index);
        }
        this.currentIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
      },
      arrowEvent (offset) {
        this.setAutoplay();
        this.add(offset);
      },
      dotsEvent (n) {
        let curIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
        if (curIndex !== n) {
          this.currentIndex = n;
          this.updateTrackIndex(n);
          // Reset autoplay timer when trigger be activated
          this.setAutoplay();
        }
      },
      setAutoplay () {
        window.clearInterval(this.timer);
        if (this.autoplay) {
          this.timer = setInterval(() => {
            this.add(1);
          }, this.autoplaySpeed);
        }
      },
      updateOffset () {
        this.$nextTick(() => {
          /* hack: revise copyTrack offset (1px) */
          let ofs = this.copyTrackIndex > 0 ? -1 : 1;
          this.trackOffset = this.trackIndex * this.listWidth;
          this.trackCopyOffset = this.copyTrackIndex * this.listWidth + ofs;
        });
      }
    },
    watch: {
      autoplay () {
        this.setAutoplay();
      },
      autoplaySpeed () {
        this.setAutoplay();
      },
      currentIndex (val) {
        this.$emit('change', val);
      },
      trackIndex () {
        this.updateOffset();
      },
      copyTrackIndex () {
        this.updateOffset();
      },
      height () {
        this.updatePos();
      },
      value (val) {
        this.currentIndex = val;
      }
    },
    mounted () {
      this.handleResize();
      this.setAutoplay();
      on(window, 'resize', this.handleResize);
    },
    beforeDestroy () {
      off(window, 'resize', this.handleResize);
    }
  };
</script>
