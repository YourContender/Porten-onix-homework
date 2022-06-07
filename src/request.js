export class request {
    getData = async() => {
        const response = await fetch('https://629fcf1a202ceef70860a4bd.mockapi.io/items');
        return await response.json();
    }
}
