const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=programming';

async function fetchBooks() {
    const response = await fetch(baseUrl);
    return await response.json();
}

export { fetchBooks }