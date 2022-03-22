const DESTINATIONS = [
  "https://en.wikipedia.org/wiki/Special:Random",
  "https://c.xkcd.com/random/comic/"
];

const STATUS_CODE = 303;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function handleRequest() {
  const randomIndex = getRandomInt(DESTINATIONS.length);
  const randomDestination = DESTINATIONS[randomIndex];

  return Response.redirect(randomDestination, STATUS_CODE);
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest());
});
