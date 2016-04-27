var App = function() {

	function init(){
		_drawBg();
	}

	/**
	 * 绘制星空背景
	 * @param  {Function} callback [背景图加载完毕，调用回调函数]
	 * @return
	 */
	function _drawBg(callback){
		var window_width = screen.width;
		var window_height = screen.height;

		var canvas_bg = document.getElementById('canvas-bg');
		var context_bg = canvas_bg.getContext('2d');

		canvas_bg.width = window_width;
		canvas_bg.height = window_height;

		var img_bg = new Image();
		img_bg.onload = function(){

			var xpos = window_width/2;
			var ypos = window_height/2;
			
			// context_bg.drawImage(img_bg, 0, 0, canvas_bg.width, canvas_bg.height);
			// context_bg.save();
			// context_bg.translate(xpos,ypos);
			context_bg.translate(-45, -45);
			context_bg.rotate(45*Math.PI/180);
    		context_bg.drawImage(img_bg, 0, 0, canvas_bg.width, canvas_bg.height);//把图片绘制在旋转的中心点，
    					
			// var xpos = canvas.width/2;
   			// var ypos = canvas.height/2;

			// var angle = 50 * Math.PI/2;
			// context_bg.rotate(angle);
			// d3.timer(function(){

			// });

			if(callback){
				callback();
			}
			
		}
		img_bg.src = 'image/mainbg.png';

	}

	return {
		init: function(){
			init();
		}
	};
}();