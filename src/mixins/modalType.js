export default {
  props: {
    type: {
      type: String
    },
    message: String
  },
  data() {
    return {
      modalType: {
        warning : 'http://oss1.lanlanlife.com/f1af2aa2ed6c34fcc46d9f380f176f16_48x48.png',
        error : 'http://oss3.lanlanlife.com/61dc954ee3a65d4679c1e2622e6a3205_48x48.png',
        success : 'http://oss1.lanlanlife.com/9300bd45cfb8ec9655257285fd0e0330_48x48.png'
      }
    }
  }
}
