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

// printStars(6);

// Object, Variables, Functions, Methods, Control Flow (if)

const temperatureCalculator = (tempNum, tempOri, tempDest) => {
  const object = {
    C: {
      F: (9 / 5) * tempNum,
      K: 273.15 + tempNum,
    },
    F: {
      C: ((tempNum - 32) * 5) / 9,
      K: ((tempNum - 32) * 5) / 9 + 273.15,
    },
    K: {
      C: tempNum - 273.15,
      F: ((tempNum - 273.15) * 9) / 5 + 32,
    },
  };

  tempOri = tempOri.charAt(0).toUpperCase();
  tempDest = tempDest.charAt(0).toUpperCase();

  if (!object[tempOri][tempDest]) {
    throw new Error("Please check your parameters.");
  }

  console.log(`${object[tempOri][tempDest]} ${tempDest}`);
};

// temperatureCalculator(89, "f", "k");

// Destructuring

const arrayReverse = (array) => {
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    [left, right] = [array[i], array[length - 1 - i]];
    let temp = left;
    left = right;
    right = temp;
    [array[i], array[length - 1 - i]] = [left, right]
  }
  return array;
};

console.log(arrayReverse([2, 3, 4, 5, 6, 7]));
