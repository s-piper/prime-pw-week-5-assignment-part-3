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

function showCollection() { //starts showCollection function
  console.log('Number of albums:', collection);
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].yearPublished < 3000) { // looks up year published is less than 3000, should include all.
                                              //Kinda getting myself into a Y2k situation here.
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }// Logs Title by Artist
  }
}//end showCollection

showCollection();

function findByArtist(artist) {// starts findByArtist
  console.log('in findByArtist');
  let results = []; // stores results
  for (var i = 0; i < collection.length; i++) {
    let name = collection[i];
      if (artist === collection[i].artist) {
      results.push(collection[i]);// if the artist is found this pushes it to results array
    }
  }console.log(results);
} // end findByArtist

findByArtist('George Duke'); // should contain two results
findByArtist('King Curtis'); // should contain one result
findByArtist('Smash Mouth'); // should contain zero results

function search(artist, year){ //start search
console.log('in search');

let results1 = []; // stores results
for (var i = 0; i < collection.length; i++) {
  let name = collection[i];
    if (artist === collection[i].artist && year === collection[i].yearPublished) {
    results1.push(collection[i]);// if the artist is found this pushes it to results array
  }
 } console.log(results1);
}// end search

search('George Duke', '1974');
search('George Duke', '1975');
