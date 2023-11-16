/*
Filename: ComplexCode.js
Description: This code is a complex implementation of a messaging application with various features like user registration, login, sending/receiving messages, and viewing message history.
*/

// Class representing a user
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  
  // Method to register a new user
  register() {
    // Simulate registration process
    console.log(`Registered user: ${this.username}`);
  }
  
  // Method to login user
  login() {
    // Simulate login process
    console.log(`Logged in user: ${this.username}`);
  }
}

// Class representing a message
class Message {
  constructor(sender, receiver, content) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = new Date();
  }
  
  // Method to display message details
  display() {
    console.log(`Sender: ${this.sender}`);
    console.log(`Receiver: ${this.receiver}`);
    console.log(`Content: ${this.content}`);
    console.log(`Sent at: ${this.timestamp}`);
  }
}

// Class representing a messaging application
class MessagingApp {
  constructor() {
    this.users = [];
    this.messages = [];
  }
  
  // Method to register a new user
  registerUser(username, password) {
    const newUser = new User(username, password);
    this.users.push(newUser);
    newUser.register();
  }
  
  // Method to find a user by username
  findUser(username) {
    return this.users.find(user => user.username === username);
  }
  
  // Method to send a message
  sendMessage(sender, receiver, content) {
    const userSender = this.findUser(sender);
    const userReceiver = this.findUser(receiver);
    
    if (userSender && userReceiver) {
      const newMessage = new Message(sender, receiver, content);
      this.messages.push(newMessage);
      console.log(`Message sent from ${sender} to ${receiver}`);
    } else {
      console.log("Invalid sender/receiver");
    }
  }
  
  // Method to display all messages
  displayMessages() {
    console.log("Message History:");
    
    for (const message of this.messages) {
      message.display();
      console.log("---------------------");
    }
  }
}

// Usage example:
const app = new MessagingApp();
app.registerUser("user1", "password123");
app.registerUser("user2", "secret!@#");
app.sendMessage("user1", "user2", "Hello there!");
app.sendMessage("user2", "user1", "Hi user1!");
app.displayMessages();