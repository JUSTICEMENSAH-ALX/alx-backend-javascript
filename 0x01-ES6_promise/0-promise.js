function getResponseFromAPI() {
  // function code here
}

function getResponseFromAPIWithPromise() {
  return new Promise((resolve, reject) => {
    try {
      const response = getResponseFromAPI();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}

