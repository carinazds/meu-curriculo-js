(function() {
    emailjs.init("am2FImfPde_W0Q02tD"); 
})();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mensagem').value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send('gmailMessage', 'template_vv7rf2m', templateParams)
            .then(function(response) {
                alert('Mensagem enviada com sucesso!', response.status, response.text);
                contactForm.reset(); 
            }, function(error) {
                alert('Falha ao enviar mensagem. Tente novamente.', error);
            });
    });
});
