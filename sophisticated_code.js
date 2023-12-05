/* filename: sophisticated_code.js */
/* Description: This code demonstrates a complex implementation of a music streaming application */

// Class representing a User
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.subscription = false;
  }
  
  subscribe() {
    if (!this.subscription) {
      this.subscription = true;
      console.log(`User ${this.name} has subscribed! Enjoy the music!`);
    } else {
      console.log(`User ${this.name} is already subscribed!`);
    }
  }
  
  unsubscribe() {
    if (this.subscription) {
      this.subscription = false;
      console.log(`User ${this.name} has unsubscribed from the service.`);
    } else {
      console.log(`User ${this.name} is not currently subscribed.`)
    }
  }
}

// Class representing a Song
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
  
  play() {
    console.log(`Playing ${this.title} by ${this.artist} (${this.duration} minutes).`);
  }
}

// Class representing a Playlist
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }
  
  addSong(song) {
    this.songs.push(song);
    console.log(`${song.title} by ${song.artist} has been added to the ${this.name} playlist.`);
  }
  
  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index !== -1) {
      this.songs.splice(index, 1);
      console.log(`${song.title} by ${song.artist} has been removed from the ${this.name} playlist.`);
    } else {
      console.log(`${song.title} by ${song.artist} was not found in the ${this.name} playlist.`);
    }
  }
  
  playAll() {
    console.log(`Playing all songs in the ${this.name} playlist:`);
    this.songs.forEach(song => song.play());
  }
}

// Main code
const user1 = new User("John Doe", "john.doe@example.com", "password123");
const user2 = new User("Jane Smith", "jane.smith@example.com", "abc123");

user1.subscribe();
user2.subscribe();

const song1 = new Song("Bohemian Rhapsody", "Queen", 5);
const song2 = new Song("Hotel California", "Eagles", 7);
const song3 = new Song("Wonderwall", "Oasis", 4);

const playlist1 = new Playlist("Rock Classics");
playlist1.addSong(song1);
playlist1.addSong(song2);
playlist1.playAll();

playlist1.removeSong(song2);
playlist1.playAll();

user2.unsubscribe();