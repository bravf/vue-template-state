const VueSwitchesMap = {
  // switchesKey: {
  //   state: {
  //     value: false,
  //   }
  //   on: () => {},
  //   off: () => {},
  // }
}
export const VueSwitches = {
  name: 'VueSwitches',
  props: {
    switchesKey: String,
    initValue: {
      type: Boolean | Number | String,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  data () {
    return {
      switches: null,
    }
  },
  methods: {
    createSwitches () {
      const switches = {
        state: {
          value: this.initValue,
        },
        on: (value) => {
          const isUndefValue = typeof value === 'undefined'
          switches.state.value = isUndefValue ? true : value
        },
        off: () => {
          switches.state.value = false
        },
        toggle: () => {
          switches.state.value = !switches.state.value
        }
      }

      return switches
    },
    getSwitches () { 
      if (this.switchesKey) {
        if (this.switchesKey in VueSwitchesMap) {
          this.switches = VueSwitchesMap[this.switchesKey]
        }
        else {
          this.switches = VueSwitchesMap[this.switchesKey] = this.createSwitches()
        }
      }
      else  {
        this.switches = this.createSwitches()
      }
    },
    getVNode (h) {
      const switches = this.switches
      if (this.$scopedSlots.default) {
        const $node = this.$scopedSlots.default({
          ...switches,
        })
        if ($node && ($node.length > 1 || !$node[0].tag)) {
          return h(this.tag, $node)
        }
        return $node
      }
      return null
    }
  },
  render (h) {
    return this.getVNode(h)
  },
  created () {
    this.getSwitches()
  }
}