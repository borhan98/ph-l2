// nullable
const getUser = (user: string | null) => {
  if (user) {
    console.log("User from DB:", user);
  } else {
    console.log("No User");
  }
}

getUser(null);


// unknown
const getDiscountPrice = (amount: unknown) => {
  const percentage = 0.1;

  if (typeof amount === 'number') {
    console.log('Price after discount:', amount - (amount * percentage));
    return;
  }

  if (typeof amount === 'string') {
    const amountNum = Number(amount);
    if (Number.isNaN(amountNum)) {
      console.log("Please provide correct amount number");
    } else {
      console.log('Price after discount:', amountNum - (amountNum * percentage));
    }
  }
}

getDiscountPrice(100);
getDiscountPrice('100');
getDiscountPrice('nope');


// never

const throwErr = (msg: string) => {
  throw new Error(msg);
}

throwErr('Error message...!') // this function will never return anything, that's why the function type is never. We define the type like (msg: string): never