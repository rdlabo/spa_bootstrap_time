// [Measure Web Page Performance Using JavaScript](http://qnimate.com/measuring-web-page-performance-using-modern-javascript-apis/)

console.log("**  inline script. **" + window.performance.now());

// register change hadler
var nodebody = document.querySelector("body");
var mutationobserver = new MutationObserver(function(mutations){
	var detect_helloTick = 0;

	console.log(nodebody.innerText);
	if( nodebody.innerText.indexOf('Hello') >= 0 ){ // check hello in contents.
		window.performance.mark("detect_hello");
		detect_helloTick = window.performance.now();
		console.log("**  detect Hello. **" + window.performance.now());
		mutationobserver.disconnect();
	}
});

// observe change.
mutationobserver.observe(nodebody, {childList: true});

window.onload = function(){

	console.log("**  window.onload. **" + window.performance.now());

	var timing = window.performance.timing;

	// console.log("navigationStart=" + timing.navigationStart); // ナビゲーション開始時刻
	// console.log("redirectStart=" + timing.redirectStart);      // リダイレクト開始時刻, 0の場合はリダイレクトなし
	// console.log("redirectEnd=" + timing.redirectEnd);        // リダイレクト終了時刻, 0の場合はリダイレクトなし
	// console.log("fetchStart=" + timing.fetchStart);         //
	// console.log("domainLookupStart=" + timing.domainLookupStart);  //
	// console.log("domainLookupEnd=" + timing.domainLookupEnd);    //
	// console.log("connectStart=" + timing.connectStart);       //
	// console.log("connectEnd=" + timing.connectEnd);         //
	// console.log("requestStart=" + timing.requestStart);       //
	// console.log("responseStart=" + timing.responseStart);      //
	// console.log("responseEnd=" + timing.responseEnd);        // レスポンスを全て受け取った
	// console.log("domLoading=" + timing.domLoading);         //
	// console.log("domInteractive=" + timing.domInteractive); //
	// console.log("domContentLoadedEventStart=" + timing.domContentLoadedEventStart); //
	// console.log("domContentLoadedEventEnd=" + timing.domContentLoadedEventEnd);
	// console.log("domComplete=" + timing.domComplete);        // DOMの構築が完了した
	// console.log("loadEventStart=" + timing.loadEventStart); // onLoadイベントが開始された
	// console.log("loadEventEnd=" + timing.loadEventEnd);      // onLoadイベントが終了した.

	var detect_hello = performance.getEntriesByName("detect_hello", "mark")[0];
	if(detect_hello){
		reportLoadperformance(frameworkname);
	}
	else{
		// まだ HELLO検知してないのであとで。
		setTimeout(reportLoadperformance(frameworkname), 5000);

	}
	// console.log("detect_hello=" + detect_hello.startTime);

};


function reportLoadperformance(name){
	if( "performance" in window ){
		if( "timing" in window.performance &&
			"memory" in window.performance &&
			"now" in window.performance
		){
			var timing = window.performance.timing;
			var memory = window.performance.memory;

			// console.log("リダイレクト: " + (timing.redirectEnd - timing.redirectStart));
			// console.log("アプリケーション・キャッシュ: " + (timing.domainLookupStart - timing.fetchStart));
			// console.log("DNS取得時間: " + (timing.domainLookupEnd - timing.domainLookupStart));
			// console.log("TCP接続時間: " + (timing.connectEnd - timing.connectStart));
			// console.log("リクエスト時間: " + (timing.responseStart - timing.requestStart));
			// console.log("レスポンス時間: " + (timing.responseEnd - timing.responseEnd));
			// console.log("DOMの構築時間: " + (timing.domComplete - timing.domLoading));
			// console.log("onLoadイベント: " + (timing.loadEventEnd - timing.loadEventStart));

			var total_download_time = timing.responseEnd - timing.navigationStart;
			var total_dom_time = timing.domComplete - timing.domLoading;

			// console.log("total_download_time=" + total_download_time);
			// console.log("domLoading=" + timing.domLoading);
			// console.log("domComplete=" + timing.domComplete);
			// console.log("loadEventStart=" + timing.loadEventStart);

			var heap_size_limit = memory.jsHeapSizeLimit;
			var total_heap_size = memory.totalJSHeapSize;
			var used_heap_size = memory.usedJSHeapSize;

			// console.log("heap_size_limit=" + heap_size_limit);
			// console.log("total_heap_size=" + total_heap_size);
			// console.log("used_heap_size=" + used_heap_size);
			var performance_now = window.performance.now();
			// console.log("performance_now=" + performance_now);

			var detect_hellomark = performance.getEntriesByName("detect_hello", "mark")[0];
			var detect_hello_time = 0;
			if(detect_hellomark){   // if hello detected
				detect_hello_time = detect_hellomark.startTime - total_download_time;
				// console.log("detect_hello=" + detect_hello_time);
			}
			var onload_time = timing.loadEventStart - timing.navigationStart - total_download_time;
			// var detect_hello_time = window.performance.now() - timing.domLoading;
			// console.log("detect_hello_time=" + detect_hello_time);
			var result = {
				total_download_time: total_download_time,
				total_dom_time: total_dom_time,
				detect_hello_time: detect_hello_time,
				onload_time: onload_time,
				heap_size_limit: heap_size_limit,
				total_heap_size: total_heap_size,
				used_heap_size: used_heap_size
			};

			if( "reportRenderPerformance" in parent ){
				parent.reportRenderPerformance(name, result);
			}
		}
	}
}

