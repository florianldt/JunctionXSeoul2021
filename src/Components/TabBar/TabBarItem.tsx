import classNames from 'classnames';
import Link from 'next/Link';
import ITabBarItem from './TabBarItem.d';

function TabBarItem({
    icon: Icon,
    href,
    label,
    selected,
}: ITabBarItem.IProps): JSX.Element {
    const tabBarItemClasses = classNames(
        'flex flex-1 items-center justify-center',
        selected ? 'text-blue-400' : 'text-gray-400',
    );

    return (
        <li className={tabBarItemClasses}>
            <Link href={href}>
                <a>
                    <div>
                        <div>
                            <Icon className="mx-auto" />
                        </div>
                        <p className="pt-1" style={{ fontSize: 10 }}>
                            {label}
                        </p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default TabBarItem;
