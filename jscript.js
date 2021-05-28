var accordionTitle = document.querySelectorAll('.question');

accordionTitle.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click',()=>{
        const height = accordionTitle.nextElementSibling.scrollHeight;
        const box = document.getElementById('box');

        accordionTitle.classList.toggle('question-active');
        accordionTitle.classList.toggle('bolded');

        var accLength = document.querySelectorAll('.question-active');
        if(accLength.length > 0){
            box.classList.add('box-active');
        } else{
            box.classList.remove('box-active');
        }

        if(accordionTitle.classList.contains('question-active')){
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = '0px';
        }
    });
});

