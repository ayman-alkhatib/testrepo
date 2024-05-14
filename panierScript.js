const books = [{
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.9,
    url: "The_Great_Gatsby_Cover_1925_Retouched.jpg"
},
{
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.50",
    url: "To_kill_a_Mockingbird.jpg"
},
{
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    url: "1984-Big-Brother.jpg"
},
{
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 11.2,
    url: "The_Catcher_in_the_Rye.jpg"
},
{
    id: 5,
    title: "Animal Farm",
    author: "George Orwell",
    price: 8.99,
    url: "Animal_Farm.jpg"
},
{
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 10.75,
    url: "BraveNewWorld.jpg"
},
{
    id: 7,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    price: 13.25,
    url: "The_Grapes_of_Wrath.jpg"
},
{
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 15.90,
    url: "the_lord-of-the-rings.png"
},
{
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 9.50,
    url: "The_Hobbit.jpg"
},
{
    id: 10,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8.75,
    url: "PrideAndPrejudice.jpg"
}
]

books.forEach((bookObj) => {
    let myMainElement = document.querySelector(".books")
    let book = document.createElement("li")
    let img = document.createElement("img")
    let title = document.createElement("h3");
    let author = document.createElement("div")
    let price = document.createElement("div");

    // Add the link of the img
    img.src = `./images/books-images/${bookObj.url}`

    // Add book title
    title.append(bookObj.title);

    //add author name
    author.append(bookObj.author)

    // Add price Text
    price.append(`$${bookObj.price}`);



    // Add img to book
    book.append(img)

    // Add title To book
    book.appendChild(title);

    // Add price To book
    book.appendChild(price);


    // Add author to book
    book.appendChild(author)
    // Add id to book bookObj
    book.id = bookObj.id;

    myMainElement.appendChild(book)



})