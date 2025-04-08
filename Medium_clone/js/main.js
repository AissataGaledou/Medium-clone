
fetch('data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-container');

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'blog-preview';
      div.innerHTML = `
       <img src="${post.image}" alt="${post.title}" class="blog-image" />
       <h2>${post.title}</h2>
       <p>${post.excerpt}</p>
       <a href="${post.link}">Read more →</a>`;
      container.appendChild(div);
    });
  });
