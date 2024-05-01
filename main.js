window.addEventListener("load", (el) => {
    [...Array(10).keys()].forEach(() => {
        img = document.createElement("img");
        img.src = "/images/what.svg";
        img.style.marginTop = (Math.random() * (window.innerHeight*0.95 - img.offsetHeight)) + "px";
        img.style.marginLeft = (Math.random() * (window.innerWidth - img.offsetWidth)) + "px";
        document.getElementById("backpic").appendChild(img);
    })

    var circle = document.getElementById('lightning');

    document.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        circle.style.left = mouseX - circle.offsetWidth / 2 + 'px';
        circle.style.top = mouseY - circle.offsetHeight / 2 + 'px';
    });