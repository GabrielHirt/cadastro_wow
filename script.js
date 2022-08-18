let B7Validator = {
    handleSubmit:(event)=>{ //Para um evento de submit  
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        B7Validator.clearErrors();  // limpará os erros para não acumular erros em row

        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check = B7Validator.checkInput(input);
            if(check !== true) {
                send = false;
                B7Validator.showError(input, check);
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');

        if(rules !== null) {
            rules = rules.split('|');
            for(let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos '+rDetails[1]+' caractes';
                        }
                    break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado não é válido!';
                            }
                        }
                    break;
                }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() => {
        let inputs = form.querySelectorAll('input');
        for(let i=0;i<inputs.length;i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for(let i=0;i<errorElements.length;i++) {
            errorElements[i].remove();
        }
    }
};




let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);

document.querySelector(".align .home").addEventListener ("click", home);
function home() {

        document.querySelector(".align .home").classList.add("button-style");
    document.querySelector(".align .selection .nacional-").classList.remove("button-style");
        document.querySelector("main").style.marginLeft ="0vw";

    /*document.querySelector(".align .selection .nacional-").style.background="none";
    document.querySelector(".align .selection .importado-").style.background="none";
    document.querySelector(".align .selection .hana").style.background="none";*/



}



document.querySelector(".align .selection .nacional-").addEventListener ("click", nextOne);
function nextOne() {
    document.querySelector(".align .selection .nacional-").classList.add("button-style");
    document.querySelector(".align .home").classList.remove("button-style");
    document.querySelector("main").style.marginLeft ="-100vw";

    /*document.querySelector(".align .home").style.background="none";
    document.querySelector(".align .selection .importado-").style.background="none";
    document.querySelector(".align .selection .hana").style.background="none";*/
}