type factType = {
  text: string;
  type: string;
  deleted: boolean;
  _id: string;
};

const getRandomCatPicture = async () => {
  const resultApi = Promise.all([
    fetch("https://cat-fact.herokuapp.com/facts", {
      cache: "no-store",
    })
      .then((resp) => resp.json())
      .then((result) => result),
    fetch("https://shibe.online/api/cats?count=1", {
      cache: "no-store",
    })
      .then((resp) => resp.json())
      .then((result) => result),
  ]);
  return resultApi;
};
/* eslint-disable @next/next/no-img-element */

const RandomCatPicture = async () => {
  const pictureAndFacts = await getRandomCatPicture();
  const picture = pictureAndFacts.pop();
  const facts = pictureAndFacts.shift() as Array<factType>;
  return (
    <div className="flex text-center flex-col gap-5 items-center">
      <h1 className="text-4xl">
        Here is a random picture of the cat. Enjoy :)
      </h1>
      <img
        alt="Picture of the cat"
        src={picture}
        className="w-2/3 object-cover"
      />
      <h3 className="text-3xl text-orange-600">Cat facts:</h3>
      <div className="flex w-2/3 flex-col items-center gap-3 text-center">
        {facts.map((fact) => {
          return (
            <div className="text-xl" key={fact._id}>
              {fact.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomCatPicture;
