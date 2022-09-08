const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function GoingBetweenPages(){
    //Active class Button
    for(let i=0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += ' active-button';
        })
    }

    //Active class Section
    allSections.addEventListener('click', (e) =>{
        const id=e.target.dataset.id;
        if(id){
          

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }

        
    })
    
}




GoingBetweenPages();