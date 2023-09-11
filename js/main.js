/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Burak DAG
 * @version 0.2
 * @since   2023-09-05
 */
// Demande un interprétation stricte du code
'use strict';
document.addEventListener('DOMContentLoaded', function () {

        let inputDegre = document.querySelector('#element1');
        let butDegre = document.querySelector('.but1');
        let outInput = document.querySelector('.outInput');
        let listHist = document.querySelector('#historique');

        butDegre.addEventListener('click', () => {
                let valueCel = parseInt(inputDegre.value);
                outInput.value = (valueCel * 9 / 5) + 32;
                listHist.innerHTML += '<li>' + inputDegre.value + '&deg;C' + '=' + outInput.value +
                    '&deg;F' + '</li>';
                if (isNaN(valueCel)) {
                    alert('Entrez un nombre');

                } else {
                    outInput.innerText = (valueCel * 9 / 5) + 32;
                }
            }
        );
    }
);





