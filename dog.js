let ok;
            
let img1;

// this is whare the img will be stored. see get_dog_imgs.js for how it works
                                                                                                                        
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    getDogImg()
    setInterval(() => {
        getDogImg()
    },1000)
}
function draw(){
    imageMode(CENTER);
    if(ok){
        image(img1,width/2,height/2,width,height)
    }
}
