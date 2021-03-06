import * as React from 'react';

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={20}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8h5z" fill="#53BFF0" />
        </svg>
    );
}

export default SvgHome;
