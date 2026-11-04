/** Minimal SVG icon components (heroicon names used by the original bundle). */
const icon = (paths) => ({
    name: 'SvgIcon',
    props: { strokeWidth: { type: Number, default: 1.5 } },
    render() {
        return h(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24',
              'stroke-width': this.strokeWidth, stroke: 'currentColor', class: 'w-5 h-5' },
            paths.map((d) => h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d })),
        );
    },
});

import { h } from 'vue';

export const CheckCircleIcon = icon(['M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z']);
export const ExclamationCircleIcon = icon(['M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z']);
export const XCircleIcon = icon(['M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z']);
export const InformationCircleIcon = icon(['M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z']);
export const XMarkIcon = icon(['M6 18L18 6M6 6l12 12']);
export const EllipsisVerticalIcon = icon(['M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z']);
