function easyShadowImages(options){
    let images = document.querySelectorAll('.shadow-images');
    const shadowWeight = setupShadowWeight(options.shadow_weight);
    const shadowPadding = setupShadowPadding(options.shadow_padding);
    images.forEach((image) => {
        image.style.boxShadow = `10px 10px ${shadowWeight} 1px rgba(0,0,0,0.12)`;
        image.style.padding = shadowPadding
    })
   
}

function setupShadowWeight(type){
    let shadowWeight = '0px'
    switch(type){ // low, medium, high
        case 'low' : 
            shadowWeight = '10px'
            break;

        case 'high' : 
            shadowWeight = '0px'
            break;

        case 'medium' : 
            shadowWeight = '5px'
            break;
        
        default : 
            shadowWeight = '5px'
            break;
    }
    return shadowWeight
}


function setupShadowPadding(type){
    let shadowPadding = '0em'
    switch(type){ // min, max , none
        case 'min' : 
            shadowPadding = '1em'
            break;

        case 'max' : 
            shadowPadding = '3em'
            break;
  
        default : 
            shadowPadding = '0em'
            break;
    }
    return shadowPadding
}

module.exports.easyshadowimages = easyShadowImages
