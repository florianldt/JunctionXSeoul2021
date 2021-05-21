// #region Interface Imports
import { GoogleAnalyticsEvent, GtagEventOptions } from './Analytics';
// #endregion Interface Imports

declare global {
    interface Window {
        gtag: (
            type: 'config' | 'event',
            intent: string,
            options: { page_path: string } | GtagEventOptions,
        ) => void;
    }
}

const dev = process.env.NODE_ENV !== 'production';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
function pageview(url: string): void {
    if (dev) {
        // eslint-disable-next-line no-console
        console.info(`📈 Development: page view sent for path '${url}'`);
    } else {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? '', {
            page_path: url,
        });
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
function event({ action, category, label, value }: GoogleAnalyticsEvent): void {
    if (dev) {
        // eslint-disable-next-line no-console
        console.info(`📈 Development: event sent`);
    } else {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
}

export { event, pageview };
