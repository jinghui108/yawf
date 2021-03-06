var browser = function () {
  var ua = navigator.userAgent;
  if (ua.match(/^Mozilla\/[\d.]+ \(compatible; MSIE [\d.]+; Windows NT[^)]*\)$/)) return 'ie';
  if (ua.match(/^Mozilla\/5.0 \(Windows NT [\d.]+;( [^)]+;)? Trident\/[\d.]+;( [^)]+;)? rv:[\d.]+\) like Gecko$/)) return 'ie';
  if (ua.match(/^Mozilla\/5.0 \([^)]+; rv:[\d.]+\) Gecko\/[\d]{8} Firefox\/[\d.]+$/)) return 'firefox';
  if (ua.match(/^Opera\/[\d.]+ \([^)]+\) Presto\/[\d.]+ Version\/[\d.]+$/)) return 'opera';
  if (ua.match(/^Mozilla\/5.0 \([^)]+\) AppleWebKit\/[\d.+]+ \(KHTML, like Gecko\) Version\/[\d.]+ Safari\/[\d.]+$/)) return 'safari';
  if (ua.match(/^Mozilla\/5.0 \([^)]+\) AppleWebKit\/[\d.+]+ \(KHTML, like Gecko\) Chromium\/[\d.]+ Chrome\/[\d.]+ Safari\/[\d.]+$/)) return 'chromium';
  if (ua.match(/^Mozilla\/5.0 \([^)]+\) AppleWebKit\/[\d.+]+ \(KHTML, like Gecko\) Chrome\/[\d.]+ Safari\/[\d.]+$/)) return 'chrome';
  if (ua.match(/^Mozilla\/5.0 \([^)]+\) AppleWebKit\/[\d.+]+ \(KHTML, like Gecko\) Chrome\/[\d.]+ Safari\/[\d.]+ OPR\/[\d.]+$/)) return 'opera';
  if (ua.match(/AppleWebKit/)) return 'odd';
  return 'unknow';
};

var browserCss = function () {
  return '<style> .' + browser() + ' { display: block; } </style>';
};

window.onload = function () {
  var lang_select = document.getElementById('lang_select');
  lang_select.onchange = function () {
    location.href = {
      'zh-cn': 'https://tiansh.github.io/yawf/zh-cn.html',
      'zh-tw': 'https://tiansh.github.io/yawf/zh-tw.html',
      'zh-hk': 'https://tiansh.github.io/yawf/zh-hk.html',
      'en': 'https://tiansh.github.io/yawf/en.html',
    }[lang_select.value] || '#';
  };
  var show_all = document.getElementById('show_all');
  if (show_all) show_all.onclick = function () { show_all.innerHTML = '<style>.all { display: block; }</style>'; }
};
