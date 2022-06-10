export class request {
    api = 'https://629fcf1a202ceef70860a4bd.mockapi.io/items';

    getData = async() => {
        const response = await fetch(this.api);
        return await response.json();
    }

    addNewItem = async({title, price, description, url, currency, country, id, order, active}) => {
        const response = await fetch(this.api, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                url: url,
                currency: currency,
                country: country,
                id: id,
                order: order,
                active: active
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   
        return await response.json();     
    }

    deleteItem = async(array, id) => {
        let newListItems = array.filter(item => item.id !== id);

        const res = await fetch(this.api + '/' + id, {
            method: 'DELETE'
        })

        if (res.status === 200) {
            return await newListItems;
        }
    }
}
