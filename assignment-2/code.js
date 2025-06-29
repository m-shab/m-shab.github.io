const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
    const input = document.getElementById("question-input");
    const newQuestion = input.value;

    console.log("New Question:", newQuestion);

    const newLi = document.createElement("li");
    newLi.innerText = newQuestion;
    newLi.setAttribute("id", "new-question");
    newLi.classList.add("question-item");

    const optionList = document.createElement("ul");
    optionList.setAttribute("class", "options-list");
    optionList.style.listStyleType = "none";
    
    for (let x = 1; x <= 4; x++)
    {
        const optionLi = document.createElement("li");
        optionLi.setAttribute("class", "option-item");
        const option = document.createElement("input");
        const name = "Add Option" + " " + x;
        console.log(name);

        option.placeholder = name;
        option.classList.add("option");
        option.setAttribute("type", "text");

        const optionButton = document.createElement("button");
        optionButton.classList.add("ad-button");
        optionButton.setAttribute("id", "option-button");
        optionButton.setAttribute("type", "button");
        optionButton.innerText = "⊞";

        optionLi.appendChild(option);
        optionLi.appendChild(optionButton);

        optionList.appendChild(optionLi);

        optionButton.addEventListener("click", () => {
            const optionText = option.value;

            optionLi.innerText = "";
            const radioButton = document.createElement("input");
            radioButton.setAttribute("type", "radio");
            radioButton.setAttribute("class", "radio-button");
            radioButton.setAttribute("name", "radioButton");
            optionLi.classList.add("no-border");

            const text = document.createElement("label");
            text.innerText = optionText;

            optionLi.appendChild(radioButton);
            optionLi.appendChild(text);



        })
    }

    newLi.appendChild(optionList);

    const deleteDiv = document.createElement("div");
    const newDeleteButton = document.createElement("button");
    const image = document.createElement("img");
    image.src = "bin.png";
    newDeleteButton.innerText = "Delete";
    newDeleteButton.classList.add("delete-button");
    newDeleteButton.setAttribute("type", "button");
    deleteDiv.setAttribute("class", "delete-div");

    deleteDiv.appendChild(image);
    deleteDiv.appendChild(newDeleteButton);
    

    newDeleteButton.addEventListener("click", () => {
        newLi.remove();
    })

    newLi.appendChild(deleteDiv);

    const ul = document.querySelector("#questions-list");

    ul.appendChild(newLi);
    input.value = "";   

})