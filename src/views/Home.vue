<template>
  <div class="home">
    <div>
      <vabout></vabout>
    </div>
    <div>
      <a-range-picker v-model="value3" @change="onChange" />
    </div>
    <div>
      <a-button type="primary" @click="handleClick">Primary</a-button>
    </div>
    <div>
      <span class="text">一个text</span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"
import { ref } from "vue"
import moment from "moment"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    msg: {
      default: "",
      type: String
    }
  },
  setup(props) {
    let value3 = ref<any>([])
    console.log("props", props)
    const decLiteral = 6
    const color = "red"
    const methods = {
      onChange(date: any, dateString: any) {
        console.log(moment(date[0]).format("YYYY-MM-DD"), dateString)
        value3 = dateString
      },
      handleClick() {
        console.log(value3)
      }
    }
    return {
      value3,
      decLiteral,
      color,
      ...methods
    }
  }
}
</script>
<style vars="{ color }">
.text {
  color: var(--color);
}
</style>
