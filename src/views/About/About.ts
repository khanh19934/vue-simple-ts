import Component, { mixins } from 'vue-class-component'

import SampleMixin from '@/mixins/SampleMixin'

@Component
export default class About extends mixins(SampleMixin) {
  public mounted() {
    console.log('ok')
    console.log(this.simpleText)
  }

  public created() {
    console.log(this.simpleText)
  }
}
