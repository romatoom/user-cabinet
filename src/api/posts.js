const API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async () => {
  const resp = await fetch(`${API_URL}/posts`);
  return resp.json();
};

export {
  getPosts
}
