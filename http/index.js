async function getTest() {
  const posts = (
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
  ).json();
  return posts;
}
