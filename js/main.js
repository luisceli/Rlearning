
const caja= document.querySelector('#caja');
const caja2= document.querySelector('#caja2');
const caja3= document.querySelector('#caja3');
const contenedor= document.querySelector('#contenedor');
const contenedor2= document.querySelector('#contenedor2');
const contenedor3= document.querySelector('#contenedor3');


contenedor.addEventListener('dragenter', e => {
    console.log('Drag Enter');
})
contenedor.addEventListener('dragleave', e => {
    console.log('Drag Leave');
})
contenedor.addEventListener('dragover', e => {
    e.preventDefault();
    console.log('Drag Over');
})
contenedor.addEventListener('drop', e => {
    console.log('Drop');
    contenedor.appendChild(caja);
})


contenedor2.addEventListener('dragenter', e => {
    console.log('Drag Enter');
})
contenedor2.addEventListener('dragleave', e => {
    console.log('Drag Leave');
})
contenedor2.addEventListener('dragover', e => {
    e.preventDefault();
    console.log('Drag Over');
})
contenedor2.addEventListener('drop', e => {
    console.log('Drop');
    contenedor2.appendChild(caja2);
})


contenedor3.addEventListener('dragenter', e => {
    console.log('Drag Enter');
})
contenedor3.addEventListener('dragleave', e => {
    console.log('Drag Leave');
})
contenedor3.addEventListener('dragover', e => {
    e.preventDefault();
    console.log('Drag Over');
})
contenedor3.addEventListener('drop', e => {
    console.log('Drop');
    contenedor3.appendChild(caja3);
})




