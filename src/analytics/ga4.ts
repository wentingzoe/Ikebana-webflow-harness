type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

const ensureDataLayer = (): DataLayerEvent[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }

  return window.dataLayer;
};

const gtag = (...args: unknown[]): void => {
  const dl = ensureDataLayer();
  dl.push(args as unknown as DataLayerEvent);
};

export const initGA4Tracking = (): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  ensureDataLayer();

  const pageLocation = window.location.href;
  const pagePath = window.location.pathname;

  gtag('event', 'page_view', {
    page_location: pageLocation,
    page_path: pagePath
  });

  window.addEventListener('ikb:cta-click', (event: Event) => {
    const customEvent = event as CustomEvent<{ id: string; href: string }>;
    const { id, href } = customEvent.detail ?? { id: 'unknown', href: '' };

    gtag('event', 'cta_click', {
      cta_id: id,
      destination: href
    });
  });
};

export {};
