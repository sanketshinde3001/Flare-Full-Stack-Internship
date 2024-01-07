// Create an object book with properties title, author, and pages. Write a function isLongBook that takes a book object as a parameter and returns true if the number of pages is greater than 300, otherwise returns false. Use an if statement to log the result.

const book = {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    pages: 380
};
 

function isLongBook(obj) {
    if (obj.pages > 300) {
        return true;
    }
    return false;
}

if (isLongBook(book)) {
    console.log(book.title + " by " + book.author + " have pages greather than 300.")
}
else{
    console.log(book.title + " by " + book.author + " have pages lower than 300.") 
}