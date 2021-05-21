// #region Local Imports
import { LayoutProps } from './Layout';
// #endregion Local Imports

function Layout({ children }: LayoutProps): JSX.Element {
    return <div className="layout">{children}</div>;
}

export default Layout;
