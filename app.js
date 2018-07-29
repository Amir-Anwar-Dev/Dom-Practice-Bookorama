/**
 * Delete Books
 */

var list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {

    if (e.target.className = "delete") {

        var li = e.target.parentElement;

        list.removeChild(li);

    }

});

/**
 * Add BtnS
*/

var addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {

    e.preventDefault();

    var value = addForm.querySelector('input[type="text"]').value;

    // create Elements
    var li = document.createElement("li");
    var bookName = document.createElement("span");
    var deleteBtn = document.createElement("span");


    // Append Elements
    list.appendChild(li);
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    // Add Classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // add Content
    deleteBtn.textContent = "Delete";
    bookName.textContent = value;

});

/* Hide Books */
var hide = document.querySelector("#hide");

hide.addEventListener("change", function (e) {

    if (hide.checked) {

        list.style.display = "none";

    } else {

        list.style.display = "block";

    }


});

/* Filter Books */
var searchBar = document.forms["search-books"].querySelector("input");

searchBar.addEventListener("keyup", function (e) {

    var
        term = e.target.value.toLowerCase(),
        books = list.getElementsByTagName("li");

    Array.from(books).forEach(function (book) {

        var title = book.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }



    });

});

/**
 * ToolBox
 * Colors
 */

var toolBox = document.querySelector(".main");
var colors = document.querySelectorAll("ul .color");


toolBox.onclick = function () {

    colors.forEach(function (color) {



        if (color.classList.contains("active")) {

        color.classList.remove("active");


        } else {

        color.classList.add("active");


        }

    })

}

colors.forEach(function (color) {

    color.addEventListener("click", function (e) {

        if (e.target.classList.contains("color")) {

            var wColor = e.target.getAttribute("data-color");
            var link = document.querySelector("#color");
            var cPath = "colors/" + wColor + ".css";
    
            link.setAttribute("href", cPath)
    
        }

    })


});
/*
colors.addEventListener("click", function (e) {



    if (e.target.classList.contains("color")) {

        var wColor = e.target.getAttribute("data-color");

        console.log(wColor);

    }



});
*/