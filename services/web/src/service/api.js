import request from "../utils/request";
const serverLoaction = "http://localhost:8888";

async function requestHotelInfo() {
  return request(`${serverLoaction}/api/hotels/venetian`);
}

async function requestHotelsList() {
  return request(`${serverLoaction}/api/hotels/`);
}

export { requestHotelInfo, requestHotelsList };
