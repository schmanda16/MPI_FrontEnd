$('#page-header').load('../components/navbar.html');
$('#body').load('../components/body.html');
$('#page-footer').load('../components/footer.html');


window.onload = function () {
    var classCardList = document.getElementsByClassName('class-card');
    for (var i = 0; i < classCardList.length; i++) {
        var src = classCardList[i].getAttribute('data-image-src');
        classCardList[i].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(\'' + src + '\')';
    }

    var heroList = document.getElementsByClassName('hero');
    for (var i = 0; i < heroList.length; i++) {
        var src = heroList[i].getAttribute('data-image-src');
        var rgba = heroList[i].getAttribute('data-color-src');
        heroList[i].style.backgroundImage = 'linear-gradient('+ rgba +',' + rgba + '),url(\'' + src + '\')';
    }

    var headerImageList = document.getElementsByClassName('member-header-image');
    for (var i = 0; i < headerImageList.length; i++) {
        var src = headerImageList[i].getAttribute('data-image-src');
        headerImageList[i].style.backgroundImage = 'url(\'' + src + '\')';
    }
}

$(function () { $('[data-toggle=\'tooltip\']').tooltip(); });


// $(function() {
//   $(document).click(function (event) {
//     $('.navbar-collapse').collapse('hide');
//   })
// });