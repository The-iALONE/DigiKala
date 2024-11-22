let isOpen1 = false;
function toggleCollapse1() {
    const container = document.getElementById('container1');
    const icon = document.getElementById('icon111');
    const existingContent = document.getElementById('content111');

    if (isOpen1) {
        if (existingContent) {
            container.removeChild(existingContent);
        }
        icon.classList.remove('up'); 
    } else {
        const contentHTML = `
                <div class="collapse-contentOrBottom Divcontent1" id="content111">
                    <a class="collapse-contentOrBottom-content" href="#">اتاق خبر دیجی‌کالا</a>
                    <a class="collapse-contentOrBottom-content" href="#">فروش در دیجی‌کالا</a>
                    <a class="collapse-contentOrBottom-content" href="#">فرصت‌های شغلی</a>
                    <a class="collapse-contentOrBottom-content" href="#">گزارش تخلف در دیجی‌کالا</a>
                    <a class="collapse-contentOrBottom-content" href="#">تماس با دیجی‌کالا</a>
                    <a class="collapse-contentOrBottom-content" href="#">درباره دیجی‌کالا</a>
                </div>
            `;
        container.insertAdjacentHTML('beforeend', contentHTML);
        icon.classList.add('up'); 
    }

    isOpen1 = !isOpen1;
}



let isOpen2 = false;
function toggleCollapse2() {
    const container = document.getElementById('container2');
    const icon = document.getElementById('icon222');
    const existingContent = document.getElementById('content222');

    if (isOpen2) {
        if (existingContent) {
            container.removeChild(existingContent);
        }
        icon.classList.remove('up'); 
    } else {
        const contentHTML = `
                <div class="collapse-contentOrBottom Divcontent1" id="content222">
                    <a class="collapse-contentOrBottom-content" href="#">پاسخ به پرسش‌های متداولا</a>
                    <a class="collapse-contentOrBottom-content" href="#">رویه‌های بازگرداندن کالا</a>
                    <a class="collapse-contentOrBottom-content" href="#">شرایط استفاده</a>
                    <a class="collapse-contentOrBottom-content" href="#">حریم خصوصی</a>
                    <a class="collapse-contentOrBottom-content" href="#">گزارش باگ</a>
                </div>
            `;
        container.insertAdjacentHTML('beforeend', contentHTML);
        icon.classList.add('up'); 
    }

    isOpen2 = !isOpen2;
}



let isOpen3 = false;
function toggleCollapse3() {
    const container = document.getElementById('container3');
    const icon = document.getElementById('icon333');
    const existingContent = document.getElementById('content333');

    if (isOpen3) {
        if (existingContent) {
            container.removeChild(existingContent);
        }
        icon.classList.remove('up'); 
    } else {
        const contentHTML = `
                <div class="collapse-contentOrBottom Divcontent1" id="content333">
                    <a class="collapse-contentOrBottom-content" href="#">نحوه ثبت سفارش</a>
                    <a class="collapse-contentOrBottom-content" href="#">رویه ارسال سفارش‌</a>
                    <a class="collapse-contentOrBottom-content" href="#">شیوه‌های پرداخت</a>
                </div>
            `;
        container.insertAdjacentHTML('beforeend', contentHTML);
        icon.classList.add('up'); 
    }

    isOpen3 = !isOpen3;
}




let isOpen4 = false;
function toggleCollapse4() {
    const container = document.getElementById('container4');
    const icon = document.getElementById('icon444');
    const existingContent = document.getElementById('content444');

    if (isOpen4) {
        if (existingContent) {
            container.removeChild(existingContent);
        }
        icon.classList.remove('up'); 
    } else {
        const contentHTML = `
                <div class="collapse-contentOrBottom Divcontent1" id="content444">
                    <div class="w-full">
                        <div class="businessPartners-mobile">
                         <a class="businessPartners-Partner" href="#" style="border-right: none">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digimag.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digipay.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digistyle.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digiplus.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digiclub.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/jet.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/magnet.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digiMehr.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#" style="border-right: none">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/diginext.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digiexpress.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/ganjeh.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digify.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/smartech.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digikala-business.svg" />
                            </div>
                        </a>
                        <a class="businessPartners-Partner" href="#">
                            <div class="businessPartners-Img-Svg-Cont">
                                <img class="businessPartners-Img" src="Images/DjPartners-img/digikala-service.svg" />
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            `;
        container.insertAdjacentHTML('beforeend', contentHTML);
        icon.classList.add('up'); 
    }

    isOpen4 = !isOpen4;
}




window.addEventListener('scroll', function () {
    const supermarketDiv = document.querySelector('.pc-Mobile-SuperMarket');
    const targetSection = document.getElementById('p4ic');
    const centerDiv = document.querySelector('.pc-Mobile-SuperMarket-center');

    const supermarketRect = supermarketDiv.getBoundingClientRect();
    const targetRect = targetSection.getBoundingClientRect();

    if (supermarketRect.top <= targetRect.top) {
        centerDiv.classList.add('MaxIM');
        centerDiv.classList.remove('WH0');
    } else {
        centerDiv.classList.remove('MaxIM');
        centerDiv.classList.add('WH0');
    }
});


let supermarketRectisHidden = false;

window.addEventListener('scroll', function () {
    const supermarketDiv = document.querySelector('.Mobile-fix-bottom');
    const targetSection = document.querySelector('.Pishnehadshegeftangiz-container');

    const supermarketRect = supermarketDiv.getBoundingClientRect();
    const targetRect = targetSection.getBoundingClientRect();
    const buffer = 50;

    if (supermarketRect.bottom <= targetRect.bottom - buffer && !supermarketRectisHidden) {
        supermarketDiv.style.bottom = "-6rem";
        supermarketRectisHidden = true;
    } else if (supermarketRect.top > targetRect.bottom + buffer && supermarketRectisHidden) {
        supermarketDiv.style.bottom = "3.7rem";
        supermarketRectisHidden = false;
    }
});



let lastScrollTop = 0;  
let TopNavisHidden = false;

window.addEventListener('scroll', function () {
    const headerDiv = document.querySelector('.shadow-bottom1');
    const PCnav = document.querySelector('.PCnav');
    const targetSection = document.getElementById('splideDJslider');

    const supermarketRect = headerDiv.getBoundingClientRect();
    const targetRect = targetSection.getBoundingClientRect();
    const buffer = 5;

    headerDiv.style.transition = 'height, opacity 0.3s ease 0s, -webkit-transform 0.3s ease 0s';

    if (supermarketRect.top < targetRect.top - buffer) {
        headerDiv.style.height = "168px";  
        PCnav.style.opacity = '1';
        TopNavisHidden = false; 
    }

    else if (supermarketRect.top >= targetRect.top + buffer) {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            headerDiv.style.height = "132px";  
            PCnav.style.opacity = '0';
            TopNavisHidden = true;  
        } else {
            headerDiv.style.height = "168px";  
            PCnav.style.opacity = '1';
            TopNavisHidden = false;  
        }
        lastScrollTop = currentScrollTop;  
    }
});

function mobileHeaderSearchHeght() {

    const bodyHeight = document.getElementById('mainContainer').clientHeight;
    const headerSearch = document.querySelector('.MobileHeader');
    headerSearch.style.height = bodyHeight + 'px';
};
mobileHeaderSearchHeght();

window.addEventListener('load', mobileHeaderSearchHeght);

window.addEventListener('resize', mobileHeaderSearchHeght);