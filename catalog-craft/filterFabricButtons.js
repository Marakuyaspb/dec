function filterFabricButtons(){
	const currCat = document.getElementById('content_left');
    const collection = document.getElementById('collection');
    let currCollection = collection.className;
    let fabricButtons = document.getElementsByClassName('fabric-var');

    if(currCollection == 'consono'){
        for (let i_0 = 0; i_0 < fabricButtons.length; i_0++) {
            const classes = fabricButtons[i_0].classList;
              
            if (classes.contains('COSMIC_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('HARMONY_SILVER')) {
                classes.add('d-none');
            } 
            else if (classes.contains('JAZZ_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            }
        }
    }
    else if (currCollection == 'giros'){
        for (let i_1 = 0; i_1 < fabricButtons.length; i_1++) {
            const classes = fabricButtons[i_1].classList;
              
            if (classes.contains('JAZZ_01')) {
                classes.add('d-none');
            } 
            else if (classes.contains('JAZZ_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_32')) {
                classes.add('d-none');
            }
        }
    }
    else if (currCollection == 'nadwig' & currCat == 'corner'){
        for (let i_2 = 0; i_2 < fabricButtons.length; i_2++) {
            const classes = fabricButtons[i_2].classList;
              
            if (classes.contains('COSMIC_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('HARMONY_SILVER')) {
                classes.add('d-none');
            } 
            else if (classes.contains('PIXEL_FOREST')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            }
        }
    }
    else if (currCollection == 'nadwig' & currCat == 'pouf'){
        for (let i_3 = 0; i_3 < fabricButtons.length; i_3++) {
            const classes = fabricButtons[i_3].classList;
              
            if (classes.contains('HARMONY_SILVER')) {
                classes.add('d-none');
            } 
            else if (classes.contains('JAZZ_01')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            }
        }
    }
    else if (currCollection == 'nadwig' & currCat == 'sofa'){
        for (let i_4 = 0; i_4 < fabricButtons.length; i_4++) {
            const classes = fabricButtons[i_4].classList;
              
            if (classes.contains('CAMBRIDGE_600')) {
                classes.add('d-none');
            } 
            else if (classes.contains('COSMIC_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('HARMONY_SILVER')) {
                classes.add('d-none');
            } 
            else if (classes.contains('PIXEL_FOREST')) {
                classes.add('d-none');
            }
        }
    }
    else if (currCollection == 'nadwig' & currCat == 'bed'){
        for (let i_5 = 0; i_5 < fabricButtons.length; i_5++) {
            const classes = fabricButtons[i_5].classList;
              
            if (classes.contains('HARMONY_SILVER')) {
                classes.add('d-none');
            } 
            else if (classes.contains('JAZZ_08')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_16')) {
                classes.add('d-none');
            } 
            else if (classes.contains('VELUTTO_32')) {
                classes.add('d-none');
            }
        }
    }
}