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
console.log('My albums:', collection);//Logs collections array
