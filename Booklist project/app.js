// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const year = document.getElementById("year");
// const booklist =  document. getElementById("book-list");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//     e.preventDefault();

//      if (title.value == "" && author.value == "" && year.value == "") {
//        alert("Fill The form");
//     } else {
//        const newRow = document.createElement("section");

//        //creating new file
//        const newTitle = document.createElement("div");
//        newTitle.innerHtml = title.value;
//        newRow.appendChild(newTitle);

//        // creating new author
//        const newAuthor = document.createElement('div');
//        newAuthor.innerHTML = author.value;
//        newRow.append(newAuthor);
       
//        //creating new year
//        const newYear = document.createElement('div');
//        newYear.innerHtml = year.value;
//        newRow.appendChild(newYear);

//        booklist.appendChild(newRow);
//     }

// }); 



const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Validate the input fields
    if (title.value.trim() === "" || author.value.trim() === "" || year.value.trim() === "") {
        alert("Please fill out all the fields.");
        return; // Stop further execution
    }

    // Create a new row
    const newRow = document.createElement("section");

    // Add title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value.trim();
    newRow.appendChild(newTitle);

    // Add author
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value.trim();
    newRow.appendChild(newAuthor);

    // Add year
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value.trim();
    newRow.appendChild(newYear);

    // Append the new row to the book list
    booklist.appendChild(newRow);

    // Clear the input fields
    title.value = "";
    author.value = "";
    year.value = "";
});
