/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sum=0;

for (let i=0; i<preferences.length;i++) {
  if (preferences [preferences[preferences[i]-1]-1] == (i+1) && preferences[i]!=(i+1)) {
    sum=sum+1;
  }
}
return sum/3
};
