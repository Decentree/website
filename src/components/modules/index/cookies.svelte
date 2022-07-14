<GdprBanner cookieName="decentree_cookies"  heading="Keep your cookies under control!" description="This website uses cookies to achieve best user experience and to help us analyze our traffic" acceptLabel="Confirm" settingsLabel="Preferences" showEditIcon={false} choices={choices} categories={categories} />

<script>
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

  const  choices = {
    necessary: false, 
    tracking: false, 
    analytics: {
        label: "Analytics cookies",
        description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
        value: true
    },
    marketing: {
        label: "Marketing cookies",
        description: "Used for marketing data.",
        value: true
    }
  }

 const categories = {
    analytics: function() {
    },
    marketing: function() {
      const smartlook = document.createElement("script");
      smartlook.type = "text/javascript";
      smartlook.innerHTML = "window.smartlook||(function(d) { var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0]; var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript'; c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);})(document);smartlook('init', 'f8a8f9a486e0ff0edaad7fd67433c66fe35058fb', { region: 'eu' });"

      const another =  document.createElement("script");
      another.type = "text/javascript";
      another.innerHTML = `(function(g,t){g.type="text/javascript";g.async=true;g.src="https://c"+"t.l"+"eady.com/Razk8l9n8fWgXI6i/L"+".js";t=t[0];t.parentNode.insertBefore(g,t)})(document.createElement("script"), document.getElementsByTagName("script"));`
      
      document.getElementsByTagName('head')[0].appendChild(smartlook);
      document.getElementsByTagName('head')[0].appendChild(another);
    },
  
}
</script>

<style lang="scss">
  
  @import '@beyonk/gdpr-cookie-consent-banner/dist/style.css';
   :global {
      .cookieConsentToggle {
        z-index: 20;
    }

    .cookieConsentToggle:hover {
      color: white;
      background: black;
    }

    .cookieConsentWrapper {
      z-index: 20;
      @apply bg-primary-blue bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-md shadow-md; 
    }

    .cookieConsentOperations {
      background: rgba(0, 0, 0, 0.8);
      z-index: 20;
    }
    .cookieConsentOperations__ItemLabel{
      @apply mt-1 block text-sm;
    }

    .cookieConsentOperations__List {
     @apply bg-primary-blue bg-opacity-80 rounded-md;
    }


    .cookieConsentOperations__Item input:checked + label::before{
      @apply bg-primary-green;
    }
    .cookieConsentOperations__Item input:checked + label::after {
      transform: translate(20px, -50%);
      
    }

    .cookieConsent__Button {
     @apply btn-primary text-[13px];
    }

    .cookieConsent__Button--Close {
      @apply btn-primary text-[14px] text-primary-blue mx-auto w-full;
    }

    .cookieConsent__Button:hover {
      opacity: 1;
    }

    @media only screen and (max-width: 900px) {
      .cookieConsent {
        display: block;
      }

      .cookieConsent__Right {
        margin-top: 20px;
      }

      .cookieConsent__Button {
        margin: 0 10px 10px 0;
      }

      .cookieConsent__Button--Close {
        margin: 0 auto;
      }
      .cookieConsentOperations__Item label{
        @apply text-base;
      }
     .cookieConsentOperations .cookieConsentOperations__List {
      @apply py-10;
     }
    }
  }
</style>