
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

document.querySelectorAll(".lang-button").forEach(button => {
  button.addEventListener("click", () => {
    const langCode = button.dataset.lang;  // ex: "kor", "esp", "eng-us" 등
    fetch(`/meowfacts?lang=${langCode}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // 받아온 고양이 사실 데이터로 UI 업데이트
      })
      .catch(err => console.error(err));
  });
});