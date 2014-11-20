//ask user for number of suggestions
var num = parseInt(process.argv[2]);

//stores list 1
var list1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"]

//stores list 2
var list2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"]

//loops combinations however many times user inputs
for (var i = 0; i < num; i++) {
  //makes variables for random indexes of each list
  var x = Math.floor(Math.random() * list1.length)
  var y = Math.floor(Math.random() * list2.length)

  //combines the random words from each list into one value
  var finalList = list1[x] + " " + list2[y];

  //prints final list
  console.log(finalList);
}
