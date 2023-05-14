
document.addEventListener("DOMContentLoaded", function() {
    
    let funcionamentoLink = document.querySelector(".nav-link[href='#']");
    funcionamentoLink.addEventListener("click", function(event) {
        event.preventDefault();
        
        let modal = new bootstrap.Modal(document.getElementById("funcionamento"));
        modal.show();
    });
});

function showButton(card) {
    const button = card.querySelector('.btn');
    button.classList.remove('d-none');
  }
  
  function hideButton(card) {
    const button = card.querySelector('.btn');
    button.classList.add('d-none');
  }
  









