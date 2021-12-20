function validar() {}
function is_cpf(c) {
    if ((c = c.replace(/[^\d]/g, "")).length != 11) return false;

    if (c == "00000000000") return false;

    var r;
    var s = 0;

    for (i = 1; i <= 9; i++) s = s + parseInt(c[i - 1]) * (11 - i);

    r = (s * 10) % 11;

    if (r == 10 || r == 11) r = 0;

    if (r != parseInt(c[9])) return false;

    s = 0;

    for (i = 1; i <= 10; i++) s = s + parseInt(c[i - 1]) * (12 - i);

    r = (s * 10) % 11;

    if (r == 10 || r == 11) r = 0;

    if (r != parseInt(c[10])) return false;

    return true;
}

function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

cpfCheck = function (el) {
    document.getElementById("cpfResponse").innerHTML = is_cpf(el.value)
        ? '<span style="color:blue">válido</span>'
        : '<span style="color:red">inválido</span>';
    if (el.value == "") document.getElementById("cpfResponse").innerHTML = "";
};

mascaraCep = function() {
    var cep = document.getElementById("cep");
    
    if (cep.value.length == 5)
    cep.value = cep.value + "-"
    }

var b = document.getElementById("data")
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = String(data.getFullYear());
dataAtual = ano + '-' + mes + '-' + dia;
b.setAttribute("min", dataAtual);



