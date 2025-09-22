// Simple test function
exports.handler = async (event, context) => {
  console.log("Simple test function invoked!");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from the test function!" }),
    headers: { 'Content-Type': 'application/json' },
  };
};