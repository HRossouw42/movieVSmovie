// API KEY
// 32c267b5

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: { apikey: "32c267b5", s: searchTerm },
  });
  return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

// ensure that whenever input is detected, it is run through the debounce shield -> which runs onInput
input.addEventListener("input", debounce(onInput, 500));
