var font = "Georgia"

function fontTag(tag) {
    var elem = document.getElementsByTagName(tag);
    var length = elem.length;
    while(length--) {
        var e = elem[length];
        e.style.fontFamily = font + ",serif";
    }
}

document.body.style.fontFamily = font + ",serif";
fontTag('p')
fontTag('h1')
fontTag('h2')
fontTag('h3')
fontTag('h4')
fontTag('h5')
fontTag('h6')
fontTag('input')
fontTag('a')
fontTag('button')
fontTag('select')