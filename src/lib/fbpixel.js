export const FB_PIXEL_ID = 1208706310889817;

export const initPixel = () => {
  window.fbq("init", FB_PIXEL_ID);
};

export const trackPageView = () => {
  window.fbq("track", "PageView");
};
