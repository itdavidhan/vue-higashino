<template>
  <div class="footer">
     <span>copyright©{{count}} by DavidHan</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bus from '../bus'
export default {
  name: 'common-footer',
  data() {
    return {
       
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(['count'])
  },
  created() {

  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #000;
  color: #FFF;
  z-index: 100;
}
</style>
