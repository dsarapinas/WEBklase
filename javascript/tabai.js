let tabai=document.getElementsByClassName('tab');
let sheetai=document.getElementsByClassName('sheet');
function sleptiSheetus(){
    for (let i=0; i<sheetai.length; i++){
        let sheet=sheetai[i];
        sheet.style.display='none';
    }
}
function rodytiSheetus(event) {

    let id=event.data.sheet;
    document.getElementById(id).style.display='block';
}
for (let i=0; i<tabai.length;i++){
    let tab=tabai[i];
    tab.addEventListener('click',rodytiSheetus(this));
}