'use strict';

exports.generateRandomNumber = async (event) => {
  const ramdomNumber = parseInt(Math.random() * 100);
  console.log("The random generated integer is: ", ramdomNumber);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ramdomNumber),
  };
};