import { createNewPost } from '$lib/server/db';
import type { Actions } from './$types';
import { error } from '@sveltejs/kit';

export async function load() {
    // Put the "Editing" functionality here.
    return {};
}

export const actions: Actions = {
  createPost: async ({ request }) => {
    const data = await request.formData();
    const date = new Date();
    const dateString = date.toLocaleString('ka-GE')
    const title = data.get('title')?.toString();
    const htmlContent = data.get('htmlContent')?.toString();

    if (!title) {
      throw error(500);
    }

    createNewPost(dateString, title, htmlContent);
  },
};
