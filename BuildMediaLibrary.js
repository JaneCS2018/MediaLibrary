//Build a media library Practice Javascript
//https://discuss.codecademy.com/t/project-build-a-library-step-25-how-to-create-a-class-called-catalog/310658/15

class Catalog{
  constructor(type){
    this._type= type;
  }
  get type(){
    return this._type;
  }
};

class Media extends Catalog{
  constructor(media){
    this._title = media.title;
    this._isCheckedOut = false;
    this._rating = [];
    this._movieCast = media.movieCast;
    this._songTitles = media.songTitles;
  }
  get title(){
    return this._title;
  }
  get isCheckOut(){
    return this._isCheckOut;
  }
  get ratings(){
    return this._ratings;
  }
  set keyTwo(newKeyTwo){
    this._keyTwo = newKeyTwo;
  }
  toggleCheckOutStatus(){
    this._isCheckOut = !this._isCheckOut;
  }
  //Get average rating
  getAverageRating(){
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._rating.length;
    return ratingsSum/lengthOfArray;
  }
  addRating(newRating){
    if (newRating >=1 && newRating<=5){
      this.values.push(newRating);
    }
    return 'Rating between 1 and 5';
    console.log("Rating between 1 and 5");
  }
}

class Book extends Media{
  constructor(book){
    this._author = book.author;
    this._pages = book.pages;
    super(title);
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

const historyOfEverything = new Book({
  Author: 'Bill Bryson',
  Title: 'A Short History of Nearly Everything',
  pages: 544
});

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie({
  Director: 'Jan de Bont',
  Title:'Speed',
  Runtime:116
});
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut());
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

class CD extends Media{
  constructor(cd){
    this._artist =cd.artist;
    this._songs = cd.songs;
    super(title);
  }
  //Shuffle an array and get random values
  shuffle(songs){
    const a = this._songs;   
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}



