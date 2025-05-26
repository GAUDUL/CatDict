const params = new URLSearchParams(window.location.search);
const lang = params.get("lang");
let page = 0;
const factsPerPage = 2;

document.addEventListener("DOMContentLoaded", () => {
  if (lang) {
    getDict();
    setupPagination();
  }
});

function setupPagination() {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  if(prevButton) {
     prevButton.addEventListener("click", () => {
      if(page > 0) {
        page--
        getDict();
      }
     })
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      page++;
      getDict();
    });
  }
}

async function getDict() {
  try {
    const startID = page * factsPerPage + 1;
    const ids = Array.from({ length: factsPerPage }, (_, i) => startID + i);
    const Facts = [];

    for (const id of ids) {
      const res = await fetch(`/meowfacts?id=${id}&lang=${lang}`);
      const json = await res.json();
      if (json.data?.[0]) {
        Facts.push(json.data[0]);
      }
    }

    const factsContainer = document.getElementById("facts");
    factsContainer.innerHTML = "";

    Facts.forEach(fact => {
      const div = document.createElement("div");
      div.textContent = fact;
      factsContainer.appendChild(div);
    });
    
  } catch (err) {
    console.error("Error fetching facts:", err);
  }
}