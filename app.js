document.addEventListener('DOMContentLoaded', function() {
    const dashboardBtn = document.querySelector('.dashboard-btn');
    const featureBtn = document.querySelector('.feature-btn');
    const dashboardView = document.getElementById('dashboard');
    const featuresView = document.getElementById('features');
    const welcomeMessage = document.getElementById('welcome-message');
    const addButton = document.getElementById('add-button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const tutorialStep = document.getElementById('tutorial-step');
    const nextButton = document.getElementById('next-button');
    const closeTutorialButton = document.getElementById('close-tutorial');
    const highlightBox = document.getElementById('highlight-box');

    // Show dashboard view by default
    dashboardView.classList.add('active');

    // Prompt for app name on page load
    const appName = prompt("Enter App Name") || "My App";
    updateWelcomeMessage(appName);

    // Start tutorial
    startTutorial();

    dashboardBtn.addEventListener('click', function() {
        dashboardView.classList.add('active');
        featuresView.classList.remove('active');
        updateWelcomeMessage(appName);
    });

    featureBtn.addEventListener('click', function() {
        featuresView.classList.add('active');
        dashboardView.classList.remove('active');
        updateWelcomeMessage(appName);
    });

    addButton.addEventListener('click', function() {
        addButton.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            addButton.style.transform = 'rotate(0deg)';
            modal.style.display = 'block';
        }, 500);
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    function updateWelcomeMessage(appName) {
        welcomeMessage.textContent = `Welcome, ${appName}`;
    }

    function startTutorial() {
        tutorialOverlay.style.display = 'block';
        let stepIndex = 0;

        const steps = [
            {
                text: "Welcome to Fame Builder! Let's start with the sidebar.",
                highlight: ".sidebar"
            },
            {
                text: "This is your Dashboard button. Click it to view your main metrics.",
                highlight: ".dashboard-btn"
            },
            {
                text: "The Features button will take you to additional functionalities.",
                highlight: ".feature-btn"
            },
            {
                text: "Your main metrics are displayed here in these cards.",
                highlight: ".card-container"
            },
            {
                text: "Use this '+' button to add new items or actions.",
                highlight: "#add-button"
            },
            {
                text: "That's it! You're ready to start building your fame. Enjoy!",
                highlight: null
            }
        ];

        function showStep(index) {
            tutorialStep.textContent = steps[index].text;
            if (steps[index].highlight) {
                const element = document.querySelector(steps[index].highlight);
                const rect = element.getBoundingClientRect();
                highlightBox.style.top = `${rect.top}px`;
                highlightBox.style.left = `${rect.left}px`;
                highlightBox.style.width = `${rect.width}px`;
                highlightBox.style.height = `${rect.height}px`;
                highlightBox.style.display = 'block';
            } else {
                highlightBox.style.display = 'none';
            }
        }

        showStep(stepIndex);

        nextButton.onclick = function() {
            stepIndex++;
            if (stepIndex >= steps.length) {
                tutorialOverlay.style.display = 'none';
            } else {
                showStep(stepIndex);
            }
        };

        closeTutorialButton.onclick = function() {
            tutorialOverlay.style.display = 'none';
        };
    }
});