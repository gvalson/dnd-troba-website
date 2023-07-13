import { error } from '@sveltejs/kit'
import { readPostById } from '$lib/server/db';

export function load({ params }) {
    const post = readPostById(params.slug);
    if (!post) {
	throw error(404);
    }
    return { post };
}
