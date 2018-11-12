export function loadRecipes() {
  let query = 'chicken';
  let app_id = "2bfcef39"
  let app_key= "3e12aa025ad9a59db47e8e2127a38e37"
  var apiURL = 'https://api.edamam.com/search?q=' + query + '&app_id=' + app_id + '&app_key=' + app_key + '&from=0&to=30';
  return fetch(apiURL).then(resp => resp.json()).catch(error => {
    alert('Edamame API Failed.')
  });
}
