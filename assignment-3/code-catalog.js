async function postBook(title, name, url, price) {
    const book = {
        title: title,
        author: name,
        coverImageUrl: url,
        price: parseFloat(price)
    }

    const response = await fetch("https://assignment3.rohanhussain.com/api/books/27100288", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book)
    })

    const data = await response.json();
    console.log(data);
}

async function getBooks() {
    const response = await fetch("https://assignment3.rohanhussain.com/api/books/27100288");
    const data = await response.json();

    const booksDiv = document.getElementById("books-list");
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


getBooks();
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", async() => {
    const name = document.getElementById("new-title");
    const nameValue = name.value;
    const author = document.getElementById("new-author");
    const authorValue = author.value;
    const url = document.getElementById("new-url");
    const urlValue = url.value;
    const price = document.getElementById("new-price");
    const priceValue = price.value;

    await postBook(nameValue, authorValue, urlValue, priceValue);

    name.value = "";
    author.value = "";
    url.value = "";
    price.value = "";

    getBooks();
});
