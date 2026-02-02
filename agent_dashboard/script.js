function toggleDetails(id) {
    const details = document.getElementById(id);
    const allDetails = document.querySelectorAll('.workflow-details');

    // Close others
    allDetails.forEach(el => {
        if (el.id !== id) {
            el.classList.remove('open');
        }
    });

    // Toggle current
    details.classList.toggle('open');
}

function showPrompt(type, id) {
    const modal = document.getElementById('prompt-modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-content-text');

    const data = agentData[type][id];
    if (data) {
        title.innerText = data.title;
        text.innerText = data.content;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('prompt-modal');
    modal.style.display = 'none';
}

// Close when clicking outside content
window.onclick = function (event) {
    const modal = document.getElementById('prompt-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Agent Control Center Visualizer Loaded.");
    renderSkillsPool();
});

function renderSkillsPool() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    // Clear existing hardcoded skills
    skillsGrid.innerHTML = '';

    // Render all skills from agentData
    Object.keys(agentData.skills).forEach(id => {
        const skill = agentData.skills[id];
        const skillBox = document.createElement('div');
        skillBox.className = 'skill-box';
        // Add special class for the versioning guide
        if (id === 'output-versioning-guide') {
            skillBox.classList.add('system');
        }
        skillBox.innerText = id;
        skillBox.onclick = () => showPrompt('skills', id);
        skillsGrid.appendChild(skillBox);
    });
}
