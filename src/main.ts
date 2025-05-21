interface NameInterface {
  name: string,
  lastName: string,
}

const getName = ( options: NameInterface ) => {
  return {
    ...options
  }
}

const options: NameInterface = {
  name: 'USER_NAME',
  lastName: 'USER_LASTNAME',
}

console.log(
  'TEST GET NAME: ', getName(options),
);
