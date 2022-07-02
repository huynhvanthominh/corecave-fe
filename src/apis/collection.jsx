import axios from 'axios';

export async function collections(page, size, filter = {}) {
  return axios.get("collections", {
    params: {
      page,
      size,
      ...filter
    }
  });
}

export async function view(id) {
  return axios.get("collections/" + id);
}

export async function updateProfile(body, id) {
  return axios.patch("users/" + id, body);
}

export async function createCollection(payload) {
  return axios.post("collections", payload);
}
export async function collectionSales() {
  return axios.get("collections/sales");
}

export async function getByCreator(creatorId, chainId) {
  return axios.get(`collections/creator/${creatorId}/${chainId}`);
}

export async function getNfts(id) {
  return axios.get(`nfts/collection/${id}`);
}

export async function getSaleNfts(id) {
  return axios.get(`nfts/collection/sale/${id}`);
}
