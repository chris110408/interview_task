/**
 * Created by leichen on 12/02/2018.
 */
import request from "../utils/request";

export async function requestInitUser() {
  return request("http://localhost:8080/api/users");
}

export async function requestMockCustomers() {
  return request("http://localhost:8080/api/mock_customers");
}

export async function requestCustomers() {
  return request("http://localhost:8080/api/customers");
}

export async function updateCustomer(params) {
  const { id, ...restParams } = params;

  return request(`http://localhost:8080/api/customers/${id}`, {
    method: "PUT",
    body: {
      ...restParams
    }
  });
}

export async function removeCustomer(id) {
  return request(`http://localhost:8080/api/customers/${id}`, {
    method: "DELETE"
  });
}

export async function addCustomer(params) {
  return request(`http://localhost:8080/api/customers`, {
    method: "POST",
    body: {
      ...params
    }
  });
}
