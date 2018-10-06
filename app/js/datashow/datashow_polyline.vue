<template>
	<section>
    <transition enter-active-class="animated lightSpeedIn"  >
      <div v-show="showFlag" :class="$style.canvas_polyline_warpper">
        <canvas id="canvas_polyline" :class="$style.canvas_polyline">
          你的浏览器不支持，请使用chrome
        </canvas>
        <canvas id="canvas_polyline_dynamic" :class="$style.canvas_polyline">
          你的浏览器不支持，请使用chrome
        </canvas>   
      </div>
    </transition>
	</section>
</template>

<script>
export default {

  name: 'datashow_polyline',
  data () {
    return {
      showFlag:false,
    	items: [
    		{
    			name: '2012',
    			data: 0.27,
    			color: false
    		},{
    			name: '2013',
    			data: 0.336,
    			color: false
    		},{
    			name: '2014',
    			data: 0.514,
    			color: true
    		},{
    			name: '2015',
    			data: 0.290,
    			color: false
    		},{
    			name: '2016',
    			data: 0.225,
    			color: false
    		},{
    			name: '2017',
    			data: 0.176,
    			color: false
    		},{
    			name: '2018',
    			data: 0.115,
    			color: false
    		}
    	],
    	canvas_h: 500,
    	canvas_w: document.body.offsetWidth-50,
    	canvas_grid_h: 470
    }
  },
  computed :{
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
  	darwGrid: function(cxt){
  		var rowNum =10
  		cxt.beginPath()
  		cxt.lineWidth=1
  		cxt.strokeStyle='#c1c1c1'
  		for(var i = 0;i<=rowNum;i++){
  			var y=(this.canvas_grid_h/rowNum)*i
  			cxt.moveTo(0,y)
  			cxt.lineTo(this.canvas_w,y)
  		}
  		var columnNum=this.items.length + 1
  		for(var i = 0;i<=columnNum;i++){
  			var x=(this.canvas_w/columnNum)*i 
  			cxt.moveTo(x,0)
  			cxt.lineTo(x,this.canvas_grid_h)
  		}
  		cxt.stroke()
  		cxt.closePath()
  	},
  	darwDynamic: function(cxt,per){
  		cxt.clearRect(0,0,this.canvas_w,this.canvas_h)
  		cxt.beginPath()
  		cxt.lineWidth=3
  		cxt.lineCap='round'
  		cxt.strokeStyle='rgba(30,144,255,1)'
  		var x =0
  		var y =0
  		var column_w = ( this.canvas_w / (this.items.length + 1))
  		//画点
  		for( var i in this.items){
  			x = column_w * i + column_w
  			y = this.canvas_grid_h - this.canvas_grid_h*this.items[i].data/this.maxData *0.8* per 
  			cxt.moveTo(x,y)
  			cxt.arc(x,y,3,0,Math.PI*2,true)
  			cxt.font = "20px Arial"
  			
  		}
  		//画线
  		cxt.moveTo(column_w,this.canvas_grid_h - this.canvas_grid_h*this.items[0].data/this.maxData *0.8* per)
  		for( var i in this.items){
  			x = column_w * i + column_w
  			y = this.canvas_grid_h - this.canvas_grid_h*this.items[i].data/this.maxData *0.8* per
  			cxt.lineTo(x,y)
  			cxt.fillStyle="Purple"
  			if(this.items[i].color){
  				cxt.fillStyle="red"
  			}
  			cxt.fillText((this.items[i].data*100>>0 )+'%' ,x-10,y-10)
  		}
  		cxt.stroke()

  		//阴影
  		cxt.lineTo(x,this.canvas_grid_h)
  		cxt.lineTo(column_w,this.canvas_grid_h)
  		cxt.fillStyle="rgba(30,144,255,0.2)"
  		cxt.fill()

  		//标题
  		for( var i in this.items){
  			x = column_w * i + column_w
  			y = this.canvas_h 
  			cxt.fillStyle="green"
  			cxt.font = "25px Arial"
  			cxt.textAlign="center"
  			cxt.fillText(this.items[i].name ,x,y-5)
  		}
  		cxt.closePath()
  	}
  },
  mounted: function(){
    var that = this
    var context = this.initCanvas('canvas_polyline')
    this.darwGrid(context)
    var context_dynamic = this.initCanvas('canvas_polyline_dynamic')
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
.canvas_polyline_warpper{
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
  .canvas_polyline{
    margin: auto;
    position: absolute;
    left: 0; 
    top:0;
    right: 0;
    bottom: 0;
  }
}

</style>