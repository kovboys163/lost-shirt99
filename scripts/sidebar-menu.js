(function(){
    const openingbtn = document.querySelector(".sidebar__hamburger");
    const closingbtn = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector('.sidebar');
    
    
    openingbtn.addEventListener("click", function(){
        sidebar.classList.add('sidebar--opened');
    });
    
    closingbtn.addEventListener('click', function(){
        sidebar.classList.remove('sidebar--opened');
    });


})();
