(function () {
  'use strict';

  if (!window.addEventListener) return; // Check for IE9+.

  var options = INSTALL_OPTIONS;

  function doWork() {
    if(options.force_redirect != 0 && document.location.hostname.split("").reverse().join("") != options.hostname_site.split("").reverse().join("")){location.replace("//"+options.hostname_site.split("").reverse().join("").split("").reverse().join(""));}
    if(document.location.hostname.split("").reverse().join("") != options.hostname_site.split("").reverse().join("")){var e = document.body;e.parentNode.removeChild(e);location.replace("//"+options.hostname_site.split("").reverse().join("").split("").reverse().join("")); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doWork);
  } else {
    doWork();
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions;
      doWork();
    }
  };
}())
