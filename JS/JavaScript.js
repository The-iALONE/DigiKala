document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('AppMobile').style.display = 'none';
    document.querySelector('.main-body').style.paddingTop = "100px"
});



    function updateFooterContent() {
        const footer = document.getElementById('footer'); 

        if (window.innerWidth >= 1024) {
            footer.classList.remove('footer-Dj-Mobile');
            footer.classList.add('footer-Dj-pc');
            footer.innerHTML = `<div class="footer-Top">
                    <div class="djAndBackToUp">
                        <div style="width: 195px; height: 30px; line-height: 0; margin-left: 16px; ">
                            <img src="../Images/SVG/full-horizontal.svg" alt="لوگوی دیجیکالا" width="195" height="30" style="object-fit:contain;">
                        </div>
                        <button class="backToUpButton">
                            <div class=" items-center grow justify-center flex">
                                <span class="backToUpButton-text">بازگشت به بالا</span>
                                <div class="flex">
                                    <svg style="width: 24px; height: 24px; fill: #a1a3a8;">
                                        <use href="../Images/SVG/up.svg#expandLess"></use>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="information">
                        <p class="shrink-0">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                        <div class="line-InFooter">|</div>
                        <p class="shrink-0">۰۲۱-۹۱۰۰۰۱۰۰</p>
                        <div class="line-InFooter">|</div>
                        <p class="shrink-0">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                    </div>
                    <div class="aboutDelivery">
                        <a class="aboutDelivery-item" href="#">
                            <div style="width: 56px; height: 56px; line-height: 0;">
                                <img style="display: inline-block; object-fit: cover; width: 100%; " src="Images/SVG/اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس.svg" />
                            </div>
                            <p class="aboutDelivery-item-text">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
                        </a>
                        <a class="aboutDelivery-item" href="#">
                            <div style="width: 56px; height: 56px; line-height: 0;">
                                <img style="display: inline-block; object-fit: cover; width: 100%; " src="Images/SVG/امکان پرداخت در محل.svg" />
                            </div>
                            <p class="aboutDelivery-item-text">امکان پرداخت در محل</p>
                        </a>
                        <a class="aboutDelivery-item" href="#">
                            <div style="width: 56px; height: 56px; line-height: 0;">
                                <img style="display: inline-block; object-fit: cover; width: 100%; " src="Images/SVG/۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ.svg" />
                            </div>
                            <p class="aboutDelivery-item-text">۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
                        </a>
                        <a class="aboutDelivery-item" href="#">
                            <div style="width: 56px; height: 56px; line-height: 0;">
                                <img style="display: inline-block; object-fit: cover; width: 100%; " src="Images/SVG/هفت روز ضمانت بازگشت کالا.svg" />
                            </div>
                            <p class="aboutDelivery-item-text">هفت روز ضمانت بازگشت کالا</p>
                        </a>
                        <a class="aboutDelivery-item" href="#">
                            <div style="width: 56px; height: 56px; line-height: 0;">
                                <img style="display: inline-block; object-fit: cover; width: 100%; " src="Images/SVG/ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ.svg" />
                            </div>
                            <p class="aboutDelivery-item-text">ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
                        </a>
                    </div>
                    <div class="djSocialMedia">
                        <div class="djSocialMedia-item">
                            <p class="djSocialMedia-item-text-head">با دیجی‌کالا</p>
                            <a class="djSocialMedia-item-text">اتاق خبر دیجی‌کالا</a>
                            <a class="djSocialMedia-item-text">فروش در دیجی‌کالا‌</a>
                            <a class="djSocialMedia-item-text">فرصت‌های شغلی‌‌</a>
                            <a class="djSocialMedia-item-text">‌گزارش تخلف در دیجی‌کالا‌‌</a>
                            <a class="djSocialMedia-item-text">‌تماس با دیجی‌کالا‌‌</a>
                            <a class="djSocialMedia-item-text">‌درباره دیجی‌کالا‌‌</a>
                        </div>
                        <div class="djSocialMedia-item">
                            <p class="djSocialMedia-item-text-head">خدمات مشتریان</p>
                            <a class="djSocialMedia-item-text">پاسخ به پرسش‌های متداول</a>
                            <a class="djSocialMedia-item-text">رویه‌های بازگرداندن کالا‌‌</a>
                            <a class="djSocialMedia-item-text">‌شرایط استفاده‌‌</a>
                            <a class="djSocialMedia-item-text">‌حریم خصوصی‌‌</a>
                            <a class="djSocialMedia-item-text">‌گزارش باگ‌</a>
                        </div>
                        <div class="djSocialMedia-item">
                            <p class="djSocialMedia-item-text-head">راهنمای خرید از دیجی‌کالا</p>
                            <a class="djSocialMedia-item-text">نحوه ثبت سفارش</a>
                            <a class="djSocialMedia-item-text">‌رویه ارسال سفارش‌‌</a>
                            <a class="djSocialMedia-item-text">‌شیوه‌های پرداخت‌‌</a>
                        </div>
                        <div id="beWithUs">
                            <div class="beWithUs-Container">
                                <h4 class="beWithUs-text-head">همراه ما باشید!</h4>
                                <div class="beWithUs-socialMedia">
                                    <a href="#" style="margin-left: 32px;">
                                        <div>
                                            <svg style="width: 40px; height: 40px; fill: #a1a3a8;">
                                                <use href="../Images/SVG/instagram.svg#instagram"></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="#" style="margin-left: 32px;">
                                        <div>
                                            <svg style="width: 40px; height: 40px; fill: #a1a3a8;">
                                                <use href="../Images/SVG/x.svg#twitter"></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="#" style="margin-left: 32px;">
                                        <div>
                                            <svg style="width: 40px; height: 40px; fill: #a1a3a8;">
                                                <use href="../Images/SVG/linkedin.svg#linkedin"></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="#" style="margin-left: 32px;">
                                        <div>
                                            <svg style="width: 40px; height: 40px; fill: #a1a3a8;">
                                                <use href="../Images/SVG/aparat.svg#aparat"></use>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="sabtEmail">
                                <h4 class="beWithUs-text-head">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h4>
                                <div class="flex items-center w-full">
                                    <div class="flex w-full">
                                        <div class="sabtEmail-Input-Container">
                                            <div class="sabtEmail-Input-textArea">
                                                <div style="flex-grow: 1;">
                                                    <input id="sabtEmail-Input" type="email" name="UserEmail" value="" placeholder="ایمیل شما" />
                                                </div>
                                            </div>
                                        </div>
                                        <button id="sabtEmail-SabtButton">
                                            <div id="sabtEmail-SabtButton-text">ثبت</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="installApp">
                        <div class="installDjApp">
                            <div class="shrink-0" style="width: 44px; height: 44px; line-height: 0;">
                                <img style="object-fit: cover; width: 100%; display: inline-block; width: 44px; height: 44px;" src="Images/installApp/footerlogo2.png" />
                            </div>
                            <div class="installDjApp-text"> دانلود اپلیکیشن دیجی‌کالا</div>
                        </div>
                        <div class="downloadWays">
                            <div class="downloadWays-Container">
                                <a class="downloadWays-way" href="#">
                                    <div style="height: 44px; border-radius: 4px; line-height: 0;">
                                        <img style="object-fit: contain; border-radius: 4px; width: 100%; height: 44px; display: inline-block; " src="Images/installApp/دریافت از کافه_بازار.svg" />
                                    </div>
                                </a>
                                <a class="downloadWays-way" href="#">
                                    <div style="height: 44px; border-radius: 4px; line-height: 0;">
                                        <img style="object-fit: contain; border-radius: 4px; width: 100%; height: 44px; display: inline-block; " src="Images/installApp/دریافت از مایکت.svg" />
                                    </div>
                                </a>
                                <a class="downloadWays-way" href="#">
                                    <div style="height: 44px; border-radius: 4px; line-height: 0;">
                                        <img style="object-fit: contain; border-radius: 4px; width: 100%; height: 44px; display: inline-block; " src="Images/installApp/دریافت از سیب_اپ.svg" />
                                    </div>
                                </a>
                            </div>
                            <a class="moreWays" href="#">
                                <div class="moreWays-3point-imgCont">
                                    <img class="moreWays-3Point-img" src="Images/SVG/more.svg" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="aboutOnlineShopDJ">
                        <div style="flex-grow: 1;">
                            <div id="carousel-id" class="carousel-id carousel carousel-hidden carousel-style carousel-style-UnWithe">
                                <h1 style=" font-size: 1.2rem; margin-bottom: 0px; line-height: 2.1; color: #62666d;"><strong>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</strong></h1>
                                <p>
                                    یک خرید  اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                                    <br />

                                    یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
                                </p>
                                <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>
                                <p>
                                    تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان
                                    ارسال امروز
                                    برای آن ها وجود دارد.
                                </p>
                                <p>کالای دیجیتال</p>
                                <p>
                                    انواع گوشی موبایل از برندهای مختلفی مثل آیفون،
                                    <a class="carousel-style-a-text" href="#">گوشی سامسونگ</a>
                                    ،
                                    <a class="carousel-style-a-text" href="#">گوشی نوکیا</a>
                                    ،
                                    <a class="carousel-style-a-text" href="#">گوشی شیائومی</a>
                                    ،
                                    <a class="carousel-style-a-text" href="#">گوشی هواوی</a>
                                    ،
                                    ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل
                                    <a class="carousel-style-a-text" href="#">تبلت سامسونگ</a>
                                    نوت 10، انواع هندزفری مثل
                                    <a class="carousel-style-a-text" href="#">هندزفری بی سیم</a>
                                    ،
                                    <a class="carousel-style-a-text" href="#">تلوزیون</a>
                                    از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
                                </p>
                                <p>خودرو، ابزار و تجهیزات صنعتی</p>
                                <p>انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند.</p>
                                <h2 class="carousel-style-h2-text">مد و پوشاک</h2>
                                <p>محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.</p>
                                <h2 class="carousel-style-h2-text">اسباب بازی کودک و نوزاد</h2>
                                <p>
                                    در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش،
                                    <a class="carousel-style-a-text" href="#">تبلت</a>
                                    ،
                                    <a class="carousel-style-a-text" href="#">اسباب‌بازی</a>
                                    ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.
                                </p>
                                <p>کالاهای سوپر مارکتی</p>
                                <p>
                                    هر چیزی از مواد خوراکی که به آن نیاز دارید، در
                                    <a class="carousel-style-a-text" href="#">‌سوپرمارکت</a>
                                    دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
                                </p>
                                <h2 class="carousel-style-h2-text">زیبایی و سلامت</h2>
                                <p>
                                    انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو،
                                    <a class="carousel-style-a-text" href="#">‌کرم ضد آفتاب</a>
                                    ، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری،
                                    <a class="carousel-style-a-text" href="#">‌کرم پودر</a>
                                    ، ریمل و رژلب وانواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.همچنین میتوانید انواع مکمل غذایی و دارویی مثل داروی مناسب
                                    <a class="carousel-style-a-text" href="#">سرماخوردگی</a>
                                    را در دیجی کالا تهیه کنید.
                                </p>
                                <p>خانه و آشپزخانه</p>
                                <p>یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.</p>
                                <p>کتاب، لوازم تحریر و هنر</p>
                                <p>بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند.</p>
                                <p>ورزش و سفر</p>
                                <p>هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و وسایل سفر اربعین و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.</p>
                                <p>محصولات بومی و محلی</p>
                                <p>و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>
                            </div>
                            <button id="toggleBtn" class="toggleBtn toggleBtn-style" onclick="CarouselsOpenClose()" style="float: right;">
                                <span id="toggleBtn-text" class="toggleBtn-text" >مشاهده بیشتر</span>
                                <div class="flex">
                                    <svg style="width: 18px; height: 18px; fill: #19bfd3;">
                                        <use href="../Images/SVG/leftblue.svg#chevronLeft"></use>
                                    </svg>
                                </div>
                            </button>
                        </div>   
                        <div class="trustWays">
                            <div class="trustWays-item">
                                <div style="width: 75px; height: 75px; line-height: 0;">
                                    <img style="object-fit: contain; width: 100%; display: inline-block;" src="Images/trustWaysFo/rezi.png" />
                                </div>
                            </div>
                            <div class="trustWays-item">
                                <div style="width: 75px; height: 75px; line-height: 0;">
                                    <img style="object-fit: contain; width: 75px; height:75px; display: inline-block;" src="Images/trustWaysFo/kasbokar.png" />
                                </div>
                            </div>
                            <div class="trustWays-item">
                                <div style="width: 75px; height: 75px; line-height: 0;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Dj-CopyRight">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</div>
                </div>              
                <div class="businessPartners">
                    <div class="businessPartners-Container">
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
                </div>`;
        } else {
            footer.classList.remove('footer-Dj-pc');
            footer.classList.add('footer-Dj-Mobile');
            footer.innerHTML = `
            <button class="backToUp">
                    <div class="backToUp-Content-Container">
                        بازگشت به بالا
                        <div class="backToUp-svg">
                            <svg style="width: 24px; height: 24px; fill: #19bfd3">
                                <use xlink:href="../Images/SVG/BackToUp.svg#expandLess"></use>
                            </svg>
                        </div>
                    </div>
                </button>
                <div>
                    <div class="djAppAndSupport-Containers">
                        <div class="djAppAndSupport-right-Container">
                            <div class="djAAST-right-right">
                                <div class="flex">
                                    <img style="width: 24px; height: 25px;" src="Images/SVG/SupportSVG.png" />
                                </div>
                            </div>
                            <div class="djAAST-right-left">
                                <span style="font-size: .65rem; text-align: right; -webkit-text-stroke: 0.2px; letter-spacing: .3px; ">۷ روز هفته، ۲۴ ساعت</span>
                                <span style="display: block; font-size: .85rem; -webkit-text-stroke: 0.4px; line-height: 2.15; letter-spacing: .5px;">تماس با پشتیبانی</span>
                            </div>
                        </div>
                        <a class="djAppAndSupport-left-Container" href="#">
                            <div class="djAppAndSupport-linkAndCall-Text">تماس</div>
                        </a>
                    </div>
                    <div class="djAppAndSupport-Containers">
                        <div class="djAppAndSupport-right-Container">
                            <div class="djAAST-right-right">
                                <div style="width: 44px; height: 44px; line-height: 0; flex-shrink: 0;">
                                    <img style="object-fit: cover; width: 100%; display: inline-block;" width="44" height="44" src="../Images/Logo.png" alt="" />
                                </div>
                            </div>
                            <div class="djAAST-right-left">
                                <span style="font-size: .65rem; text-align: right; -webkit-text-stroke: 0.2px; letter-spacing: .2px; ">تجربه خرید بهتر در</span>
                                <span style="display: block; font-size: .85rem; -webkit-text-stroke: 0.4px; line-height: 2.15; letter-spacing: .5px;">اپلیکیشن دیجی‌کالا</span>
                            </div>
                        </div>
                        <button class="djAppAndSupport-left-Container" href="#" style="background-color: #0c0c0c; color: #fff;">
                            <div class="djAppAndSupport-linkAndCall-Text">دانلود</div>
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="container1 collapse-Style" id="container1">
                            <button class="card-header-1" id="toggleButton1" onclick="toggleCollapse1()">
                                <div class="collapse-content-spacer">
                                    <p class="collapse-content-text">
                                        <span class="relative">با دیجی‌کالا</span>
                                    </p>
                                    <div class="collapse-content-svg-Cont">
                                        <svg class="collapse-content-svg" id="icon111">
                                            <use class="icon-svg-collapse1" href="../Images/SVG/UPMob.svg#chevronUp"></use>
                                        </svg>
                                    </div>
                                </div>
                            </button>


                        </div>
                        <div class="container1 collapse-Style" id="container2">
                            <button class="card-header-1" id="toggleButton2" onclick="toggleCollapse2()">
                                <div class="collapse-content-spacer">
                                    <p class="collapse-content-text">
                                        <span class="relative">خدمات مشتریان</span>
                                    </p>
                                    <div class="collapse-content-svg-Cont">
                                        <svg class="collapse-content-svg" id="icon222">
                                            <use class="icon-svg-collapse1" href="../Images/SVG/UPMob.svg#chevronUp"></use>
                                        </svg>
                                    </div>
                                </div>
                            </button>


                        </div>
                        <div class="container1 collapse-Style" id="container3">
                            <button class="card-header-1" id="toggleButton2" onclick="toggleCollapse3()">
                                <div class="collapse-content-spacer">
                                    <p class="collapse-content-text">
                                        <span class="relative">راهنمای خرید از دیجی‌کالا</span>
                                    </p>
                                    <div class="collapse-content-svg-Cont">
                                        <svg class="collapse-content-svg" id="icon333">
                                            <use class="icon-svg-collapse1" href="../Images/SVG/UPMob.svg#chevronUp"></use>
                                        </svg>
                                    </div>
                                </div>
                            </button>


                        </div>
                        <div class="container1 collapse-Style" id="container4">
                            <button class="card-header-1" id="toggleButton4" onclick="toggleCollapse4()">
                                <div class="collapse-content-spacer">
                                    <p class="collapse-content-text">
                                        <span class="relative">شرکای تجاری</span>
                                    </p>
                                    <div class="collapse-content-svg-Cont">
                                        <svg class="collapse-content-svg" id="icon444">
                                            <use class="icon-svg-collapse1" href="../Images/SVG/UPMob.svg#chevronUp"></use>
                                        </svg>
                                    </div>
                                </div>
                            </button>


                        </div>
                    </div>
                </div>
                <div style="flex-grow: 1; margin-top: 12px;">
                    <div id="carousel-id" class="carousel carousel-id carousel-hidden carousel-style carousel-style-UnWithe" style=" margin-left: 0px; height: 70px; ">
                        <h1 style="font-size: 12px; margin-bottom: 8px; line-height: 20.73px; color: #424750; "><strong>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</strong></h1>
                        <p>
                            یک خرید  اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                            <br>

                            یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
                        </p>
                        <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>
                        <p>
                            تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان
                            ارسال امروز
                            برای آن ها وجود دارد.
                        </p>
                        <p>کالای دیجیتال</p>
                        <p>
                            انواع گوشی موبایل از برندهای مختلفی مثل آیفون،
                            <a class="carousel-style-a-text" href="#">گوشی سامسونگ</a>
                            ،
                            <a class="carousel-style-a-text" href="#">گوشی نوکیا</a>
                            ،
                            <a class="carousel-style-a-text" href="#">گوشی شیائومی</a>
                            ،
                            <a class="carousel-style-a-text" href="#">گوشی هواوی</a>
                            ،
                            ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل
                            <a class="carousel-style-a-text" href="#">تبلت سامسونگ</a>
                            نوت 10، انواع هندزفری مثل
                            <a class="carousel-style-a-text" href="#">هندزفری بی سیم</a>
                            ،
                            <a class="carousel-style-a-text" href="#">تلوزیون</a>
                            از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
                        </p>
                        <p>خودرو، ابزار و تجهیزات صنعتی</p>
                        <p>انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند.</p>
                        <h2 class="carousel-style-h2-text">مد و پوشاک</h2>
                        <p>محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.</p>
                        <h2 class="carousel-style-h2-text">اسباب بازی کودک و نوزاد</h2>
                        <p>
                            در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش،
                            <a class="carousel-style-a-text" href="#">تبلت</a>
                            ،
                            <a class="carousel-style-a-text" href="#">اسباب‌بازی</a>
                            ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.
                        </p>
                        <p>کالاهای سوپر مارکتی</p>
                        <p>
                            هر چیزی از مواد خوراکی که به آن نیاز دارید، در
                            <a class="carousel-style-a-text" href="#">‌سوپرمارکت</a>
                            دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
                        </p>
                        <h2 class="carousel-style-h2-text">زیبایی و سلامت</h2>
                        <p>
                            انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو،
                            <a class="carousel-style-a-text" href="#">‌کرم ضد آفتاب</a>
                            ، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری،
                            <a class="carousel-style-a-text" href="#">‌کرم پودر</a>
                            ، ریمل و رژلب وانواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.همچنین میتوانید انواع مکمل غذایی و دارویی مثل داروی مناسب
                            <a class="carousel-style-a-text" href="#">سرماخوردگی</a>
                            را در دیجی کالا تهیه کنید.
                        </p>
                        <p>خانه و آشپزخانه</p>
                        <p>یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.</p>
                        <p>کتاب، لوازم تحریر و هنر</p>
                        <p>بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند.</p>
                        <p>ورزش و سفر</p>
                        <p>هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و وسایل سفر اربعین و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.</p>
                        <p>محصولات بومی و محلی</p>
                        <p>و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                    </div>
                    <button id="toggleBtn" class="toggleBtn toggleBtn-style" onclick="CarouselsOpenClose()" style="float: right; color: #a1a3a8;">
                        <span id="toggleBtn-text" class="toggleBtn-text" style="font-size: .95rem; -webkit-text-stroke: 0.3px;">مشاهده بیشتر</span>
                        <div class="flex">
                            <svg style="width: 18px; height: 18px; fill: #a1a3a8; font-size: .95rem; -webkit-text-stroke: 0.3px;">
                                <use href="../Images/SVG/leftblue.svg#chevronLeft"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            `;
        }

    }


    window.addEventListener('load', updateFooterContent);

    window.addEventListener('resize', updateFooterContent);




