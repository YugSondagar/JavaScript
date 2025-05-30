const input = document.getElementById("user-input");
const card = document.getElementById("user-card");

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      card.style.display = "block"; 
      card.innerHTML = `
        <img src="${user.picture.large}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
      `;
    });
}

const debounceFetch = debounce(fetchUser, 500);

input.addEventListener("input", debounceFetch);
