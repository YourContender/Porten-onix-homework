export class Request {
  api = 'https://629fcf1a202ceef70860a4bd.mockapi.io/items';

  getData = async () => {
    const response = await fetch(this.api);
    return await response.json();
  };

  addNewItem = async ({
    title, price, description, url, currency, country, id, order, active 
  }) => {
    const response = await fetch(this.api, {
      method: 'POST',
      body: JSON.stringify({
        title,
        price,
        description,
        url,
        currency,
        country,
        id,
        order,
        active
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });   
    return await response.json();     
  };

  deleteItem = async (array, id) => {
    const newListItems = array.filter((item) => item.id !== id);

    const res = await fetch(`${this.api}/${id}`, {
      method: 'DELETE'
    });

    if (res.status === 200) {
      return await newListItems;
    }
  };
}
