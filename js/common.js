$(function () {
	var $elem = $('img.resImg');
	var sp = 'sp_';
	var pc = 'pc_';
	var replaceWidth = 769;

	function imageSwitch() {
		// ウィンドウサイズを取得する。
		var windowWidth = parseInt($(window).width());
		$elem.each(function () {
			var $this = $(this);
			if (windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
			}
		});
	}
	imageSwitch();
	var resizeTimer;
	$(window).on('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () {
			imageSwitch();
		}, 100);
	});
});

$(function () {
	$(function () {
		$('#gNaviBtn').click(function () {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('#gNaviMenu, #gNaviMenuInner').addClass('active');
			} else {
				$('#gNaviMenu, #gNaviMenuInner').removeClass('active');
			}
		});
	});
});
