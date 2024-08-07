const DEFAULT_NOTIFICATION_OPTIONS = [
	{ value: 'text', label: 'Text', icon: 'CircleAlert' },
	{ value: 'page', label: 'Page', icon: 'StickyNote' },
	{ value: 'url', label: 'URL', icon: 'ExternalLink' },
	{ value: 'document', label: 'Document', icon: 'Database' },
]

export const NOTIFICATION_OPTIONS = {
	default: DEFAULT_NOTIFICATION_OPTIONS,
	shopify: [
		...DEFAULT_NOTIFICATION_OPTIONS,
		{
			value: 'shopify_collection',
			label: 'Shopify List',
			icon: 'ShoppingCart',
		},
		{ value: 'shopify_product', label: 'Shopify Product', icon: 'TShirt' },
	],
}
