import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import getQueryUrl from '$lib/queries/url.js';

export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = getQueryUrl(gql, slug);

	// console.log(queryUrl);
	return await hygraph.request(queryUrl);
};