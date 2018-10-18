<template>
<div>
    <h1>我是父组件的标题</h1>
    <head-top></head-top>  
    <!-- <text-child> -->
<!--         <p>这是一些初始内容</p>
        <p>这是更多的初始内容</p> -->
    <!-- </text-child> -->
</div>
</template>

<script>
    // import textChild from 'textChild.vue'
    import headTop from 'components/headTop.vue'
    export default {
      name:'textFather',
      components: {
        headTop
      },
    }
</script>
<style lang="less">

</style>