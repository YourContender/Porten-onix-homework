export class request {
    api = 'https://629fcf1a202ceef70860a4bd.mockapi.io/items';

    getData = async() => {
        const response = await fetch(this.api);
        return await response.json();
    }

    addNewItem = async(prod) => {
        const response = await fetch(this.api, {
            method: 'POST',
            body: JSON.stringify({
                title: prod.title,
                price: prod.price,
                description: prod.description,
                url: prod.url,
                currency: prod.currency,
                country: prod.country,
                id: prod.id,
                order: prod.order,
                active: false
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   
        return await response.json();     
    }
}
