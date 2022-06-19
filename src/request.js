export default class Request {
  api = 'https://629fcf1a202ceef70860a4bd.mockapi.io/items';

  getData = async () => {
    const response = await fetch(this.api);
    const body = await response.json();
    return body;
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
    const body = await response.json();  
    
    return body;
  };

  deleteItem = async (array, id) => {
    const newListItems = array.filter((item) => item.id !== id);

    const res = await fetch(`${this.api}/${id}`, {
      method: 'DELETE'
    });

    if (res.status === 200) {
      const result = await newListItems;
      return result;
    } 
    return array;
  };
}
