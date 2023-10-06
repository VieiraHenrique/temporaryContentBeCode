/* const fakeCallToAnAPI = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout ! :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeCallToAnAPI(
  "api/movies",
  // The callback if it's a success
  (msg) => {
    console.log("SUCCESS (1)");
    console.log(msg);
    fakeCallToAnAPI(
      "api/movies/7",
      // The callback if it's a success
      (msg) => {
        console.log("SUCCESS (2)");
        console.log(msg);
        fakeCallToAnAPI(
          "api/pictures/7",
          // The callback if it's a success
          (msg) => {
            console.log("SUCCESS (3)");
            console.log(msg);
          }, // The callback if there was an error
          (msg) => {
            console.log("ERROR (3)");
            console.log(msg);
          }
        );
      }, // The callback if there was an error
      (msg) => {
        console.log("ERROR (2)");
        console.log(msg);
      }
    );
  }, // The callback if there was an error
  (msg) => {
    console.log("ERROR (1)");
    console.log(msg);
  }
);
 */

const fakeCallToAnAPIPromises = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout ! :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeCallToAnAPIPromises("api/movies")
  .then((msg) => {
    console.log("SUCCESS (1)");
    console.log(msg);
    return fakeCallToAnAPIPromises("api/movies/7");
  })
  .then((msg) => {
    console.log("SUCCESS (2)");
    console.log(msg);
    return fakeCallToAnAPIPromises("api/pictures/7");
  })
  .then((msg) => {
    console.log("SUCCESS (3)");
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
