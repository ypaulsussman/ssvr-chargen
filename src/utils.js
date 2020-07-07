export const randomValFrom = (hash) => {
  const arrayedHash = Object.entries(hash);

  // If a given entry has a weight:Integer, then add its key to the array that many times;
  // otherwise, add its key once.
  const weightedHashKeys = arrayedHash.reduce((accumulator, entry) => {
    let i = 0;
    while (i < (entry[1].weight ? entry[1].weight : 1)) {
      accumulator.push(entry[0]);
      i++;
    }
    return accumulator;
  }, []);

  // Select a random key from that weighted array,
  // then pull that key's value from the hash
  const randomIndex = Math.floor(Math.random() * weightedHashKeys.length);
  return hash[weightedHashKeys[randomIndex]];
};
