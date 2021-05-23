declare namespace ITabBarItem {
    export interface IProps {
        icon: SVGProps<SVGSVGElement>;
        href: string;
        label: string;
        selected: boolean;
    }
}

export default ITabBarItem;
