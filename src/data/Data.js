import postFiles from "./posts";

const translationsById = postFiles.reduce((posts, post) => {
  posts[post.id] = {
    ...posts[post.id],
    [post.language]: post,
  };
  return posts;
}, {});

const posts = Object.entries(translationsById).map(([id, translations]) => ({
  ...translations.en,
  id,
  translations,
}));

export const getPosts = () => posts;

export const getPost = (id) => posts.find((post) => post.id === id);
