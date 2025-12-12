
import axios from "axios";

export function getData() {
  const URL = "https://jsonplaceholder.typicode.com/posts"; 

  return axios
    .get(URL)
    .then(res => res.data)
    .catch(err => {
      console.error("Axios Error:", err);
      throw err;
    });
}
