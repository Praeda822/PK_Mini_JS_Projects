"use strict";

const quotes = [
  "1. 'The obstacle in the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition.' - Marcus Aurelius. Just like debugging in JavaScript, every error is a chance to learn something new.",
  "2. 'You have power over your mind - not outside events. Realize this, and you will find strength.' - Marcus Aurelius. Focus on your coding skills and the process of learning, rather than external distractions.",
  "3. 'Difficulties strengthen the mind, as labor does the body.' - Seneca. Each challenge you face in JavaScript is an opportunity to grow stronger and more skilled.",
  "4. 'He who is brave is free.' - Seneca. The courage to persist in learning JavaScript, despite its difficulties, leads to the freedom of knowledge and ability.",
  "5. 'It does not matter what you bear, but how you bear it.' - Seneca. It's not about how complex the code is, but how you approach and solve the problem.",
  "6. 'Begin at once to live, and count each separate day as a separate life.' - Seneca. Treat every day of coding as a new opportunity to learn and improve.",
  "7. 'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.' - Marcus Aurelius. Don't let the fear of coding or making mistakes hold you back; you can always change your perspective.",
  "8. 'Don't explain your philosophy. Embody it.' - Epictetus. Don't just talk about wanting to learn JavaScript, actively engage in coding and embody the learning process.",
  "9. 'First say to yourself what you would be; and then do what you have to do.' - Epictetus. Decide that you want to be proficient in JavaScript, and then take the necessary steps to make it happen.",
  "10. 'No man is free who is not master of himself.' - Epictetus. Gain mastery over JavaScript and your learning process to achieve true freedom in your coding journey.",
];

let usedQuotes = [];

const generateQuote = () => {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  usedQuotes.push(randomIndex);
  document.getElementById("quote").textContent = quotes[randomIndex];
};
