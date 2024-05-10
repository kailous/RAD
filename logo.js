class MySvgIcon extends HTMLElement {
    constructor() {
        super(); // 调用父类的constructor
        const shadow = this.attachShadow({mode: 'open'}); // 开启Shadow DOM
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100px; // 默认宽度，可通过CSS调整
                    height: auto;
                }
                svg {
                    width: 100%;
                    height: 100%;
                }
                :host([mode="light"]) path {
                    fill: black; /* 亮色模式下的填充颜色 */
                }
                :host([mode="dark"]) path {
                    fill: white; /* 暗色模式下的填充颜色 */
                }
                @media (prefers-color-scheme: dark) {
                    :host(:not([mode])) path {
                        fill: white; /* 如果没有指定模式属性，但系统是暗色模式 */
                    }
                }
                @media (prefers-color-scheme: light) {
                    :host(:not([mode])) path {
                        fill: black; /* 如果没有指定模式属性，但系统是亮色模式 */
                    }
                }
            </style>
            <svg width="1000" height="482" viewBox="0 0 1000 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.67029e-05V482H40V278H173.953L268.681 482H312.01L369.443 346.5H612.776L671.544 482H758.893C759.376 482 759.842 482 760.293 482C765.568 482 768.742 481.994 771.511 481.923C896.034 478.723 996.223 378.534 999.423 254.011C999.5 251.003 999.5 247.519 999.5 241.384V240.616C999.5 234.481 999.5 230.997 999.423 227.989C996.223 103.466 896.034 3.27701 771.511 0.0772429C768.504 -2.67029e-05 765.021 -7.62939e-06 758.887 2.47955e-05L612.5 2.67029e-05V245.335L506.096 0H472.864L289.666 432.217L218.034 277.956C293.169 276.081 353.5 214.586 353.5 139C353.5 62.2324 291.268 2.67029e-05 214.5 2.67029e-05H0ZM313.5 139C313.5 193.676 269.176 238 214.5 238H40V40H214.5C269.176 40 313.5 84.3238 313.5 139ZM595.428 306.5H386.397L489.711 62.7511L595.428 306.5ZM697.795 442L652.5 337.563V40H758.5C765.124 40 768.057 40.0017 770.483 40.064C873.72 42.7168 956.783 125.78 959.436 229.017C959.498 231.443 959.5 234.376 959.5 241C959.5 247.624 959.498 250.557 959.436 252.983C956.783 356.22 873.72 439.283 770.483 441.936C768.057 441.998 765.124 442 758.5 442H697.795Z" />
            </svg>
        `;
    }
}

// 定义元素
customElements.define('my-svg-icon', MySvgIcon);
