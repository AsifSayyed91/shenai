declare global {
    interface Window {
        _shenai_captureError: any;
        _shenai_sentry: any;
    }
}
export declare function initSentry(): void;
