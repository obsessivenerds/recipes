/* API functions written with guidance from student Forrest Walker's
walk-through playlist at https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP */

class Helper {
  static baseURL() {
    return "https://api.edamam.com?"
  }

  static auth() {
    const keys = {
      app_id: "2bfcef39",
      app_key: "3e12aa025ad9a59db47e8e2127a38e37"
    };
    return Object.keys(keys)
    .map(key => `${key}=${keys[key]}`)
    .join("&");
  }
  static urlBuilder(urlParams) {
    if (!urlParams) {
      return "";
    }
    return Object.keys(urlParams)
    .map(key => `${key}=${urlParams[key]}`)
    .join("&");
  }
  static headers() {
    return {
      Accept: "application/json"
    };
  }
  static simpleFetch(endPoint, method, urlParams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlParams)}`, requestData)
      .then(res => res.json());
  }
}

export default class EdamamAPI {
  static search(urlParams) {
    return Helper.simpleFetch("/search", "GET", urlParams)
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET")
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
  }
}
