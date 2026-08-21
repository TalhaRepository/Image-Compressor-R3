import { AdMob } from '@capacitor-community/admob';

export const BANNER_AD_ID = 'ca-app-pub-6956987079427706/2871366998';
export const INTERSTITIAL_AD_ID = 'ca-app-pub-6956987079427706/6778822415';

// Initialize AdMob & Show Banner at Bottom
export const initializeAds = async () => {
  try {
    await AdMob.initialize();
    await AdMob.showBanner({
      adId: BANNER_AD_ID,
      adSize: 'BANNER',
      position: 'BOTTOM_CENTER',
      margin: 0,
    });
  } catch (error) {
    console.error('AdMob initialization failed', error);
  }
};

// Show Interstitial Ad (Compress Button Event)
export const showInterstitialAd = async () => {
  try {
    await AdMob.prepareInterstitial({
      adId: INTERSTITIAL_AD_ID,
    });
    await AdMob.showInterstitial();
  } catch (error) {
    console.error('Interstitial ad failed', error);
  }
};
