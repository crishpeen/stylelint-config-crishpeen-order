module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		'order/properties-order': [
			'content',

			'position',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',

			'display',
			'visibility',
			'opacity',
			'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-direction',
			'flex-flow',
			'flex-wrap',
			'grid',
			'grid-area',
			'grid-template',
			'grid-template-areas',
			'grid-template-rows',
			'grid-template-columns',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-auto-rows',
			'grid-auto-columns',
			'grid-auto-flow',
			'grid-gap',
			'grid-row-gap',
			'grid-column-gap',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'order',
			'float',
			'clear',
			'box-sizing',
			'object-fit',
			'width',
			'min-width',
			'max-width',
			'height',
			'min-height',
			'max-height',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'overflow',
			'overflow-x',
			'overflow-y',
			'resize',

			'font',
			'font-style',
			'font-weight',
			'font-size',
			'line-height',
			'font-family',
			'font-variant',
			'font-display',
			'src',
			'text-align',
			'text-decoration',
			'text-overflow',
			'text-shadow',
			'text-size-adjust',
			'text-transform',
			'white-space',
			'vertical-align',
			'list-style',
			'list-style-position',
			'list-style-type',
			'counter-increment',
			'counter-reset',

			'color',
			'border',
			'border-width',
			'border-style',
			'border-color',
			'border-top',
			'border-top-width',
			'border-top-style',
			'border-top-color',
			'border-right',
			'border-right-width',
			'border-right-style',
			'border-right-color',
			'border-bottom',
			'border-bottom-width',
			'border-bottom-style',
			'border-bottom-color',
			'border-left',
			'border-left-width',
			'border-left-style',
			'border-left-color',
			'border-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-collapse',
			'background',
			'background-image',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-size',
			'background-repeat',
			'background-attachment',
			'background-origin',
			'background-clip',
			'background-color',
			'outline',
			'box-shadow',

			'fill',
			'stroke',

			'filter',
			'transform',
			'transform-origin',

			'user-select',
			'pointer-events',
			'cursor',

			'scroll-behavior',
			'scroll-snap-align',
			'scroll-snap-stop',
			'scroll-snap-type',

			'transition',
			'transition-property',
			'transition-duration',
			'transition-timing-function',
			'transition-delay',
			'animation',
			'animation-name',
			'animation-duration',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'animation-fill-mode',
			'animation-play-state',
			'will-change',
		],
	},
};
