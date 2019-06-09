import history from './history';

export const handleRedirect = (route, state) => {
  console.log(history);
  history.push(route, {...state})
}
