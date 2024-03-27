const API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async () => {
  const resp = await fetch(`${API_URL}/posts`);
  return resp.json();
};

const deletePost = async (postID) => {
  return fetch(`${API_URL}/posts/${postID}`, {
    method: "DELETE",
  });
};

export { getPosts, deletePost };
