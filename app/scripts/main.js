$('#page-header').load('../components/navbar.html');
$('#body').load('../components/body.html');
$('#page-footer').load('../components/footer.html');


window.onload = function () {
    var list = document.getElementsByClassName('class-card');

    for (var i = 0; i < list.length; i++) {
        var src = list[i].getAttribute('data-image-src');
        list[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('" + src + "')";
    }
}


// $(function() {
//   $(document).click(function (event) {
//     $('.navbar-collapse').collapse('hide');
//   })
// });