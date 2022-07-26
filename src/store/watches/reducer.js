import { GET_REQUEST } from './types';

const initState = {
  data: [{
    active: false,
    availability: 'true',
    country: 'Ukraine',
    currency: 'uah',
    description: 'Армейские наручные часы. Стальной корпус и циферблат модели сделаны в классическом стиле',
    id: '1',
    order: '1',
    price: '10000',
    title: 'AMST AM 3003 silver',
    url: 'https://img.klubok.com/img/used/2017/01/03/12016/12016353_6'
  }]
};

const viewWatches = (state = initState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export default viewWatches;
