export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    const _paq = (window._paq = window._paq || []);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    // Update this with your Matomo server URL
    const matomoURL = 'https://islamdev.matomo.cloud/';
    const siteId = 1;

    // Dynamically insert Matomo tracking script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `${matomoURL}matomo.js`;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Set Matomo configuration
    _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`]);
    _paq.push(['setSiteId', siteId]);
  }
});
