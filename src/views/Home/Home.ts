import HelloWorld from '@/components/HelloWorld/HelloWorld.vue' // @ is an alias to /src
import Vue from 'vue'
import Component from 'vue-class-component'
import { Store } from 'vuex'

interface IAppState {
  title: string
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public $store!: Store<IAppState>
  public data() {
    return {}
  }

  get helloWorldTitle(): string {
    return this.$store.state.title
  }

  public mounted() {
    console.log('ok', this.$store.state.title)
  }
}
