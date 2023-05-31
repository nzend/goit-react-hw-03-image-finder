import axios from 'axios';

const options = {
  baseUrl: 'https://pixabay.com/api/',
  key: '35630597-0391cfe0949186f41cbd4414f',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  order: 'popular',
  page: 1,
  per_page: '12',
};

export default async function fetchCards(searchImg, currentPage, perPage) {
  const {
    baseUrl,
    key,
    image_type,
    orientation,
    safesearch,
    order,
    page,
    per_page,
  } = options;

  const response = await axios.get(
    `${baseUrl}?key=${key}&q=${searchImg}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&order=${order}&page=${currentPage}&per_page=${perPage}`
  );
  const results = response.data;
  return results;
}
