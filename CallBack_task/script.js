let i = 10;
let text = document.getElementById('count');
setTimeout(() => {
    text.innerHTML = i;
    setTimeout(() => {
        text.innerHTML = i--;
        setTimeout(() => {
            text.innerHTML = i--;
            setTimeout(() => {
                text.innerHTML = i--;
                setTimeout(() => {
                    text.innerHTML = i--;
                    setTimeout(() => {
                        text.innerHTML = i--;
                        setTimeout(() => {
                            text.innerHTML = i--;
                            setTimeout(() => {
                                text.innerHTML = i--;
                                setTimeout(() => {
                                    text.innerHTML = i--;
                                    setTimeout(() => {
                                        text.innerHTML = i--;
                                        setTimeout(() => {
                                            text.innerHTML = "Happy Independance Day";
                                            text.style.fontSize = "8em";
                                            text.style.textAlign = "center";
                                            text.style.color = "Orange";
                                        },1000)
                                    }) 
                                },1000)  
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)  
    }, 1000)
}, 1000)
