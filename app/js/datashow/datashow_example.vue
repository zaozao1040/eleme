<template>
	<section>
		<canvas id="canvas1" :class="$style.canvas1">
			你的浏览器不支持，请使用chrome
		</canvas>
	</section>
</template>

<script>
export default {

  name: 'datashow_pie',

  data () {
    return {
    	canvas_h: 500,
    	canvas_w: document.body.offsetWidth-50,
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
  	}
  },
  mounted: function(){
  	var context = this.initCanvas('canvas1')


  }
}
</script>

<style lang="scss" module>
.canvas1{
	display: block;
	margin: auto;
  position: absolute;
	left: 0; 
	top:0;
	right: 0;
	bottom: 0;
	background: green;
}
</style>