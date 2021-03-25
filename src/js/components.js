import '../css/components.css';


export const saludar = ( nombre ) =>{

    console.log('Creando etiquite h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola , ${nombre} , como estAAA66as?`;

    document.body.append ( h1 )
}