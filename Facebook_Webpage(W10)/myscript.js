// document.addEventListener('DOMContentLoaded', function() {
//     const postForm = document.getElementById('post-form');
//     const postText = document.getElementById('post-text');
//     const postsContainer = document.getElementById('posts-container');

//     postForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const text = postText.value;
//         if (text.trim() !== '') {
//             createPost(text);
//             postText.value = '';
//         }
//     });

//     function createPost(text) {
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');
//         postDiv.textContent = text;
//         postsContainer.prepend(postDiv);
//     }
// });
