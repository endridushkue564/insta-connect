/*
    File Name: SophisticatedCode.js

    Description:
    This code implements a sophisticated and elaborate program that
    simulates a virtual art gallery. It includes interactive features
    for users to navigate through the gallery, view artworks, leave
    comments, and even purchase art pieces.

    Author: AI Assistant

    Date: DD/MM/YYYY
*/

// Constants
const GALLERY_WIDTH = 800;
const GALLERY_HEIGHT = 600;

// Global Variables
let currentRoom;
let currentArtwork;
let currentUser;
let galleryRooms = [];
let users = [];

// Classes

class Room {
    constructor(name, description, artworks) {
        this.name = name;
        this.description = description;
        this.artworks = artworks;
    }

    displayArtworks() {
        for (let i = 0; i < this.artworks.length; i++) {
            console.log(`[${i + 1}] ${this.artworks[i].title}`);
        }
    }
}

class Artwork {
    constructor(title, artist, price, imageSrc) {
        this.title = title;
        this.artist = artist;
        this.price = price;
        this.imageSrc = imageSrc;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.cart = [];
    }

    addToCart(artwork) {
        this.cart.push(artwork);
    }

    purchaseCart() {
        let totalPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
            totalPrice += this.cart[i].price;
        }
        console.log(`[PURCHASED] Total: $${totalPrice.toFixed(2)}`);
        this.cart = [];
    }
}

// Functions

function createGallery() {
    const room1 = new Room(
        "Room 1",
        "Welcome to Room 1! This room showcases abstract art.",
        []
    );
    
    const room2 = new Room(
        "Room 2",
        "Welcome to Room 2! This room showcases impressionist art.",
        []
    );

    const artwork1 = new Artwork(
        "The Abstract Masterpiece",
        "John Doe",
        1000,
        "images/artwork1.jpg"
    );
    room1.artworks.push(artwork1);

    const artwork2 = new Artwork(
        "Sunset over the River",
        "Jane Smith",
        800,
        "images/artwork2.jpg"
    );
    room2.artworks.push(artwork2);

    galleryRooms.push(room1, room2);
}

function enterGallery() {
    console.log("Welcome to the Virtual Art Gallery!");
    displayRooms();
}

function displayRooms() {
    console.log("Please select a room to enter:");
    for (let i = 0; i < galleryRooms.length; i++) {
        console.log(`[${i + 1}] ${galleryRooms[i].name}`);
    }
}

function selectRoom(roomIndex) {
    currentRoom = galleryRooms[roomIndex - 1];
    console.log(`${currentRoom.name}: ${currentRoom.description}`);
    currentRoom.displayArtworks();
}

function selectArtwork(artworkIndex) {
    currentArtwork = currentRoom.artworks[artworkIndex - 1];
    console.log(`Title: ${currentArtwork.title}`);
    console.log(`Artist: ${currentArtwork.artist}`);
    console.log(`Price: $${currentArtwork.price.toFixed(2)}`);
    console.log(`Comments:`);
    for (let i = 0; i < currentArtwork.comments.length; i++) {
        console.log(`- ${currentArtwork.comments[i]}`);
    }
}

function addComment(comment) {
    currentArtwork.addComment(comment);
    console.log("Comment added successfully.");
}

function signUp(name) {
    const newUser = new User(name);
    users.push(newUser);
    currentUser = newUser;
    console.log(`Welcome, ${name}! You are now signed up.`);
}

function logIn(name) {
    const user = users.find((user) => user.name === name);
    if (user) {
        currentUser = user;
        console.log(`Welcome back, ${name}!`);
    } else {
        console.log(`User ${name} does not exist.`);
    }
}

function addToCart(artworkIndex) {
    const artwork = currentRoom.artworks[artworkIndex - 1];
    currentUser.addToCart(artwork);
    console.log(`${artwork.title} added to cart.`);
}

// Main execution

createGallery();
enterGallery();