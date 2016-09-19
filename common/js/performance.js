// [Measure Web Page Performance Using JavaScript](http://qnimate.com/measuring-web-page-performance-using-modern-javascript-apis/)

function reportLoadperformance(name){
	if( "performance" in window ){
		if( "timing" in window.performance &&
			"memory" in window.performance &&
			"now" in window.performance
		){
			var total_download_time = window.performance.timing.responseEnd - window.performance.timing.navigationStart;
			var total_render_time = window.performance.timing.loadEventStart - window.performance.timing.domLoading;

			console.log( "total_download_time="+total_download_time);
			console.log( "total_render_time="+total_render_time);

			var heap_size_limit = window.performance.memory.jsHeapSizeLimit;
			var total_heap_size = window.performance.memory.totalJSHeapSize;
			var used_heap_size = window.performance.memory.usedJSHeapSize;

			console.log( "heap_size_limit="+heap_size_limit);
			console.log( "total_heap_size="+total_heap_size);
			console.log( "used_heap_size="+used_heap_size);

			var render_time = performance.now() - window.performance.timing.domLoading;
			console.log( "render_time="+render_time);
			var result = {
				total_download_time:total_download_time,
				total_render_time:total_render_time,
				heap_size_limit:heap_size_limit,
				total_heap_size:total_heap_size,
				used_heap_size:used_heap_size,
				render_time:render_time
			};


			if("reportRenderPerformance" in parent){
				parent.reportRenderPerformance(name,result);

			}

		}

	}

}
;
