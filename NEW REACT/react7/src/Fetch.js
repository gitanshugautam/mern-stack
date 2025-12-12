// src/Fetch.js

export function getData() {
  const URL = "https://jsonplaceholder.typicode.com/posts"; // 👉 apna URL yaha daalna

  return fetch(URL)
    .then(res => {
      if (!res.ok) {
        throw new Error("Network Error: " + res.status);
      }
      return res.json();
    });
}
