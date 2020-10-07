// 록맨 캐릭터를 그린다.
class Rockimgload{
    constructor(x, velX, src){
        this.x = x;
        this.velX = velX;
        this.img = document.createElement("img");
        this.img.src = src;
        this.img.style.left = `${x}px`
        this.img.style.width = `${80}px`;
        this.img.style.height = `${90}px`;
        this.img.style.position = "absolute";
        this.img.style.top = `${parseInt(wrapper.style.height) - parseInt(this.img.style.height)}px`
        rockimg.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
    }

    render(){
        this.img.style.left = `${this.x}px`;
    }

    moveimg(){
        if(loadRock.img.src = "../images/rockman/left1.png") {
            loadRock.img.src = "../images/rockman/left2.png";
        } else if (loadRock.img.src = "../images/rockman/left2.png"){
            loadRock.img.src = "../images/rockman/left3.png"
        } else {
            loadRock.img.src = "../images/rockman/left1.png"
        }
    }
}
