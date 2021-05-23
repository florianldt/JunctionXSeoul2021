import { useRouter } from 'next/router';
import { Analysis, Contact, Home, Settings } from '@Icons';
import TabBarItem from './TabBarItem';

function TabBar(): JSX.Element {
    const router = useRouter();
    return (
        <div className="right-0 bottom-0 left-0 h-14 absolute">
            <div className="h-px bg-gray-200" />
            <ul className="h-full flex">
                <TabBarItem
                    icon={Home}
                    href="/"
                    label="Home"
                    selected={router.pathname === '/'}
                />
                <TabBarItem
                    icon={Contact}
                    href="/contact"
                    label="Contact"
                    selected={router.pathname === '/contact'}
                />
                <TabBarItem
                    icon={Analysis}
                    href="/analysis"
                    label="Analysis"
                    selected={router.pathname === '/analysis'}
                />
                <TabBarItem
                    icon={Settings}
                    href="/settings"
                    label="Settings"
                    selected={router.pathname === '/settings'}
                />
            </ul>
        </div>
    );
}

export default TabBar;
