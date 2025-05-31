import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://gdsurge.omgrod.me',
	base: '/',
	integrations: [
		starlight({
			title: 'GD Surge',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/OmgRod/GD-Surge',
				},
			],
			pagefind: false,
		}),
	],
});