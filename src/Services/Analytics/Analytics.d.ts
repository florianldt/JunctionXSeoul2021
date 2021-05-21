interface GoogleAnalyticsEvent {
    action: string;
    category: string;
    label: string;
    value: number;
}

interface GtagEventOptions {
    event_category: string;
    event_label: string;
    value: number;
}

export { GoogleAnalyticsEvent, GtagEventOptions };