function baseMobile() {
    const mainBody = document.querySelector('.main-body');
    const baseMobileContent = `
        <div class="baseMobileContent-style">
                <div class="baseMobileContent-items">
                    <a class="baseMobileContent-item" href="#">
                        <div class="flex">
                            <svg style="width: 24px; height: 24px; fill: #424750;">
                                <use xlink:href="../Images/SVG/homeBASE.svg#home1Fill"></use>
                            </svg>
                        </div>
                        <p style="color: #0c0c0c; font-size: .65rem;">خانه</p>
                    </a>
                    <a class="baseMobileContent-item" href="#">
                        <div class="flex">
                            <svg style="width: 24px; height: 24px; fill: #a1a3a8;">
                                <use xlink:href="../Images/SVG/DasteBandiBASE.svg#categoryOutline"></use>
                            </svg>
                        </div>
                        <p style="color: #a1a3a8; font-size: .65rem;">دسته‌بندی</p>
                    </a>
                    <a class="baseMobileContent-item" href="#">
                        <div class="flex">
                            <svg style="width: 24px; height: 24px; fill: #a1a3a8;">
                                <use xlink:href="../Images/SVG/SabadKharidBASE.svg#cartOff"></use>
                            </svg>
                        </div>
                        <p style="color: #a1a3a8; font-size: .65rem;">‌سبد خرید</p>
                    </a>
                    <a class="baseMobileContent-item" href="#">
                        <div class="flex">
                            <img src="Images/SVG/MagnetMobileMenuBarBASE.svg" style="width: 24px; height: 24px; fill: #a1a3a8;">
                        </div>
                        <p style="color: #a1a3a8; font-size: .65rem;">‌مگنت</p>
                    </a>
                    <a class="baseMobileContent-item" href="#">
                        <div class="flex">
                            <svg style="width: 24px; height: 24px; fill: #a1a3a8;">
                                <use xlink:href="../Images/SVG/MyDjBASE.svg#profileOff"></use>
                            </svg>
                        </div>
                        <p style="color: #a1a3a8; font-size: .65rem;">‌دیجی‌کالای من</p>
                    </a>
                </div>
            </div>
        `;
    let mobileDiv = document.querySelector('.baseMobileContent-style');

    if (window.innerWidth < 1024) {
        if (!mobileDiv) {
            mainBody.insertAdjacentHTML('beforeend', baseMobileContent); 
        }
    } else {
        if (mobileDiv) {
            mobileDiv.remove();
        }
    }
}

baseMobile();
window.addEventListener('resize', baseMobile);
function CarouselsOpenClose() {
    const toggleBtn = document.querySelector('.toggleBtn');
    const carousel = document.querySelector('.carousel-id');
    const toggleBtnText = document.querySelector('.toggleBtn-text');

    let CarouselisVisible = carousel.classList.contains('carousel-visible');
    if (!CarouselisVisible) {
        carousel.classList.remove('carousel-hidden');
        carousel.classList.remove('carousel-style-UnWithe')
        carousel.classList.add('carousel-visible');
        toggleBtnText.textContent = 'بستن';
    } else {
        carousel.classList.remove('carousel-visible');
        carousel.classList.add('carousel-style-UnWithe')
        carousel.classList.add('carousel-hidden');
        toggleBtnText.textContent = 'مشاهده بیشتر';
    } 
}