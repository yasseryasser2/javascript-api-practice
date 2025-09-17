// fetch("https://dummyjson.com/products/1", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "iphone 19",
//     description: "Change to iphone 19",
//     price: "1000",
//     rating: "9/10",
//   }),
// })
//   .then((respone) => respone.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const getAllProducts = async () => {
  try {
    const respone = await fetch("https://dummyjson.com/products/");
    const json = await respone.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getAllProducts();
