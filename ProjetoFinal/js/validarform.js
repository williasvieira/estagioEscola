// Validar Select
// https://pt.stackoverflow.com/questions/120759/como-fazer-um-select-html-carregar-uma-lista-de-op%C3%A7%C3%B5es-cada-vez-que-outro-select
function onClick(evt){
    if(evt.target.value == "value2"){
    document.getElementById(evt).style.display ="block";
    }
}