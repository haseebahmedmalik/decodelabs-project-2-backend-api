document.getElementById('apiValidationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('usernameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const resultDiv = document.getElementById('validationResult');

    resultDiv.classList.remove('d-none');

    if (!username || !email) {
        resultDiv.className = "mt-3 p-3 rounded font-monospace small bg-danger bg-opacity-25 border border-danger text-danger";
        resultDiv.innerHTML = `{
&nbsp;&nbsp;"status": <span class="fw-bold">400</span>,<br>
&nbsp;&nbsp;"error": "Bad Request: Missing required noun parameters."<br>
}`;
        return;
    }

    resultDiv.className = "mt-3 p-3 rounded font-monospace small bg-success bg-opacity-25 border border-success text-success";
    resultDiv.innerHTML = `{
<br>&nbsp;&nbsp;"status": <span class="fw-bold">201</span>,<br>
&nbsp;&nbsp;"message": "Resource created successfully",<br>
&nbsp;&nbsp;"data": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"username": "${username}",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"email": "${email}"<br>
&nbsp;&nbsp;}<br>
}`;
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});