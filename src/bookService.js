const baseUrl = 'http://localhost:3001/data' // 'https://www.googleapis.com/books/v1/volumes?q=programming';

async function fetchBooks() {
    const response = await fetch(baseUrl);
    return await response.json();
}

export { fetchBooks }