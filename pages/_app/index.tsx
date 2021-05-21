// #region Global Imports
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// #endregion Global Imports

// #region Local Imports
import { usePageView } from '@Hooks';
import theme from '@Definitions/Styled';
import '@Static/css/main.scss';
// #endregion Local Imports

/* eslint-disable react/jsx-props-no-spreading */
function App({ Component, pageProps }: AppProps): JSX.Element {
    usePageView();
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
/* eslint-enable react/jsx-props-no-spreading */

export default App;
