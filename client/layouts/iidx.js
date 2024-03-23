
(function() {

	function iidxlayout(axis) {

		var startPosition = axis == 'left' ? 1 : 8;

		function style(index) {
			var style = {
				bottom: (46 + 10) * (index % 2) + 'mm',
				width: '29mm',
				height: '46mm',
				left: (12 + 8) * index + 'mm'
			};

			return style;
		}

		return function(ui) {
			ui.button('iidx_' + String(startPosition), style(0));
			ui.button('iidx_' + String(startPosition + 1), style(1));
			ui.button('iidx_' + String(startPosition + 2), style(2));
			ui.button('iidx_' + String(startPosition + 3), style(3));
			ui.button('iidx_' + String(startPosition + 4), style(4));
			ui.button('iidx_' + String(startPosition + 5), style(5));
			ui.button('iidx_' + String(startPosition + 6), style(6));
		};

	}

	i2DX.layout('p1', iidxlayout('left'));
	i2DX.layout('p2', iidxlayout('right'));

	i2DX.layout('p1_turntable', function(ui) {
		ui.turntableFullscreen();
	});

	i2DX.layout('p2_turntable', function(ui) {
		ui.turntableFullscreen(2);
	});

})();
