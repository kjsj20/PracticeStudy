// 록맨 캐릭터를 그린다.
class Rockimgload{
    constructor(x, velX){
        this.x = x;
        this.velX = velX;
        this.img = document.createElement("img");

        this.img.src = "../images/rockman/leftmain.png"
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
}
