let urls = [
    "/assets/index-6b10514b.js",
    "/libs/frvr-sdk.min.js",
    "/libs/frvr-channel-web.min.js",
    "cookie-cdn.cookiepro.com/scripttemplates",
    "/libs/howler.core.min.js",
    "/libs/jquery-3.2.1.min.js",
    "/libs/jquery-ui.js",
    "https://challenges.cloudflare.com/turnstile/v0/api.js",
    /*"https://www.google.com/recaptcha/api.js?onload=onGotRecaptchaToken&render=6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP",
    "https://www.gstatic.com/recaptcha/releases/Xv-KF0LlBu_a0FJ9I5YSlX5m/recaptcha__lt.js",*/
    "https://cookie-cdn.cookiepro.com/scripttemplates/202310.1.0/otBannerSdk.js",
    "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
    "https://c.amazon-adsystem.com/aax2/apstag.js",
    "https://fran-cdn.frvr.com/prebid.7.23.0.js",
    "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
    "https://cookie-cdn.cookiepro.com/scripttemplates/202310.1.0/otTCF.js",
    "https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202407250101/pubads_impl.js?cb=31085684",
    "https://config.aps.amazon-adsystem.com/configs/a0c80cc5-5232-44a0-981f-0db953bdb1ca",
    "https://static.criteo.net/js/ld/publishertag.prebid.139.js",
    "https://tpc.googlesyndication.com/sodar/sodar2.js"];
  
    const isSandbox = window.location.host.includes("sandbox.");
    const isDev = window.location.host.includes("dev.");
  
  const isRequired = (innerHTML) => {
    const isCaptcha = innerHTML.includes("window.captchaCallbackHook && window.captchaCallbackHook();");
  
   return isCaptcha;
  }
  const Mutation = async (observer) => {
    for(let Observer of observer) {
  
        if(Observer.addedNodes[0] instanceof HTMLScriptElement) {
            const node = Observer.addedNodes[0];
  
            if(!node.src.includes("recaptcha") && !isRequired(node.innerHTML)) node.remove();
        }
    }
  }
  
  const Observer = new MutationObserver(Mutation);
  Observer.observe(document, { attributes: true, childList: true, subtree: true });
  
  console.log("overriding")
  
  function replaceBodyContent(newHtml) {
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      document.body.innerHTML = newHtml;
    });
  }
  
  replaceBodyContent(`
  <script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/Xv-KF0LlBu_a0FJ9I5YSlX5m/recaptcha__lt.js" crossorigin="anonymous" integrity="sha384-zoT1D+Lj74fhU7dRYbPP3HIUCZvnQ+L4P8ShXYf5TT2OL7kRjJ7P1C5+SK34bVH+"></script><script>window.captchaCallback = function() {
   window.captchaCallbackHook && window.captchaCallbackHook();
   window.captchaCallbackComplete = true;
   }
   window.onGotTurnstileToken = function(token) {
   window.turnstileToken = token;
   if (token) window.captchaCallback();
   }
    window.onGotRecaptchaToken = function(token) {
      window.recaptchaToken = token;
      if (token) window.captchaCallback();
    }
  </script>
  <div class="cf-turnstile" data-sitekey="0x4AAAAAAAMYHI96GFiJzMmp" data-callback="onGotTurnstileToken"></div>
  <script src="https://www.google.com/recaptcha/api.js?onload=onGotRecaptchaToken&amp;render=6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP"></script>
  <div>
   <div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
      <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-g3k6k8gmkiv2" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP&amp;co=aHR0cHM6Ly9zYW5kYm94Lm1vb21vby5pbzo0NDM.&amp;hl=lt&amp;v=Xv-KF0LlBu_a0FJ9I5YSlX5m&amp;size=invisible&amp;cb=bewawxhs3eol"></iframe></div>
      <div class="grecaptcha-error"></div>
      <textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
   </div>
   <iframe style="display: none;"></iframe>
  </div>`)
  
  