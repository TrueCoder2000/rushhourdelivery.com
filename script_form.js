let btnSend = document.querySelector(".btn-send");

/*btnSend.onclick = function () {
    const sendMessage = function () {
        let firstname = document.querySelector(".firstname").value;
        let lastname = document.querySelector(".lastname").value;
        let email = document.querySelector(".email").value;
        let message = document.querySelector(".message").value;
        let number = 13179838753;

        var whatsapp = window.open('https://wa.me/${numero}?text=Hi%20mi%20firstname%20es%20${firstname}20%${lastname}, Asunto:20%${message}`,_blank');

    }
}*/

let submit = document.querySelector('#btnSubmit');

submit.addEventListener('click', enviarMensaje);



function enviarMensaje() {

    var fullname = document.querySelector('#fullname').value
    var email = document.querySelector('#email').value
    var message = document.querySelector('#mensaje').value

    if (fullname !== "" && email !== "" && message !== "") {
        let url = "https://api.whatsapp.com/send?phone=3179600276&text=Fullname: %0A" + fullname + "%0A%0AEmail: %0A" + email + "%0A%0AMessage: %0A" + message + "%0A";

        window.open(url);

    } else {
        alert('Empty spaces...');
    }




}

