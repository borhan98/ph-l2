// type assertion

const kgToGram = (value: any): string | number | undefined => {
  if(typeof value === 'number') {
    return value * 1000;
  } else if(typeof value === 'string') {
    const numberValue = Number(value);
    const isNumberValue = Number.isNaN(numberValue);

    if (!isNumberValue && numberValue) {
      return `'${numberValue} kg = ${numberValue * 1000}'`;
    }

    return 'Provide a valid number';
  }

  return undefined;
}

const res1 = kgToGram(4) as number;
console.log({res1});

const res2 = kgToGram('7 kg') as string;
console.log({res2});

type CustomError = {
  message: string;
}

try {
  // do something
} catch (err) {
  console.log((err as CustomError).message)
}