document.querySelectorAll(".lang-button").forEach(button => {
  button.addEventListener("click", () => {
    const langCode = button.dataset.lang;
    fetch(`/meowfacts?lang=${langCode}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("fact").textContent = data?.data?.[0] || "No fact found.";
      })
      .catch(err => console.error(err));
  });
});

document.querySelectorAll(".dict-lang").forEach(button => {
  button.addEventListener("click", () => {
    const langCode = button.dataset.lang;
    window.location.href=`/dict?lang=${langCode}`;
  });
});

async function getFact() {
  try {
    const res = await fetch('/meowfacts');
    const data = await res.json();
    document.getElementById('fact').innerText = data.data;
  } catch (err) {
    document.getElementById('fact').innerText = 'Failed to fetch a fact.';
    console.error(err);
  }
}

async function goDict(){
  window.location.href='/dict';
}

async function goBack(){
  window.location.href='/';
}