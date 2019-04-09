import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SampleMixin extends Vue {
  public simpleText: string = 'Simple Text'

  public mounted() {
    console.log('ok2')
    console.log(this.simpleText)
  }
}
