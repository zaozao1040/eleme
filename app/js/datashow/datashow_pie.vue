<template>
	<section>
    <transition enter-active-class="animated rubberBand"  >
      <div v-show="showFlag" :class="$style.canvas_pie_warpper">
        <canvas id="canvas_pie" :class="$style.canvas_pie">
          你的浏览器不支持，请使用chrome
        </canvas>
         <canvas id="canvas_pie_dynamic" :class="$style.canvas_pie">
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
    			name: '华莱士',
    			data: 0.35,
    			color: false
    		},{
    			name: '肯德基',
    			data: 0.26,
    			color: false
    		},{
    			name: '德克士',
    			data: 0.13,
    			color: false
    		},{
    			name: '麦当劳',
    			data: 0.12,
    			color: false
    		},{
    			name: '其他总和',
    			data: 0.14,
    			color: '#eee'
    		}
    	],
    	canvas_h: document.body.offsetWidth-50,
    	canvas_w: document.body.offsetWidth-50,
    }
  },
  computed: {
  	r: function(){
  		return this.canvas_w / 2 - 80
  	},
  	step: function(){
  		return this.items.length
  	},
  	center_r: function(){
  		return this.canvas_w / 2
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
  	darwGrid: function(cxt){
  		//背景圆饼
			cxt.beginPath()
  		cxt.lineWidth=1
  		cxt.fillStyle = '#eee'
  		cxt.strokeStyle='#eee'
  		cxt.moveTo(this.center_r,this.center_r)
  		cxt.arc(this.center_r,this.center_r,this.r,0,2*Math.PI)
  		cxt.fill()
  		cxt.stroke()
  		cxt.closePath()
  	},
  	darwDynamic: function(cxt,per){

  		cxt.clearRect(0,0,this.canvas_w,this.canvas_h)

      //画各个颜色的扇形
      var colors=['red','green','blue','orange','gray','blue','Brown','maroon','silver','olive']
      var sAngel = 1.5*Math.PI
      var eAngel = 0
      var aAngel = Math.PI*2
      for(var i = 0;i<this.step;i++){
        var item = this.items[i]
        var color = item.color || (item.color = colors[i])
        eAngel=sAngel+aAngel*item.data
        cxt.beginPath()
        cxt.lineWidth=1
        cxt.fillStyle = color
        cxt.strokeStyle=color
        cxt.moveTo(this.center_r,this.center_r)
        cxt.arc(this.center_r,this.center_r,this.r,sAngel,eAngel)
        cxt.save()
        var x = this.center_r + Math.sin( 0.5*Math.PI-(sAngel+(eAngel-sAngel)/2))*this.r
        var y = this.center_r + Math.cos( 0.5*Math.PI-(sAngel+(eAngel-sAngel)/2))*this.r
        cxt.fillStyle=colors[i]
        cxt.font = "30px Arial"
        cxt.textAlign="center"
        if(x>this.canvas_w / 2 && y<=this.canvas_h /2){
          cxt.textAlign = "left"
          cxt.fillText(this.items[i].name ,x,y)        
        }else if(x>this.canvas_w / 2 && y>this.canvas_h /2){
          cxt.textAlign = "left"
          cxt.fillText(this.items[i].name ,x,y+25)
        }else if(x<this.canvas_w / 2 && y>this.canvas_h /2){
          cxt.textAlign = "right"
          cxt.fillText(this.items[i].name ,x,y+25)
        }else if(x<this.canvas_w / 2 && y<=this.canvas_h /2){
          cxt.textAlign = "right"
          cxt.fillText(this.items[i].name ,x,y)
        }else{
          cxt.textAlign = "center"
          cxt.fillText(this.items[i].name ,x,y)
        }
        cxt.restore()

        cxt.fill()
        cxt.stroke()
        cxt.closePath()
        sAngel = eAngel
      }

      //画动画扇形覆盖各种颜色的扇形之上
      cxt.fillStyle='#eee';
      cxt.strokeStyle='#eee';
      cxt.lineWidth = 1;
      var sAngel = 1.5*Math.PI
      var eAngel = 0
      var aAngel = Math.PI*2
  		cxt.beginPath()
			cxt.moveTo(this.center_r,this.center_r)
      if(per <=0){
        cxt.arc(this.center_r,this.center_r,this.r,0,Math.PI*2)
      }else{
        cxt.arc(this.center_r,this.center_r,this.r,sAngel,sAngel+Math.PI*2*per,true)
      }
  		cxt.fill()
  		cxt.stroke()

      //百分比
      var sAngel = 1.5*Math.PI
      var eAngel = 0
      var aAngel = Math.PI*2
      for(var i = 0;i<this.step;i++){
        var item = this.items[i]
        var color = item.color || (item.color = colors[i])
        eAngel=sAngel+aAngel*item.data
        cxt.save()
        cxt.fillStyle='black'
        cxt.font = "25px Arial"
        cxt.textAlign="center"
        cxt.fillText((this.items[i].data*100>>0 )+'%' ,this.center_r+Math.sin( 0.5*Math.PI-(sAngel+(eAngel-sAngel)/2))*this.r/2,this.center_r + Math.cos( 0.5*Math.PI-(sAngel+(eAngel-sAngel)/2))*this.r/2)
        cxt.restore()
        cxt.fill()
        cxt.stroke()
        cxt.closePath()
        sAngel = eAngel
      }
  	}
  },
  mounted: function(){
    var that = this
    var context = this.initCanvas('canvas_pie')
    this.darwGrid(context)
    var context_dynamic = this.initCanvas('canvas_pie_dynamic')
    var per =0

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
.canvas_pie_warpper{
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
  //background: #f3f5f7;
  .canvas_pie{
    margin: auto;
    position: absolute;
    left: 0; 
    top:0;
    right: 0;
    bottom: 0;
  }
}

</style>