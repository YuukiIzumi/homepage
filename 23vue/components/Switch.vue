<template>
  <div class="disLB">
    <div class="switch disLB" @click="toggleSwitch" :class="isOpen?'switch-on':''">
      <span class="disB switch-circle" :class="isOpen?'on':''"></span>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isOpen: false
    }
  },
  props: ["isOpen"],
  methods: {
    toggleSwitch() {
      // 子组件不能直接修改父组件的数据，要通过$emit
      this.$emit('changeSwitch')
    }
  }
  
}
</script>

<style lang="less" scoped>
  .switch {
    position: relative;
    border-radius: 20px;
    border: 1px solid #dfdfdf;
    width: 45px;
    height: 23px;
    .switch-circle {
      position: absolute;
      width: 21px;
      height: 21px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #dfdfdf;
      box-shadow: 0 1px 1px #ccc;
    }
    .on {
      right: 0;
      // background-color: #64bd63;
      border-color: #64bd63;
      transform: translate(X);
      transition: transform 0.5s, right 0.5s;
    }
  }
  .switch-on {
    background-color: #64bd63;
  }
</style>
