// #region Global Imports
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// #endregion Global Imports

// #region Local Imports
import { usePrevious } from '@Hooks';
import { pageview } from '@Services/Analytics';
// #endregion Local Imports

function usePageView(): void {
    const router = useRouter();
    const lastRouter = usePrevious(router);

    useEffect(() => {
        function handleRouteChange(url: string): void {
            if (!lastRouter) {
                pageview(url);
            } else if (
                lastRouter.pathname !== router.pathname ||
                lastRouter.query !== router.query
            ) {
                pageview(url);
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange);
        handleRouteChange(router.route);

        return function cleanup() {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [lastRouter, router]);
}

export default usePageView;
