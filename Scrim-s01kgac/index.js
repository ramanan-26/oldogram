const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSection = document.getElementById('posts-section')

let newPost;
for(let i = 0; i < 3; i++){
    let post = posts[i]
    newPost = 
    `<div class= 'post'>

      <div class='post-header'>
        <img src='${post.avatar}' class='avatar' />
        <div class="typo">
            <h5>${post.name}</h5>
            <p>${post.location}</p>
        </div>
       </div>

       <div class='post-main'>
         <img src='${post.post}' class='image' />
       </div>
    </div>`
    postSection.innerHTML += newPost

}
console.log(postSection)
console.log(postSection)


