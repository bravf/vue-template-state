<template>
  <div>
  <h2>2态切换</h2>
  <vue-switches switches-key="pop">
    <template v-slot="{ state, on, off, toggle }">
      <div v-if="state.value">这是一个弹层，balbabalbalblabla......</div>
      <button @click="on">显示弹层</button>
      <button @click="state.value = false">隐藏弹层</button>
      <button @click="toggle">toggle弹层</button>
    </template>
  </vue-switches>
  <vue-switches switches-key="pop">
    <template v-slot="{ state }">
      <div v-if="state.value">哈哈</div>
    </template>  
  </vue-switches>

  <h2>多态切换</h2>
  <vue-switches :init-value="1">
    <template v-slot="{ state, on, off }">
      <div v-if="state.value === 1">这是弹层1，balbabalbalblabla......</div>
      <div v-if="state.value === 2">这是弹层2，balbabalbalblabla......</div>
      <div v-if="state.value === 3">这是弹层3，balbabalbalblabla......</div>
      <button @click="on(1)">显示状态1</button>
      <button @click="on(2)">显示状态2</button>
      <button @click="on(3)">显示状态3</button>
      <button @click="off">隐藏</button>
    </template>
  </vue-switches>
  </div>
</template>

<script>
import { VueSwitches } from '../../packages/index'

export default {
  components: {
    VueSwitches,
  },
}
</script>