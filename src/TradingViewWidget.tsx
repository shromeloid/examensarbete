import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "width": "980",
            "height": "610",
          "symbol": "BITSTAMP:ETHUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;

      // Clear the container before appending the script
      container.current.innerHTML = "";
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      {/* Adjust the following style to make sure it takes up the full height and width */}
      <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
