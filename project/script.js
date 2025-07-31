document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for contacting DEVICKLIN FARMS! We'll be in touch soon.");
  this.reset();
});
//about section
   // Highlight the current page
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
//product section
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
//gallery section
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
//contact section
// Highlight current page
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Handle form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting DEVICKLIN FARMS. We'll get back to you soon!");
  this.reset();
});
// section for highlighting the current page in the navigation
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
// Handle form submission for contact form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for reaching out to DEVICKLIN FARMS! We'll respond shortly.");
  this.reset();
});
// Highlight the current page in the navigation
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});   
//footer section
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing to DEVICKLIN FARMS!");
  this.reset();
});


// Team Carousel Logic
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const members = document.querySelectorAll(".team-member");
  let current = 0;

  function showTeamMember(index) {
    members.forEach((member, i) => {
      member.style.display = i === index ? "block" : "none";
    });
  }

  function nextMember() {
    current = (current + 1) % members.length;
    showTeamMember(current);
  }

  if (members.length > 0) {
    // Hide all but the first member
    members.forEach((m, i) => {
      m.style.display = i === 0 ? "block" : "none";
    });

    // Start the carousel
    setInterval(nextMember, 4000); // Change slide every 4 seconds
  }
});
document.addEventListener("DOMContentLoaded", () => {
  fetch('team.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("team-container");

      data.forEach(member => {
        const div = document.createElement("div");
        div.className = "team-member";
        div.innerHTML = `
          <img src="${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => console.error("Failed to load team data:", error));
});


fetch('team.json') // this "links" the file by loading it dynamically
  .then(response => response.json())
  .then(data => {
    // use the JSON data here
    console.log(data); // You’ll see the team list in your browser console
  })
  .catch(error => console.error("Error loading JSON:", error));

  fetch('team.json')

  // Testimonial Slider Logic
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showNextTestimonial() {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }

  setInterval(showNextTestimonial, 4000); // Auto slide every 4 seconds
});

