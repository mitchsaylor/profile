export const prerender = true;

import { PUBLIC_DOMAIN } from '$env/static/public';

import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
            <loc>${PUBLIC_DOMAIN}/</loc>
            <priority>1</priority>
        </url>
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}) satisfies RequestHandler;
