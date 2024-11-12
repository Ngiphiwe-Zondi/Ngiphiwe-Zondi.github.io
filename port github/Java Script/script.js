// JavaScript for Dark Mode Toggle
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change icon based on mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to moon icon
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to sun icon
    }
});

// Function to set About Me content
function setAboutMeContent() {
    const aboutMeContent = `
        <h2>About Me</h2>
        <p>
            Hi, I'm Ngiphiwe, a passionate front-end developer with 2 years of experience. I specialize in creating responsive, user-friendly interfaces with HTML, CSS, and JavaScript. 
            <br><br>
            My journey in web development began with a fascination for design and technology, leading me to delve into the world of coding. I have a strong foundation in modern frameworks like React and Bootstrap, which I use to enhance the user experience and create dynamic web applications.
            <br><br>
            Outside of coding, I love collaborating on projects, learning new technologies, and staying updated with industry trends. I'm excited about opportunities that allow me to grow as a developer and contribute to innovative projects.
        </p>
    `;
    
    // Set the content to the About Me section
    document.getElementById('about').innerHTML = aboutMeContent;
}

// Call the function to set the content when the page loads
setAboutMeContent();
