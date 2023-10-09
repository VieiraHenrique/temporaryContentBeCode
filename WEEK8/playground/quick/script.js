const fetchData = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  console.log(data);
};

fetchData();
