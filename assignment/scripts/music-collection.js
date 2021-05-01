console.log('***** Music Collection *****')

let collection = []; // creates array variable collection

function addToCollection(title, artist, yearPublished,) { //start addToCollection function.
  console.log('In addToCollection');
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }//creates new object and grabs inputs
  collection.push(newAlbum);//adds newly made object to the end of collection array

  return newAlbum;//returns the entered info
}//end addToCollection function
console.log(addToCollection('Faces in Relfection', 'George Duke','1974'));
console.log(addToCollection('Live at Filmore West', 'King Curtis', '1971'));
console.log(addToCollection('Love is Here 1', 'Pharoah Sanders', '1975'));
console.log(addToCollection('Feel', 'George Duke', '1974'));
console.log(addToCollection('Ventura', 'Anderson .Paak', '2019'));
console.log(addToCollection('Flower Boy', 'Tyler, The Creator', '2017'));
//Added to collection

console.log('My albums:', collection);//Logs collections array

function showCollection() {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].yearPublished < 2020) {
      console.log(collection.length);
      console.log(collection[i].title +', by' + collection[i].artist + ', published in ' + collection[i].yearPublished);
    }
  }
}

console.log('Test showing collection', showCollection());
