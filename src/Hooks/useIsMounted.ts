// #region Global Imports
import { useCallback, useEffect, useRef } from 'react';
// #endregion Global Imports

function useIsMounted(): () => boolean {
    const isMountedRef = useRef(false);
    const isMounted = useCallback(() => isMountedRef.current, []);

    useEffect(() => {
        isMountedRef.current = true;
        return function cleanup() {
            isMountedRef.current = false;
        };
    }, []);

    return isMounted;
}

export default useIsMounted;
