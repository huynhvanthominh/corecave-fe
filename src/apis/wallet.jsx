import axios from 'axios';

async function loginBySign(address, sign) {
  return axios.post("auth/wallet_login", {
    address,
    sign,
  });
};

async function getNonce(address) {
  return axios.post("users/nonce", {
    address,
  });
};

async function getMe() {
  return axios.post("auth/me");
}

async function profile(id) {
  return axios.get("users/" + id);
}

async function users(page, size) {
  return axios.get("users", {
    params: {
      page,
      size,
    }
  });
}
  
async function updateProfile(body, id) {
  return axios.patch("users/" + id, body);
}

const walletAPI = {
  users,
  getNonce,
  loginBySign,
  getMe,
  profile,
  updateProfile
}

export default walletAPI
