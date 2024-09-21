let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speck(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    
    if (hours >= 0 && hours < 12) {
        speck("Good morning sir");
    } else if (hours >= 12 && hours < 16) {
        speck("Good afternoon sir");
    } else {
        speck("Good evening sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript.toLowerCase();
    console.log('Recognized:', transcript);
    takeCommand(transcript);  // Pass recognized speech to the takeCommand function
};

// To start recognition on button click
btn.addEventListener('click', () => {
    recognition.start();
    btn.style.display = "none";  // Hide the button
    voice.style.display = "block";  // Show the voice/mic icon
});

// Function to handle different commands
function takeCommand(message) {
    btn.style.display = "flex";  // Show the button after command
    voice.style.display = "none";  // Hide the voice icon

    if (message.includes("hello") || message.includes("hey")) {
        speck("Hello sir, what can I help you with?");
    } 
    else if (message.includes("modi who are you")) {
        speck("I am a virtual assistant, created by Shrey sir.");
    }
    // Open YouTube
    else if (message.includes("open youtube")) {
        speck("Opening YouTube");
        window.open("https://www.youtube.com");
    }
    else if (message.includes("youtube back")) {
     speck("YouTube is already open. Please return by switching tabs or closing YouTube.");
 }
    
    // Open Google
    else if (message.includes("open google")) {
        speck("Opening Google");
        window.open("https://www.google.com");
    }
    // opne instagram
    else if (message.includes("open instagram")) {
        speck("Opening instagram");
        window.open("https://www.instagram.com");
    }
    // open facebook
    else if (message.includes("open facebook")) {
        speck("Opening facebook");
        window.open("https://www.facebook.com");
    }
    // opne linkedin
    else if (message.includes("open linkedin")) {
        speck("Opening linkedin");
        window.open("https://www.linkedin.com");
    }
    // open Pinterest
    else if (message.includes("open Pinterest")) {
        speck("Opening Pinterest");
        window.open("https://www.Pinterest.com");
    }
    // 
    else if (message.includes("open red and white multimedia education")) {
     speck("Opening rwn");
     window.open("https://www.rnwmultimedia.edu.in/");
 }
 else if (message.includes("open calculator")) {
     speck("Opening calculator");
     window.open("calculator://");

 }

 else if (message.includes("open time")) {
     let time = new Date ().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
     speck(time)
 }

   else {
     // Clean the message by removing specific keywords
     let cleanedMessage = message.replace(/modi|pm/g, "").trim();
     if (cleanedMessage) {
         speck(`This is what I found on the internet regarding ${cleanedMessage}`);
         window.open(`https://www.google.com/search?q=${encodeURIComponent(cleanedMessage)}`);
     } else {
         speck("Sorry, I didn't understand that.");
     }
  }
//   else {
//      speck("Sorry, I didn't understand that.");
//  }
}