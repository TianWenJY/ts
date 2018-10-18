<template>
  <div v-show="showFlag" class="food">
     <div class="food-content">
         <div class="image-header">
            <img :src="food.image">
            <div class="">
                <i class=""></i>
            </div>

         </div>
         <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
               <span class="sell-count">{{乐手{{food.sells}}</span>
               <span class="rating">好评率{{food.rating}}</span>

            </div>
         </div>
         <div class="price">
              <span></span>
           </div>
     </div>
  </div>

  <div class="rating-type">
     <span>{{desc.all}}</span>
     <span>{{desc.position}}</span>
     <span :class="{'active':select}">{{desc.negative}}</span>
  </div>
  <div class="switch">
    <span class="text">只看有内容的评价</span>
  </div>
</template>

<script>
    export default {
    	props: {
    		seller: {
    			type: Object
    		},
        food: {
          type: Object
        }
    	},
    	data() {
         return {
         	goods: [],
          showFlag：false
         };
    	},
    	created() {
    		this.classMap = ['decrease','discount','special','invoice','guarantee'];
    		this.$http.get('/api/goods').then((response)=>{
    			response = response.body;
    			if(response.body === ERR_OK) {
    				this.goods = response.data;
    			}
    		})
    	},
      methods: {
        show () {
          this.showFlag = true;
        }
      }
    	
    }
</script>
<style lang="less">
   .food {
     position: fixed;
     left:0;
     right: 0;
     bottom: 48px;
     z-index :30;
     width: 100%;
     background: #fff;
       .image-header
         position: relative;
         width: 100%;
         padding-top:100%;
    .back 
      position: absolute
      top: 10px
      left: 0
      .icon-arrow-left
        display:block
        padding: 18px
     .content
       padding: 18px
       .title
         line-height: 14px
         margin-bottom: 8px
         font-size: 14px
         font-weight: 700
         color: rgb(7,17,17)
         .detail
           margin-bottom: 18px
           line-height: 10px
           font-size:0
           .sell-count,rating
             font-size:10px
             color: rgb
   }

   this.$dispatch('ratingtype',type)
</style>