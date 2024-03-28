
import React from 'react';

// SVG 아이콘 컴포넌트 생성
const Logo = ({ width, height, color1, color2 }) => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width={width} height={height} viewBox="0 0 341.000000 341.000000"
 preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,341.000000) scale(0.100000,-0.100000)"
     stroke="none">
        <path d="M1449 3385 c-255 -41 -476 -128 -687 -268 -373 -249 -626 -625 -724
        -1077 -19 -91 -22 -135 -23 -330 0 -251 9 -320 71 -517 l35 -113 52 43 c67 54
        156 109 244 148 101 47 428 152 594 193 402 98 559 200 559 365 0 97 -40 146
        -280 346 -155 130 -193 181 -198 271 -4 55 0 72 23 120 123 251 678 569 1168
        669 l112 23 -47 20 c-73 32 -204 72 -308 94 -126 26 -464 34 -591 13z" fill={color1}/>
        <path d="M2360 3130 c-323 -108 -612 -253 -668 -334 -89 -130 92 -311 462
        -460 219 -88 384 -239 474 -434 66 -142 7 -281 -169 -398 -87 -57 -171 -93
        -314 -134 -398 -113 -599 -367 -597 -755 0 -210 68 -384 205 -531 l71 -76 70
        6 c224 21 523 123 710 244 154 99 326 251 426 377 477 601 503 1431 62 2055
        -119 169 -344 376 -512 473 l-45 26 -175 -59z" fill={color2}/>
    </g>
</svg>);

export default Logo;