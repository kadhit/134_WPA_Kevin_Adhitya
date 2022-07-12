// async-await, try-catch, JSON, method, function

const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    console.log(data);

    // console.log(
    //   data.map((item) => `${item.name}, ${item.phone.split(" ")[0]}`).sort()
    // );
  } catch (error) {
    console.log(error);
  }
};

// fetchData();

const fetchDataById = async (id) => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    console.log(data.filter((item) => item.postId === id));
  } catch (error) {
    console.log(error);
  }
};

// fetchDataById(1);

// Nested for loops

const printStars = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n; j >= i; j--) {
      result += "  ";
    }
    for (let j = 1; j <= i; j++) {
      result += " *  ";
    }
    console.log(result);
  }
};

printStars(6);
