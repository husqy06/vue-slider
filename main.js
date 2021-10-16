Vue.config.devtools = true;

const app = new Vue({
    el: "#container",
    data: {
        imageIndex: 0,
        images: [
            "img/image1.jpg",
            "img/image2.jpg",
            "img/image3.jpg",
            "img/image4.jpg",
        ],
        play: false,
        playInterval: null 
    },
    methods: {
        leftImage() {
            this.imageIndex -= 1;
            if(this.imageIndex < 0) this.imageIndex = (this.images.length - 1);
            console.log(this.imageIndex);
        },
        rightImage() {
            this.imageIndex += 1;
            if(this.imageIndex == (this.images.length)) this.imageIndex = 0;
            console.log(this.imageIndex);
        },
        togglePlay(num){
            if(num == 1) {
                this.play = true
            } else {
                this.play = false
            }
            console.log(num);
            this.autoPlay();
        },
        autoPlay() {
            if(this.play) {
                clearInterval(this.playInterval)
                this.playInterval = setInterval(() => {this.rightImage()},3000);
            } else {
                clearInterval(this.playInterval);
            }
            console.log(this.play);
        }
    }
})