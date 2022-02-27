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
    }

    createSlider() {
        const newSlider = document.createElement("div");
        newSlider.classList.add(`${MAIN_CLASS}`);
        newSlider.setAttribute(`id`, `${this.sliderID}`);
        document.body.prepend(newSlider);
        this.createLabel();
        this.createControls();
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

    runApp = () => {
        this.createSlider();
    }
}

const initSlider = new Slider('slider1');
initSlider.runApp();