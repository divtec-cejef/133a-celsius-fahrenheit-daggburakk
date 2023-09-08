/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Burak DAG
 * @version 0.2
 * @since   2023-09-05
 */
// Demande un interprétation stricte du code
'use strict';
document.addEventListener('DOMContentLoaded', function(){

    let inputDegre = document.querySelector('element1');
    let butDegre=document.querySelector('but1');
    let outInput= document.querySelector('outInput');

    butDegre.addEventListener('click',function (){
    let valueCel=parseInt(inputDegre.value);

    if(isNaN(valueCel)){
    alert('Entrez un nombre');

    }else{
       outInput.textContent= document.querySelector('outInput').innerHTML=(valueCel-32)/1.8;
    }

        }
    );

});





