

//custom event ->asked in synechron interview->what is custom event and how we create it...

//=>https://dev.to/chintanonweb/mastering-custom-events-elevate-your-javascript-skills-8o4
//=>https://www.geeksforgeeks.org/javascript-custom-events/

//To create a custom event we use the Event constructor or CustomEvent interface. The Event constructor creates an Event and CustomEvent creates an Event with more functionality.


1️⃣ new Event() → Simple event (no extra data)
✅ When to use

You just want to notify that something happened

No extra data is required

Example
const event = new Event('userLoggedIn');

document.addEventListener('userLoggedIn', () => {
  console.log('User logged in');
});

document.dispatchEvent(event);


✔ Simple
✔ Lightweight
❌ Cannot pass custom data







// Create a custom event called 'myEvent' with some data
const myEvent = new CustomEvent("myEvent", {
  detail: { message: "Hello, this is a custom event!" }
});

//✅ Best Practice (Use This Rule)

//If you need to send data → always use CustomEvent.

2️⃣ new CustomEvent() → Event with data (MOST USED)
✅ When to use

You need to pass data with the event

Communication between components/modules

Example
const event = new CustomEvent('userLoggedIn', {
  detail: {
    userId: 101,
    name: 'Prem'
  }
});

document.addEventListener('userLoggedIn', (e) => {
  console.log(e.detail.userId); // 101
  console.log(e.detail.name);   // Prem
});

document.dispatchEvent(event);


✔ Can pass data
✔ Very powerful
✔ Industry standard

=====>custom event Used in:

Micro frontends

Analytics tracking

Global notifications

Framework-agnostic communication


