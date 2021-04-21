//Menu Mobile
var menuNav = document.querySelector(".menu-nav");
var menuIcon = document.querySelector(".menu-icon");
menuIcon.onclick = () => {
    menuNav.classList.toggle('menu-nav__active');
}

//Nav child menu
var headerNavItem = document.querySelectorAll(".header__nav-item");
var menu_Mbolie = window.matchMedia("(max-width: 991px)");

headerNavItem.forEach(function(item, index) {
    var navChildList = headerNavItem[index].querySelector(".nav-child__list");
    var numberClick = 1;
    item.onclick = () => {
        if(numberClick == 1 && menu_Mbolie.matches){
            navChildList.classList.add('nav-child__list-active');
            numberClick = 2;
        } else if(numberClick == 2 && menu_Mbolie.matches){
            navChildList.classList.remove('nav-child__list-active');
            numberClick = 1;
        }
    }
})


// var mobile = window.matchMedia("(min-width:320px) and (max-width:991px)");
// if(mobile.matches){

// }

//Header menu when scroll desktop
var header = document.querySelector('.header');
var getHeightHeder = header.clientHeight;
var getColorLogo = document.querySelector('.header__logo-text');
var getNav = document.getElementsByClassName('header__nav-item-link');
var getNavLength = getNav.length;
var getAddList = document.querySelector('.header__add-list-link');
var getAddListIcon = document.querySelector('.add-list__icon');
var getAddListText = document.querySelector('.add-list__text');
var menuDesktop = window.matchMedia("(min-width: 991px)");


window.addEventListener('scroll', function() {
    // console.log('scrolled');
    if(window.pageYOffset > 90 && menuDesktop.matches){
            header.classList.add('header__scrolled');
            getColorLogo.classList.add('color__scrolled-black');
            var index = 0;
            for(index; index < getNavLength; index++){
                getNav[index].classList.add('color__scrolled-black');
            }
            getAddList.classList.add('add__list-scrolled');
            getAddListIcon.classList.add('color__scrolled-white');
            getAddListText.classList.add('color__scrolled-white');

        } else{
        header.classList.remove('header__scrolled');
        getColorLogo.classList.remove('color__scrolled-black');
        var index = 0;
            for(index; index < getNavLength; index++){
                getNav[index].classList.remove('color__scrolled-black');
            }
        getAddList.classList.remove('add__list-scrolled');
        getAddListIcon.classList.remove('color__scrolled-white');
        getAddListText.classList.remove('color__scrolled-white');
    }
})

//button Property type
var btnType = document.querySelector('.search__item-btn-type');
btnType.onclick = function() {
    this.classList.toggle('btn-type--active');
}

//button Price

var btnPrice = document.querySelector('.search__item-btn-price');
btnPrice.onclick = function() {
    this.classList.toggle('btn-price--active');
}


var getPriceMin = document.querySelector('.price-min');
var getPriceMax = document.querySelector('.price-max');
var inputLeft = document.querySelector('#input-left');
var inputRight = document.querySelector('#input-right');
var range = document.querySelector('.range');
var thumbLeft = document.querySelector('.thumb.left');
var thumbRight = document.querySelector('.thumb.right');

//set Left value

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    getPriceMin.innerHTML = '$' + Math.floor(((percent*2000)/100 + 500));
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    getPriceMax.innerHTML = '$' + Math.floor(((percent*2000)/100 + 500));
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("thumb__active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("thumb__active");
});

inputRight.addEventListener("input", setRightValue);
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("thumb__active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("thumb__active");
});

//btn-advanced

var AdvancedBtnItem = document.querySelectorAll('.advanced-btn-option');
AdvancedBtnItem.forEach(function(item,index) {
    item.onclick = function() {
        this.classList.toggle('btn-option--active');
    }
})

var itemAdvanced = document.querySelector('.search__item-advanced ');
var advancedClosed = document.querySelector('.advanced__closed');
itemAdvanced.onclick = function() {
    this.classList.toggle('search__item-advanced--active');
}

advancedClosed.onclick = function() {
    itemAdvanced.classList.remove('search__item-advanced--active');
}

// slider featured post

var btnSlide = document.querySelectorAll(".btn-slide");
var itemSlide = document.querySelectorAll(".item-slide");
var itemPage = Math.ceil(itemSlide.length / 3)
var i=0;
var movePerItem = 104.7;
var m_320 = window.matchMedia("(min-width:320px) and (max-width:374px)");
var m_375 = window.matchMedia("(min-width:375px) and (max-width: 419px)");
var m_420 = window.matchMedia("(min-width:420px) and (max-width:520px)");
var m_521 = window.matchMedia("(min-width:521px) and (max-width:575px)");
var m_576 = window.matchMedia("(min-width:576px) and (max-width:767px)");
var m_768 = window.matchMedia("(min-width:767px) and (max-width:991px)");
var m_992 = window.matchMedia("(min-width:992px) and (max-width:1199px)");
if(m_320.matches){
    movePerItem = 105.305;
} else if(m_375.matches){
    movePerItem = 104.515;
}else if(m_420.matches){
    movePerItem = 103.8;
}else if(m_521.matches){
    movePerItem = 103.25;
}else if(m_576.matches){
    movePerItem = 103.05;
} else if(m_768.matches){
    movePerItem = 104.08;
} else if(m_992.matches){
    movePerItem = 105;
}


btnSlide[1].onclick = () => {
    i = i + movePerItem;
    for(var item of itemSlide){
        if((i > 525) && (movePerItem == 104.08)){ i = 0}
        if((i > 420) && (movePerItem == 105 || movePerItem == 104.7)){ i = 0}
        var moveLength = "-" + i + "%";
        item.style.transform = `translateX(${moveLength})`;
    }
}

btnSlide[0].onclick = () => {
    i = i - movePerItem;
    if(i < 0){ i = 0}
    for(var item of itemSlide) {
        if(itemPage > 1){
            var moveLength = "-" + i + "%";
            item.style.transform = `translateX(${moveLength})`;
        }
    }
}


//member slide

var memberTeam = document.querySelectorAll(".member-team");
var itemDotCircle = document.querySelectorAll(".btn-slide__dot i");
var mPM = 100;
itemDotCircle.forEach(function(m, n) {
    var _this = m;
    var lI = "-" + (mPM*n) + "%";
    m.onclick = () => {
        document.querySelector(".fas.member-active").classList.remove("member-active");
        _this.classList.add('member-active');
        for(var i of memberTeam){
            i.style.transform = `translateX(${lI})`;
        }
    }
})

