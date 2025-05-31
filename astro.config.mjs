import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

export default defineConfig({
	integrations: [
		starlight({
			title: 'GD Surge',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OmgRod/GD-Surge' }],
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
			plugins: [catppuccin({
				dark: 'mocha',
				light: 'latte',
			})],
		}),
	],
});
