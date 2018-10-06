<template>
	<section>
		<transition enter-active-class="animated rotateIn">
			<div v-show="showFlag" :class="$style.canvas_rada_warpper">
				<canvas id="canvas_rada" :class="$style.canvas_rada">
					你的浏览器不支持，请使用chrome
				</canvas>
				<canvas id="canvas_rada_dynamic" :class="$style.canvas_rada">
					你的浏览器不支持，请使用chrome
				</canvas>
			</div>
		</transition>
	</section>
</template>

<script>
export default {

  name: 'datashow_rada',

  data () {
    return {
    	showFlag:false,
    	items: [
    		{
    			name: '早餐',
    			data: 0.17,
    			color: false
    		},{
    			name: '午餐',
    			data: 0.336,
    			color: false
    		},{
    			name: '下午茶',
    			data: 0.25,
    			color: true
    		},{
    			name: '晚餐',
    			data: 0.4,
    			color: false
    		},{
    			name: '夜宵',
    			data: 0.225,
    			color: false
    		}
    	],
    	canvas_h: document.body.offsetWidth-50,
    	canvas_w: document.body.offsetWidth-50,
    }
  },
  computed: {
  	r: function(){
  		return this.canvas_w / 2 - 50
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
  		var colorFlag = false
  		for(var s=10;s>0;s--){
  			//雷达顶点
	  		cxt.beginPath()
	  		for(var i = 0;i<this.step;i++){
	  			var rad = (Math.PI*2 / 360)*(360/this.step)*i
	  			var x=this.center_r+Math.sin(rad)*this.r*(s/10)
	  			var y=this.center_r+Math.cos(rad)*this.r*(s/10)
		  		cxt.lineTo(x,y)
	  		}
	  		cxt.closePath()
	  		cxt.fillStyle=(colorFlag=!colorFlag)?'#99c0ff':'#f1f9ff'
	  		cxt.fill()
  		}
	  	cxt.strokeStyle='#e0e0e0'
			cxt.stroke()

  		//伞骨
  		for(var i = 0;i<this.step;i++){
  			var rad = (Math.PI*2 / 360)*(360/this.step)*i
  			var x=this.center_r+Math.sin(rad)*this.r
  			var y=this.center_r+Math.cos(rad)*this.r
	  		cxt.moveTo(this.center_r,this.center_r)
	  		cxt.lineTo(x,y)
  		}
  		cxt.stroke()

  	},
    darwDes: function(cxt){
      for(var i = 0;i<this.step;i++){
        var rad = (Math.PI*2 / 360)*(360/this.step)*i
        var x=this.center_r+Math.sin(rad)*this.r
        var y=this.center_r+Math.cos(rad)*this.r
        cxt.fillStyle="green"
        cxt.font = "30px Arial"
        if(x>this.canvas_w / 2){
          cxt.textAlign = "left"
          cxt.fillText(this.items[i].name ,x,y)        
        }else if(x<this.canvas_w / 2){
          cxt.textAlign = "right"
          cxt.fillText(this.items[i].name ,x,y)
        }else{
          cxt.textAlign = "center"
          cxt.fillText(this.items[i].name ,x,y+20)
        }
      }

    },
  	darwDynamic: function(cxt,per){
  		cxt.clearRect(0,0,this.canvas_w,this.canvas_h)
  		//画点
  		for(var i = 0;i<this.step;i++){
  			var rad = (Math.PI*2 / 360)*(360/this.step)*i
  			var data = this.items[i].data
  			var x=this.center_r+Math.sin(rad)*this.r*data* per
  			var y=this.center_r+Math.cos(rad)*this.r*data* per
	  		cxt.moveTo(x,y)
	  		cxt.beginPath()
	  		cxt.fillStyle='red'
	  		cxt.arc(x,y,4,0,Math.PI*2,true)
	  		cxt.closePath()
	  		cxt.fill()
	  		cxt.fillStyle='black'
	  		cxt.font = "25px Arial"
  			if(x>this.canvas_w / 2){
  				cxt.textAlign = "left"
  				cxt.fillText((this.items[i].data*100>>0 )+'%' ,x,y)
  			}else if(x<this.canvas_w / 2){
  				cxt.textAlign = "right"
  				cxt.fillText((this.items[i].data*100>>0 )+'%' ,x,y)
  			}else{
  				cxt.textAlign = "center"
  				cxt.fillText((this.items[i].data*100>>0 )+'%' ,x,y+20)
  			}
	  		
  		}
  		//画线
  		cxt.beginPath()
  		for(var i = 0;i<this.step;i++){
  			var rad = (Math.PI*2 / 360)*(360/this.step)*i
  			var data = this.items[i].data
  			var x=this.center_r+Math.sin(rad)*this.r*data* per
  			var y=this.center_r+Math.cos(rad)*this.r*data* per
	  		cxt.lineTo(x,y)
  		}
  		cxt.closePath()
  		cxt.strokeStyle="#ff7676"
  		cxt.lineWidth=2
  		cxt.stroke()
  	}
  },
  mounted: function(){
  	var that = this
  	var context = this.initCanvas('canvas_rada')
  	this.darwGrid(context)
    var context_dynamic = this.initCanvas('canvas_rada_dynamic')
    var per =0

    setTimeout(function(){
      that.showFlag=!that.showFlag
    },10)
    
    for(var i=0;i<100;i++){
      setTimeout(function(){
        per += 0.01
        that.darwDynamic(context_dynamic,per)
      },1000+i*15)
    }

    setTimeout(function(){
      that.darwDes(context)
    },1000)
    
  }
}
</script>

<style lang="scss" module>
.canvas_rada_warpper{
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
  .canvas_rada{
    margin: auto;
    position: absolute;
    left: 0; 
    top:0;
    right: 0;
    bottom: 0;
  } 
}
</style>