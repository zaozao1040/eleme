<template>
	<section>
    <transition enter-active-class="animated bounceInRight"  >
      <div v-show="showFlag" :class="$style.canvas_bar_warpper">
        <canvas id="canvas_bar_dynamic" :class="$style.canvas_bar_dynamic">
         你的浏览器不支持，请使用chrome
        </canvas>        
      </div>

    </transition>
	</section>
</template>

<script>
export default {

  name: 'datashow_pie',
  data () {
    return {
      showFlag:false,
      items: [
        {
          name: '医药健康',
          data: 2.13, //要求最大值放在第一，这里偷懒了
          color: false
        },{
          name: '果蔬生鲜',
          data: 1.49,
          color: false
        },{
          name: '商店超市',
          data: 1.1,
          color: false
        },{
          name: '鲜花绿植',
          data: 0.46,
          color: false
        },{
          name: '地方菜系',
          data: 0.19,
          color: false
        },{
          name: '其他',
          data: 0.18,
          color: false
        }
      ],
    	canvas_w: document.body.offsetWidth-50,
    }
  },
  computed :{
  	canvas_h: function(){
  		var step = this.items.length
  		return step*60
  	},
    maxData: function(){
      var tmp = 0
      for(var i=0;i<this.items.length;i++){
        if(this.items[i].data>=tmp){
          tmp = this.items[i].data
        }
      }
      return tmp
    }
  },
  methods: {
  	initCanvas: function(canvasId){
			var canvas = document.getElementById(canvasId);
			canvas.width=this.canvas_w;
	    canvas.height=this.canvas_h;
	    if(canvas.getContext('2d')){
	        var context = canvas.getContext('2d');
	        return context
	    }else {
	        alert('当前浏览器不支持canvas，请使用chrome');
	    }
  	},
  	darwDynamic: function(cxt,per){
	    cxt.clearRect(0,0,this.canvas_w,this.canvas_h)
      var colors=['red','green','Aquamarine','orange','gray','Brown','maroon','blue','silver','olive']
			var x =0
			var y =0
			var w =0
			var process_x =0
			var process_y =0
			var column_h = ( this.canvas_h / this.items.length)
			for( var i in this.items){
				//标题
				y = column_h * i + column_h
				x = 0
				cxt.font = "30px Arial"
				var color = this.items[i].color || (this.items[i].color = colors[i])
        cxt.fillStyle = 'green'
				cxt.fillText(this.items[i].name ,x,y-5)

				//进度条
        cxt.fillStyle = color
        w = (this.canvas_w - 200) * this.items[i].data / this.maxData
				cxt.fillRect(x+130,y-30,w*per,30)
				cxt.fill()

				//百分比
				cxt.save()
				cxt.fillStyle = 'black'
				cxt.font = "25px Arial"
				process_x = x+130+w*per+5
				process_y = y -5 
        cxt.fillText((this.items[i].data*100>>0 )+'%',process_x,process_y)
				//cxt.fillText((this.items[i].data*100>>0 )+'%',process_x,process_y)
				cxt.restore()
			}
  	}
  },
  mounted: function(){
    var that = this
    var context_dynamic = this.initCanvas('canvas_bar_dynamic')
    var per =0
    that.darwDynamic(context_dynamic)

    setTimeout(function(){
      that.showFlag=!that.showFlag
    },10)

    for(var i=0;i<100;i++){
      setTimeout(function(){
        per += 0.01
        that.darwDynamic(context_dynamic,per)
      },1000+i*10)
    }

  }
}
</script>

<style lang="scss" module>
.canvas_bar_warpper{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  display: block;
  margin: auto;
  position: absolute;
  left: 0; 
  top:0;
  right: 0;
  bottom: 0;
  .canvas_bar_dynamic{
  	display: block;
  	margin: auto;
    position: absolute;
  	left: 0; 
  	top:0;
  	right: 0;
  	bottom: 0;
  }
}
</style>