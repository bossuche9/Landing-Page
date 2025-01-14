const myImage = document.querySelector("Img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "https://media.licdn.com/dms/image/v2/D4E03AQGLvm6VTLisGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729208356679?e=1741219200&v=beta&t=RLWNvcG6N7BGbCpKHwVJCleMWI-WktRAea9Fa5sNMac") {
        myImage.setAttribute("src", "images/Mysite.png");
    } else{
        myImage.setAttribute("src", "https://media.licdn.com/dms/image/v2/D4E03AQGLvm6VTLisGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729208356679?e=1741219200&v=beta&t=RLWNvcG6N7BGbCpKHwVJCleMWI-WktRAea9Fa5sNMac")
    }
});