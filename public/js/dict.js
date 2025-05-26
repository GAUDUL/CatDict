const params = new URLSearchParams(window.location.search);
const lang = params.get("lang");
let page = 0;
const factsPerPage = 2;

document.addEventListener("DOMContentLoaded", () => {
  if (lang) {
    getDict(page);
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
        getDict(page);
      }
     })
  }
  if (nextButton) {
    nextButton.addEventListener("click", async() => {
      const nextPage= page + 1;
      const hasData = await getDict(nextPage); 
      if(hasData) page = nextPage;
    });
  }

  document.addEventListener("keydown", async (event) => {
    if (event.key === "ArrowLeft" && page > 0) {
      page--;
      getDict(page);
    } else if (event.key === "ArrowRight") {
      const nextPage = page + 1;
      const hasData = await getDict(nextPage);
      if (hasData) page = nextPage;
    } else if (event.key === "Escape") {
      window.location.href = "/dict";
    }
  });
}

async function getDict(nextPage) {
  try {
    const startID = nextPage * factsPerPage + 1;
    const ids = Array.from({ length: factsPerPage }, (_, i) => startID + i);
    const Facts = [];

    for (const id of ids) {
      const res = await fetch(`/meowfacts?id=${id}&lang=${lang}`);
      const json = await res.json();
      if (json.data?.[0]) {
        Facts.push(json.data[0]);
      }
    }

    if(Facts.length === 0) return false;

    const factsContainer = document.getElementById("facts");
    factsContainer.innerHTML = "";

Facts.forEach((fact, index) => {
  const div = document.createElement("div");
  div.className = "fact-page";
  div.innerHTML = `
    <div class="page-number">Fact ${nextPage * factsPerPage + index + 1}</div>
    ${fact}
  `;
  factsContainer.appendChild(div);
});


    return true;
    
  } catch (err) {
    console.error("Error fetching facts:", err);
  }
}