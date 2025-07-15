async function searchBook(query) {
    const response = await fetch(`https://assignment3.rohanhussain.com/api/books/27100288/search?query=${(query)}`);

    const data = await response.json();
    const booksDiv = document.getElementById("search-list");
    booksDiv.innerHTML = "";

    data.result.books.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const img = document.createElement("img");
        img.src = element.coverImageUrl;
        img.classList.add("book-cover");

        const title = document.createElement("h3");
        title.innerText = element.title;

        const author = document.createElement("p");
        author.innerText = `Author: ${element.author}`;

        const price = document.createElement("p");
        price.innerText = `Price: $${element.price}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(price);

        booksDiv.appendChild(card);
    });
    console.log(data);
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async() => {
    const queryInput = document.getElementById("search-input");
    const query = queryInput.value;
    queryInput.value = "";

    searchBook(query);
})