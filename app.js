const MAIN_CLASS = "slider-wrapper";
const SLIDER_CLASS = "slider";
const PREV_BUTTON = "prev";
const NEXT_BUTTON = "next";
const LABEL_CLASS = "slider-label";

class Slider {
    constructor (sliderID) {
        this.sliderID = sliderID;
        this.showLabel = true;
        this.showControls = true;
        this.slideTypesArray = [Video, Image, Html];
    }
    
    createSlider() {
        const newSlider = document.createElement("div");
        newSlider.classList.add(`${MAIN_CLASS}`);
        newSlider.setAttribute(`id`, `${this.sliderID}`);
        document.body.prepend(newSlider);
        this.createLabel();
        this.createControls();
        this.genericSliderFunction();
    }

    createLabel() {
        if (!this.showLabel) return;
        const newLabel = document.createElement("div");
        newLabel.classList.add(`${LABEL_CLASS}`);
        const sliderDiv = document.querySelector(`#${this.sliderID}`);
        sliderDiv.appendChild(newLabel);
    }

    createControls() {
        if (!this.showControls) return;
        const newPrevButton = document.createElement("button");
        newPrevButton.setAttribute(`id`, `${PREV_BUTTON}`);
        const newNextButton = document.createElement("button");
        newNextButton.setAttribute(`id`, `${NEXT_BUTTON}`);
        const sliderDiv = document.querySelector(`#${this.sliderID}`);
        sliderDiv.appendChild(newPrevButton);
        sliderDiv.appendChild(newNextButton);
    }

    genericSliderFunction() {
        console.log("generic slider function");
    }

    runApp = () => {
        
        for (let i = 0; i < this.slideTypesArray.length; i++) {
            let classID = `${this.slideTypesArray[i].name}`;
            this.createSlider();
            console.log(classID);
        }
        new Video;
        new Image;
        new Html;
    }
}

class Video extends Slider {
    constructor() {
        super();
        this.play();
        this.pause();
    }
    play = function() {
        console.log("Video - play");
    }

    pause = function() {
        console.log("Video - pause");
    }
}

class Image extends Slider {
    constructor() {
        super()
        this.crop();
        this.rotate();
    }
    crop() {
        console.log("Image - crop");
    }

    rotate() {
        console.log("Image - rotate");
    }
}

class Html extends Slider {
    constructor() {
        super()
        this.raw();
        this.render();
    }
    raw() {
        console.log("html - raw");
    }

    render() {
        console.log("html - render");
    }
}

const initSlider = new Slider('slider1');
initSlider.runApp();