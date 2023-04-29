// Your Code Here

async function returnBooks(){
    let response = await fetch("http://localhost:3001/listBooks", {
        method: "GET",
    })

    let books = await response.json()

    // console.log(books)

    console.log(books)

} // returnBooks() end

returnBooks()

// ==========================

async function updateBook(){
    let response = await fetch("http://localhost:3001/updateBook", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": 3,
            "title": "Legends of Arathrae",
        }),
    })

    let updatedBook = await response.json();
    console.log(updatedBook)

}// updateBook() end

updateBook()

// ==================

let first = 10
let second = 3
let third = 8
let fourth = 4

