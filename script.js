function kontrolEt() {

    var girilenKod = document.getElementById("kod").value;

    if (girilenKod == "watchmen") {
        window.location.href = "january.html";
    }

    else if (girilenKod == "deltarune") {
        window.location.href = "february.html";
    }

    else if (girilenKod == "marchfn") {
        window.location.href = "march.html";
    }

    else if (girilenKod == "aprilfn") {
        window.location.href = "april.html";
    }

    else if (girilenKod == "mayfn") {
        window.location.href = "may.html";
    }

    else if (girilenKod == "junefn") {
        window.location.href = "june.html";
    }

    else if (girilenKod == "julyfn") {
        window.location.href = "july.html";
    }

    else if (girilenKod == "augustfn") {
        window.location.href = "august.html";
    }

    else if (girilenKod == "septemberfn") {
        window.location.href = "september.html";
    }

    else {
        document.getElementById("mesaj").innerHTML = "Tekrar dene.";
    }
}
