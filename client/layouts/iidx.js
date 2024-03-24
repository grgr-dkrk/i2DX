
(function() {

	function iidxlayout(axis) {
		const SCALE = 1.4;
		const KEY_WIDTH = 29 * SCALE;
		const KEY_HEIGHT = 46 * SCALE;
		const MARGIN_KEY_INNER = 12 * SCALE;
		const MARGIN_KEY_OUTER = 20.5 * SCALE;
		const MARGIN_KEY_TOP_BOTTOM = 10 * SCALE;

		var startPosition = axis == 'left' ? 1 : 8;

		function style(index) {
			var style = {
				bottom: (KEY_HEIGHT + MARGIN_KEY_TOP_BOTTOM) * (index % 2) + 'mm',
				width: `${KEY_WIDTH}mm`,
				height: `${KEY_HEIGHT}mm`,
				left: index % 2 === 0 ? `${(KEY_WIDTH + MARGIN_KEY_INNER) * index / 2}mm` : `${(MARGIN_KEY_OUTER * index)}mm`,
			};

			return style;
		}

		return function(ui) {
			ui.setType('button');
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
		ui.setType('turntable');
		ui.turntableFullscreen();
	});

	i2DX.layout('p2_turntable', function(ui) {
		ui.setType('turntable');
		ui.turntableFullscreen(2);
	});

})();
