<template>
  <div class="footer">
     footer {{count}} {{bookName}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bus from '../bus'
export default {
  name: 'common-footer',
  data() {
    return {
      bookName: '呵呵'
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(['count'])
  },
  created() {

    Bus.$on('getBookName', function(name) {
      console.log(111, name, this);
      this.bookName = name;
    });
  }
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #FFF;
  z-index: 100;
}
</style>
