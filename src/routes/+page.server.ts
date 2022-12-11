import { CONTENTFUL_SPACE } from '$env/static/private';
import { CONTENTFUL_DELIVERY_TOKEN } from '$env/static/private';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data: webTools } = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`
			},
			body: JSON.stringify({
				query: `query {
                    webToolCollection(limit: 20, order: title_ASC) {
                        items {
                            title
                            link
                            logo {
                                url
                                title
                            }
                        }
                    }
                }`
			})
		}
	).then((res) => res.json());
    const { data: services } = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`
			},
			body: JSON.stringify({
				query: `query {
                    serviceCollection(limit: 5, order: sort_ASC) {
                        items {
                            title
                            subTitle
                            content
                            icon
                            button
                        }
                    }
                }`
			})
		}
	).then((res) => res.json());

    return {
        webTools: webTools?.webToolCollection?.items,
        services: services?.serviceCollection?.items
    }
}) satisfies PageServerLoad;
