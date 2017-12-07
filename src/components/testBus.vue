<template>
    <li>得分：{{rate}}</li>
</template>
<script>
    import Bus from '../bus'
    export default {
        data() {
            return {
                rate: 0
            }
        },
        created() {
            Bus.$on('getRateVal', function(val) {
                this.rate = val;
            }.bind(this));
        }
    }
</script>
<style></style>