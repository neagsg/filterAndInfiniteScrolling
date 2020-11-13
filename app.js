const postsContainer = document.querySelector('#posts-container');
let page = 1;

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
  return response.json();
}

const addPostIntoDom = async () => {
  const posts = await getPost();
  const postsTemplate = posts.map(post => `
    <div class="post">
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    </div>    
  `).join('');

  postsContainer.innerHTML += postsTemplate;
  // console.log(postsTemplate);
}

addPostIntoDom();
