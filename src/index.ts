import { initGA4Tracking } from './analytics/ga4';
// import { initExampleWidget } from './widgets/example-widget';

const attachCtaTracking = (): void => {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[data-track-cta]');

  anchors.forEach((anchor) => {
    const id = anchor.getAttribute('data-track-cta') ?? anchor.textContent?.trim() ?? 'unknown';
    const href = anchor.getAttribute('href') ?? '';

    anchor.addEventListener('click', () => {
      const event = new CustomEvent('ikb:cta-click', {
        detail: { id, href }
      });
      window.dispatchEvent(event);
    });
  });
};

export const bootIkebanaEnhancements = (): void => {
  initGA4Tracking();
  attachCtaTracking();
  // initExampleWidget();
};

const onReady = (cb: () => void): void => {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb, { once: true });
  }
};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  onReady(bootIkebanaEnhancements);
}
