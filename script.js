const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;
      if (preHeatOven) {
        resolve("Preheat oven to 180 deg");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;
      if (addChoco) {
        resolve(
          "Place butter and choclate chips, stir until melted and smooth"
        );
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addFlourCocoAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = true;
      if (addSaltFlour) {
        resolve("Add flour, coco and salt and stir untill smooth");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;
      if (preHeatOven) {
        resolve("Bake for 24 minutes for really gooey center");
      } else {
        reject("failed task");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy Your brownies!");
  } catch (error) {
    console.log(error);
  }
};

bakeChocolateBrownies();
