// Takes a hash; 
// creates an array of its keys (optionally weighted, if a weight parameter exists);
// selects a random key from that weighted array; then
// returns that key's value.

export const randomValFrom = (hash) => {
  const arrayedHash = Object.entries(hash);

  const weightedHashKeys = arrayedHash.reduce((accumulator, entry) => {
    let i = 0;
    while (i < (entry[1].weight ? entry[1].weight : 1)) {
      accumulator.push(entry[0]);
      i++;
    }
    return accumulator;
  }, []);

  const randomIndex = Math.floor(Math.random() * weightedHashKeys.length);
  return hash[weightedHashKeys[randomIndex]];
};
