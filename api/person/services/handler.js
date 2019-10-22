import test from "../../../lib/test";

export const hello = async (event, context) => {
  const someText = test();
  return {
    statusCode: 200,
    body: someText
  };
};
