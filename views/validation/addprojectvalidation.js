function validateaddproject(form) {
    var name = form.nametext;
    var projectLink = form.projectLinktext;
    var projectImageLink = form.projectImageLinktext;
    var description = form.descriptiontext;


    var nameError = document.getElementById("nameError");
    var projectLinkError = document.getElementById("projectLinkError");
    var projectImageLinkError = document.getElementById("projectImageLinkError");
    var descriptionError = document.getElementById("descriptionError");


    var projectlingreg = new RegExp();
    projectlingreg = /(https:|http:)+\/\/+[a-z0-9_\.\-]/i; //https://mina
    var imagelinkreg = new RegExp();
    imagelinkreg = /((https|http)?:\/\/.*\.(?:png|jpg)))/i //https://mina.jpg



    nameError.innerText = "";
    projectLinkError.innerText = "";
    projectImageLinkError.innerText = "";
    descriptionError.innerText = "";


    name.style.borderColor = "rgb(1, 119, 109)";
    projectLink.style.borderColor = "rgb(1, 119, 109)";
    projectImageLink.style.borderColor = "rgb(1, 119, 109)";
    description.style.borderColor = "rgb(1, 119, 109)";


    if (name.value == "") {
        nameError.innerText = "name is required";
        name.style.borderColor = "red";
        return false;
    } else if (projectLink.value == "" || !projectlingreg.test(projectLink.value)) {
        projectLinkError.innerText = "invaled project Link";
        projectLink.style.borderColor = "red";
        return false;

    } else if (projectImageLink.value == "" || !imagelinkreg.test(projectImageLink.value)) {
        projectImageLinkError.innerText = "invaled Image Link";
        projectImageLink.style.borderColor = "red";
        return false;

    } else if (description.value == "") {
        descriptionError.innerText = "description is required";
        description.style.borderColor = "red";
        return false;
    } else {
        nameError.innerText = "";
        projectLinkError.innerText = "";
        projectImageLinkError.innerText = ""
        descriptionError.innerText = "";
        return true;
    }
}