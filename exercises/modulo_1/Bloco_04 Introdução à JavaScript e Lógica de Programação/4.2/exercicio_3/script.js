let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let media;

for (let i = 0; i < numbers.length; i += 1){
  total += numbers[i]
  media = total / (i + 1);
}
console.log(media)