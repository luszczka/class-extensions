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
        this.slideTypes = {Video, Image, Html};
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
        console.log(this.slideTypes)

        console.log(this.slideTypes.Video.name)
        const runVideo = new Video;
        runVideo.play();
        runVideo.pause();

        console.log(this.slideTypes.Image.name)
        const runImage = new Image;
        runImage.crop();
        runImage.rotate();

        console.log(this.slideTypes.Html.name)
        const runHtml = new Html;
        runHtml.raw();
        runHtml.render();

        for (let i = 0; i < this.slideTypes; i++) {}
    }
}

class Video extends Slider {
    constructor() {
        super()
    }
    play() {
        console.log("Video - play");
    }

    pause() {
        console.log("Video - pause");
    }
}

class Image extends Slider {
    constructor() {
        super()
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