const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  await delay(3000);
  return <div>Prostore</div>;
};

export default Homepage;
