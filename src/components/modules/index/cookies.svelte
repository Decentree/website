<GdprBanner cookieName="decentree_cookies"  heading="Keep your cookies under control!" description="This website uses cookies to achieve best user expereince and to help us analyze our traffic" on:analytics={initAnalytics} acceptLabel="Confirm All" settingsLabel="Preferences" showEditIcon={false} choices={choices} />

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
      console.log('No analytics cookies specified')
    },
    marketing: function() {
      console.log('No marketing cookies specified')
    },
  
}

  function initAnalytics () {
    // do something with segment.io or google analytics etc
  }
</script>

<style lang="scss">
  
  @import '@beyonk/gdpr-cookie-consent-banner/dist/style.css';
   :global {
      .cookieConsentToggle {
        width: 40px;
        height: 40px;
        position: fixed;
        will-change: transform;
        padding: 9px;
        border: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background: white;
        border-radius: 50%;
        bottom: 20px;
        right: 20px;
        transition: 200ms;
        opacity: 1;
        z-index: 99980;
    }

    .cookieConsentToggle:hover {
      color: white;
      background: black;
    }

    .cookieConsentToggle * {
      fill: currentColor;
    }

    .cookieConsentWrapper {
      z-index: 99990;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      @apply bg-primary-blue;
      color: white;
      padding: 20px;
      transition: 200ms;
    }

    .cookieConsent {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .cookieConsent__Content {
      margin-right: 40px;
    }

    .cookieConsent__Title {
      margin: 0;
      font-weight: bold;
    }

    .cookieConsent__Description {
      margin: 10px 0 0;
    }

    .cookieConsent__Description a {
      color: white;
      text-decoration: underline;
    }

    .cookieConsent__Description a:hover {
      text-decoration: none;
    }

    .cookieConsent__Right {
      display: flex;
      align-items: flex-end;
    }

    .cookieConsentOperations {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      transition: 300ms;
      will-change: transform;
      z-index: 99999;
    }
    .cookieConsentOperations__ItemLabel{
      @apply mt-1 block text-sm;
    }

    .cookieConsentOperations .cookieConsentOperations__List {
      transform: scale(1);
    }

    .cookieConsentOperations__List {
     @apply bg-primary-blue bg-opacity-80 rounded-md;
      max-width: 500px;
      padding: 40px;
      margin: auto;
      overflow-y: auto;
      box-sizing: border-box;
      max-height: 100vh;
      transition: 200ms transform;
      will-change: transform;
      transform: scale(0.95);
    }

    .cookieConsentOperations__Item {
      display: block;
      padding-left: 60px;
      margin-bottom: 20px;
    }

    .cookieConsentOperations__Item.disabled {
      color: #999;
    }

    .cookieConsentOperations__Item.disabled label::after {
      opacity: 0.3;
    }

    .cookieConsentOperations__Item input {
      display: none;
    }

    .cookieConsentOperations__Item label {
      align-items: center;
      font-size: 22px;
      font-weight: bold;
      display: block;
      position: relative;
    }

    .cookieConsentOperations__Item label::before {
      content: "";
      display: block;
      left: -60px;
      background: #DEDEDE;
      @apply transition-colors;
      height: 20px;
      border-radius: 20px;
      width: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .cookieConsentOperations__Item label::after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: black;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -58px;
      transition: 200ms;
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