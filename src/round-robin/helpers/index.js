export const createDecisions = function(data, decision) {
  let decisions = []
  for (const index in data) {
    if (index%2) {
      decisions = [
        ...decisions,
        new decision([data[index-1], data[index]])
      ];
    }
  }
  return decisions;
}


