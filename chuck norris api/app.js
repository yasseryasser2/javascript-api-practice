const loadJoke = async () => {
  try {
    const chuckFetch = await fetch("https://api.chucknorris.io/jokes/random", {
      header: {
        Accept: "application/json",
      },
    });
    const JokesData = await chuckFetch.json();
    document.getElementById("loadingJoke").innerHTML = JokesData.value;
  } catch (error) {}
};

document.getElementById("loadJokeBtn").addEventListener("click", loadJoke);
