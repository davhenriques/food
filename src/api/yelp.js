import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer udWdvaDdTSD5jf3y50cEWAvJvfCTFQyHclmSypOnzlwcqkponp8FIaqDbZRCFrBy3VFwInnt_PRujNanS0-jWKwkWQFSgNlNl2evmxb6qo_nZjf5DFVo0j5M248mYnYx",
  },
});
