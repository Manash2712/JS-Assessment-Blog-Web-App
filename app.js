const API_URL = "https://jsonplaceholder.typicode.com/posts";

const cardsContainer = document.querySelector('.cards-container');

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const addBlogForm = document.querySelector(".add-blog-form");

const blogTitle = document.querySelector("#blogTitle");
const blogBody = document.querySelector("#blogBody");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const userBlogs = []
let blogId = 101;

const displayBlogs = ({ title, body, id }) => {
    const divOuter = document.createElement('div');
    const divInner = document.createElement('div');
    const divButton = document.createElement('div');
    const titleHeading = document.createElement('h3');
    const bodyPara = document.createElement('p');
    const delButton = document.createElement('button');
    divOuter.setAttribute('id', `${id}`)
    divOuter.classList = "p-4 lg:w-1/3 w-full relative";
    divInner.classList = 'h-full w-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'
    divButton.classList = 'right-6 top-6 absolute flex justify-end z-10 align-middle'
    delButton.classList = 'px-4 py-2 bg-slate-500 rounded h-10 delete-blog'
    titleHeading.classList = 'title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'
    bodyPara.classList = 'leading-relaxed mb-3'
    titleHeading.innerText = `${title}`
    bodyPara.innerText = `${body}`
    delButton.innerText = 'Delete'
    divButton.appendChild(delButton)
    divOuter.appendChild(divInner)
    divOuter.appendChild(divButton)
    divInner.appendChild(titleHeading)
    divInner.appendChild(bodyPara)
    cardsContainer.appendChild(divOuter)


}

const deleteBlog = () => {
    const deleteBtn = document.querySelectorAll('.delete-blog')
    // console.log(deleteBtn);
    deleteBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            // console.log(e.target.parentNode.parentNode);
            // console.log('clicked delete');
            // e.target.remove()
            e.target.parentNode.parentNode.remove()
        })
    })
}

const getData = async (API_URL) => {
    const response = await fetch(API_URL);

    const data = await response.json();

    // console.log(data);

    data.forEach(element => {
        displayBlogs(element);
    });

    deleteBlog();

}


const addNewBlog = () => {
    // console.log('clicked');
    addBlogForm.classList.toggle("hidden")
}

const closeForm = () => {
    addBlogForm.classList.toggle("hidden")
}

const saveBlog = () => {
    const userBlog = {};
    userBlog.title = blogTitle.value.trim()
    userBlog.body = blogBody.value.trim();
    userBlog.id = blogId++;

    if (userBlog.title === "" || userBlog.body === "") {
        alert("Title or Body can't be empty")
        return
    }

    // console.log(blogTitle.value);
    // console.log(blogBody.value.trim());
    // console.log(userBlog);

    userBlogs.push(userBlog)

    // console.log(userBlogs);

    // console.log('clicked');
    addBlogForm.classList.toggle("hidden")
    displayBlogs(userBlogs[0]);
    deleteBlog();
}

// const deleteBtn = document.querySelector('.delete-blog')
// // console.log(deleteBtn);

// if (deleteBtn !== null) {
//     deleteBtn.addEventListener('click', (e) => {
//         console.log('clicekd delete');
//         e.target.remove()
//     })
// }



getData(API_URL);


// console.log(data);

// renderCards(data);