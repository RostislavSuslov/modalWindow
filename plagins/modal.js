function _creatModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
    <div class="modal-window">
    <div class="modal-header">
    <span class="modal-title">Modal title!</span>
    <span class="modal-close false">&times;</span>
    </div>
    <div class="modal-body">
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    </div>
    <div class="modal-footer">
    <button class="btn btn-primary">OK</button>
    <button class="btn btn-secondary">Close</button>
    </div>
    </div>
    </div>
    `)

    document.body.appendChild(modal)
    const modalTitle = document.querySelector('.modal-title')
    const modalBody = document.querySelector('.modal-body')
    let modalWidth = '600px';
    document.querySelector(".modal-window").style.width = modalWidth;
    modalTitle.innerHTML = "Новый заголовочек!";
    modalBody.innerHTML = "<p>Этот контент куда круче!</p><p>Этот контент куда круче Ыыыы!</p>";


    return modal;
}

$.modal = function (options) {
    const $modal = _creatModal(options);
    const modalClose = document.querySelector('.modal-close');
    let closable = true;

    return {
        open() {
            $modal.classList.add('open')
            closable = true;
            if (closable == true) {
                modalClose.classList.add('true')
                modalClose.classList.remove('false')
            }
        },
        close() {
            $modal.classList.remove('open')
            closable = false;
            if (closable == false) {
                modalClose.classList.remove('true')
                modalClose.classList.add('false')
            };
        },
        destroy() {
            $modal.remove();
        }
    }
}



var btnModal = document.getElementById('btn-modal');
let closable = false;
btnModal.onclick = function () {
    modal.open();

    const modalClose = document.querySelector('.modal-close');
    const modalOverlay =document.querySelector('.modal-overlay'); 
   
    modalClose.onclick = function () {
        modal.close();
    };

    modalOverlay.onclick = function () {
        modal.close();
    };
     
};