$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, insira o seu nome'
            },
            email: {
                required: 'Por favor, insira o seu email',
                email: 'Por favor, insira um email válido'
            },
            telefone: {
                required: 'Por favor, insira o seu telefone'
            },
            endereco: {
                required: 'Por favor, insira o seu endereço'
            },
            cep: {
                required: 'Por favor, insira o seu cep'
            },
            cpf: {
                required: 'Por favor, insira o seu cpf'
            }
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log(form);
            form.submit();
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert("Por favor, preencha os campos para prosseguir com a compra!");
            }
        }
    });
});
