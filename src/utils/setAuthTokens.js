import axios from "axios";

const setAuthTokens = token => {
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};

export default setAuthTokens;
