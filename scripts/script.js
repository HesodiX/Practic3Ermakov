const mnuOpen = document.getElementById('menu-open'),
mnuClose = document.getElementById('menu-close'),
mnuBack = document.getElementById('menu-cont-1'),
mnuForm = document.getElementById('menu-cont-2'),
scrollBody = document.querySelector("body");
mnuOpen.addEventListener('click', () => {
        mnuBack.classList.remove('hide');
        mnuForm.classList.remove('hide');
        mnuBack.classList.add('active');
        mnuForm.classList.add('active');
        scrollBody.style["overflow-y"] = "hidden";
    }
);
document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(mnuClose);
    
	if ( ! withinBoundaries ) {
		
	}
    else {
        mnuBack.classList.remove('active');
        mnuForm.classList.remove('active');
        mnuBack.classList.add('hide');
        mnuForm.classList.add('hide');
        scrollBody.style["overflow-y"] = "auto";
    }
});