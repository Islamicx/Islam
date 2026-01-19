const recitersData = [
    { id: 'afs', name: 'مشاري العفاسي', server: 'https://server8.mp3quran.net/afs/' },
    { id: 'maher', name: 'ماهر المعيقلي', server: 'https://server12.mp3quran.net/maher/' },
    { id: 'sds', name: 'عبدالرحمن السديس', server: 'https://server11.mp3quran.net/sds/' },
    { id: 'dosari', name: 'ياسر الدوسري', server: 'https://server11.mp3quran.net/yasser/' },
    { id: 'ajm', name: 'أحمد العجمي', server: 'https://server10.mp3quran.net/ajm/' },
    { id: 'minsh', name: 'المنشاوي (مجود)', server: 'https://server10.mp3quran.net/minsh/' },
    { id: 'islam', name: 'اسلام صبحي', server: 'https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/' },
    { id: 'basit', name: 'عبدالباسط عبدالصمد', server: 'https://server7.mp3quran.net/basit/' },
    { id: 'kurdi', name: 'رعد الكردي', server: 'https://server6.mp3quran.net/kurdi/' },
    { id: 'shatri', name: 'أبو بكر الشاطري', server: 'https://server11.mp3quran.net/shatri/' },
    { id: 'khaled', name: 'خالد الجليل', server: 'https://server10.mp3quran.net/jleel/' },
    { id: 'fares', name: 'فارس عباد', server: 'https://server8.mp3quran.net/frs_a/' },
    { id: 'nasser', name: 'ناصر القطامي', server: 'https://server6.mp3quran.net/qtm/' },
    { id: 'hazza', name: 'هزاع البلوشي', server: 'https://server11.mp3quran.net/hazza/' },
    { id: 'wadie', name: 'وديع اليمني', server: 'https://server6.mp3quran.net/wdee/' },
    { id: 'mansour', name: 'منصور السالمي', server: 'https://server14.mp3quran.net/mansor/' },
    { id: 'yasser_q', name: 'ياسر القرشي', server: 'https://server9.mp3quran.net/qurashi/' },
    { id: 'ahmad_nu', name: 'أحمد النفيس', server: 'https://server16.mp3quran.net/nufais/' },
    { id: 'kanakeri', name: 'عبدالرشيد صوفي', server: 'https://server16.mp3quran.net/soufi/Rewayat-Khalaf-A-n-Hamzah/' },
    { id: 'shur', name: 'سعود الشريم', server: 'https://server7.mp3quran.net/shur/' },
    { id: 'banna', name: 'محمود علي البنا', server: 'https://server8.mp3quran.net/bna/' },
    { id: 'juhany', name: 'عبدالله الجهني', server: 'https://server13.mp3quran.net/jhn/' },
    { id: 'budair', name: 'صلاح البدير', server: 'https://server6.mp3quran.net/s_bud/' },
    { id: 'hudhaify', name: 'علي الحذيفي', server: 'https://server9.mp3quran.net/hthfi/' },
    { id: 'matroud', name: 'عبدالله مطرود', server: 'https://server8.mp3quran.net/mtrod/' },
    { id: 'bsfar', name: 'عبدالله بصفر', server: 'https://server6.mp3quran.net/bsfr/' },
    { id: 'refat', name: 'محمد رفعت', server: 'https://server14.mp3quran.net/refat/' },
    { id: 'tablawi', name: 'محمد الطبلاوي', server: 'https://server12.mp3quran.net/tblawi/' },
    { id: 'qazabri', name: 'عمر القزابري', server: 'https://server9.mp3quran.net/omar_warsh/' },
    { id: 'dokali', name: 'الدكالي محمد العالم', server: 'https://server7.mp3quran.net/dokali/' },
    { id: 'zamil', name: 'الزامل', server: 'https://server9.mp3quran.net/zamil/' },
    { id: 'ayyoub', name: 'محمد أيوب', server: 'https://server8.mp3quran.net/ayyoub/' },
    { id: 'muh_j', name: 'محمد جبريل', server: 'https://server8.mp3quran.net/jbrl/' },
    { id: 'saad', name: 'سعد الغامدي', server: 'https://server7.mp3quran.net/s_gmd/' },
    { id: 'salah_buk', name: 'صلاح بو خاطر', server: 'https://server8.mp3quran.net/bu_khtr/' },
    { id: 'hani', name: 'هاني الرفاعي', server: 'https://server8.mp3quran.net/hani/' },
    { id: 'thubaiti', name: 'عبدالبارئ الثبيتي', server: 'https://server6.mp3quran.net/thubti/' },
    { id: 'muh_l', name: 'محمد اللحيدان', server: 'https://server8.mp3quran.net/lhdan/' },
    { id: 'akdar', name: 'إبراهيم الأخضر', server: 'https://server6.mp3quran.net/akhdr/' },
    { id: 'ali_jaber', name: 'علي جابر', server: 'https://server11.mp3quran.net/a_jbr/' },
    { id: 'sowailim', name: 'عبدالعزيز السويلم', server: 'https://server14.mp3quran.net/sowailim/' },
    { id: 'khalifa', name: 'خليفة الطنيجي', server: 'https://server12.mp3quran.net/tunaiji/' },
    { id: 'alzain', name: 'الزين محمد أحمد', server: 'https://server9.mp3quran.net/alzain/' },
    { id: 'bilal', name: 'بلال دربالي', server: 'https://server14.mp3quran.net/bilal/' },
    { id: 'lafi', name: 'لافي العوني', server: 'https://server14.mp3quran.net/lafi/' },
    { id: 'harthi', name: 'محمد الحارثي', server: 'https://server14.mp3quran.net/m_harthi/' },
    { id: 'kandari', name: 'عبدالله الكندري', server: 'https://server10.mp3quran.net/kandari/' },
    { id: 'abdelhady', name: 'عبدالرحمن العوسي', server: 'https://server6.mp3quran.net/aloosi/' },
    { id: 'wael', name: 'وائل الدسوقي', server: 'https://server14.mp3quran.net/wael/' },
    { id: 'mustafa', name: 'مصطفى إسماعيل', server: 'https://server8.mp3quran.net/mustafa/' },
    { id: 'husary', name: 'الحصري (مرتل)', server: 'https://server13.mp3quran.net/husr/' },
    { id: 'awad', name: 'عوض الجهني', server: 'https://server11.mp3quran.net/awad/' },
    { id: 'moh_abd', name: 'محمد عبدالكريم', server: 'https://server12.mp3quran.net/m_krm/' },
    { id: 'moh_rashad', name: 'محمد رشاد الشريف', server: 'https://server10.mp3quran.net/rashad/' },
    { id: 'yousef', name: 'يوسف بن نوح', server: 'https://server8.mp3quran.net/noah/' },
    { id: 'khayat', name: 'عبدالله خياط', server: 'https://server12.mp3quran.net/khayat/' }
];

const azkarData = {
    morning: [
        { txt: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير", count: 1 },
        { txt: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور", count: 1 },
        { txt: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه", count: 3 },
        { txt: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ", count: 3 },
        { txt: "أَعـوذُ بِاللهِ مِنَ الشَّـيْطانِ الرَّجيـم: اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ...", count: 1 }
    ],
    evening: [
        { txt: "أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ", count: 1 },
        { txt: "اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِير", count: 1 },
        { txt: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق", count: 3 }
    ],
    sleep: [
        { txt: "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه", count: 1 },
        { txt: "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتُـها وَمَحْـياها", count: 1 }
    ],
    prayer: [
        { txt: "أَسْتَغْفِرُ اللهَ (ثلاثاً)", count: 3 },
        { txt: "اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام", count: 1 }
    ],
    mosque: [
        { txt: "بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", count: 1 }
    ],
    wudu: [
        { txt: "أَشْهَدُ أَنْ لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ", count: 1 }
    ]
};

const fullStoriesData = [
    {
        id: 1,
        title: "آدم عليه السلام",
        content: "بدأت القصة قبل وجود البشر، حين أخبر الله ملائكته بأنه جاعل في الأرض خليفة. تعجبت الملائكة وسألت: أتجعل فيها من يفسد فيها ويسفك الدماء؟ فأجابهم الله: إني أعلم ما لا تعلمون. <br><br>أمر الله جبريل بقبض قبضة من تراب الأرض، فخلق منها آدم، وسواه بيده، ونفخ فيه من روحه، فدبت فيه الحياة. ثم أمر الله الملائكة بالسجود لآدم تكريماً، فسجدوا جميعاً إلا إبليس، كان من الجن فاستكبر وقال: أنا خير منه، خلقتني من نار وخلقته من طين. <br><br>طرد الله إبليس من رحمته، فتوعد إبليس بإغواء آدم وذريته. أسكن الله آدم وزوجته حواء الجنة، وأباح لهما كل شيء إلا شجرة واحدة. وسوس لهما الشيطان وأقسم أنه ناصح أمين، فأكلا منها فبدت لهما سوءاتهما. تاب الله عليهما، لكنه أهبطهما إلى الأرض ليعمراها، لتبدأ رحلة البشرية في الاختبار والعبادة."
    },
    {
        id: 2,
        title: "إدريس عليه السلام",
        content: "هو إدريس بن يارد، أول نبي أرسل بعد آدم وشيث. وصفه الله في القرآن بالصدق والرفعة: (ورفعناه مكاناً علياً). قيل إنه أول من خط بالقلم، وأول من خاط الثياب ولبسها، وكان الناس قبله يلبسون الجلود. <br><br>عاش إدريس يدعو قومه إلى عبادة الله وحده ومكارم الأخلاق، وكان عالماً بالنجوم والحساب. رفعه الله إلى السماء الرابعة كما رآه النبي محمد صلى الله عليه وسلم في رحلة الإسراء والمعراج."
    },
    {
        id: 3,
        title: "نوح عليه السلام",
        content: "بعد وفاة آدم بقرون، انحرف الناس وعبدوا الأصنام (وداً وسواعاً ويغوث ويعوق ونسراً). أرسل الله نوحاً عليه السلام، أول أولي العزم من الرسل، ليدعوهم لترك عبادة الأصنام. <br><br>ظل نوح يدعو قومه 950 سنة، فلم يزدهم دعاؤه إلا فراراً. سخروا منه واتهموه بالجنون. أوحى الله لنوح أنه لن يؤمن من قومه إلا من قد آمن، وأمره بصناعة سفينة عظيمة في الصحراء. <br><br>كان الكفار يمرون به ويسخرون: يا نوح صرت نجاراً بعد أن كنت نبياً! وحين فار التنور، أمر الله نوحاً أن يحمل من كل زوجين اثنين ومن آمن معه. فتحت أبواب السماء بماء منهمر وتفجرت الأرض عيوناً، فغرق كل شيء، حتى ابن نوح الذي رفض ركوب السفينة. نجت السفينة واستوت على الجودي."
    },
    {
        id: 4,
        title: "هود عليه السلام",
        content: "أرسل الله هوداً إلى قوم عاد، وهم عرب يسكنون 'الأحقاف' (بين اليمن وعمان). كانوا عمالقة في الأجسام، أقوياء، يبنون المصانع والقصور، ويقولون: من أشد منا قوة؟ <br><br>دعاهم هود لعبادة الله وترك الظلم، فكذبوه وقالوا: جئتنا لنعبد الله وحده ونذر ما كان يعبد آباؤنا؟ فأرسل الله عليهم ريحاً صرصراً عاتية (شديدة البرودة والصوت) سبع ليال وثمانية أيام حسوماً، فدمرت كل شيء وتركتهم كأعجاز نخل خاوية. نجى الله هوداً والذين آمنوا معه."
    },
    {
        id: 5,
        title: "صالح عليه السلام",
        content: "بعث الله صالحاً إلى قوم ثمود، الذين كانوا ينحتون من الجبال بيوتاً آمنين. طالبوا صالحاً بمعجزة تثبت نبوته، واشترطوا أن يخرج لهم ناقة عظيمة من صخرة صماء. <br><br>دعا صالح ربه، فانشقت الصخرة وخرجت الناقة كما طلبوا. أمرهم صالح أن يتركوها تأكل في أرض الله ولها شرب يوم ولهم شرب يوم معلوم. لكنهم طغوا، وانبعث أشقاهم فعقر الناقة وقتلها. توعدهم صالح بالعذاب بعد ثلاثة أيام، فأخذتهم الصيحة والرجفة فأصبحوا في ديارهم جاثمين."
    },
    {
        id: 6,
        title: "إبراهيم عليه السلام",
        content: "أبو الأنبياء وخليل الله. ولد في بابل وسط قوم يعبدون الأصنام والكواكب. حاجج أباه آزر وقومه بالعقل، وحطم أصنامهم إلا كبيرهم لعلهم يرجعون إليه. ألقوه في نار عظيمة، فقال الله: (يا نار كوني برداً وسلاماً على إبراهيم). <br><br>هاجر إلى الشام ومصر ومكة. ترك زوجته هاجر وابنه الرضيع إسماعيل في واد غير ذي زرع (مكة) بأمر الله، فتفجر بئر زمزم. بنى الكعبة مع ابنه إسماعيل. ابتلاه الله بأمر ذبح ابنه الوحيد، فلما أسلما وتله للجبين، فداه الله بذبح عظيم. هو جد العرب (من إسماعيل) وجد بني إسرائيل (من إسحاق)."
    },
    {
        id: 7,
        title: "لوط عليه السلام",
        content: "كان لوط ابن أخ إبراهيم عليهما السلام. أرسله الله إلى أهل سدوم (قرب البحر الميت)، وكانوا يأتون الفاحشة التي لم يسبقهم بها أحد من العالمين (الرجال يأتون الرجال). <br><br>دعاهم لوط للتطهر والتقوى، فهددوه بالإخراج من القرية. جاءت الملائكة في صورة رجال وسيمين ضيوفاً عند لوط، فهرع قومه يريدون الفاحشة بضيوفه. أخبرت الملائكة لوطاً أنهم رسل ربه، وأمروه بالخروج ليلاً بأهله إلا امرأته التي كانت من الغابرين. في الصباح، قلب الله قريتهم عاليها سافلها وأمطر عليهم حجارة من سجيل."
    },
    {
        id: 8,
        title: "إسماعيل عليه السلام",
        content: "الابن البكر لإبراهيم من هاجر. نشأ في مكة، ومن نسله جاء العرب العدنانيون ومحمد صلى الله عليه وسلم. شارك أباه في بناء الكعبة. صبر وامتثل لأمر الله حين أخبره أبوه برؤيا الذبح، فقال: (يا أبت افعل ما تؤمر ستجدني إن شاء الله من الصابرين). وصفه الله بصدق الوعد وكان يأمر أهله بالصلاة والزكاة."
    },
    {
        id: 9,
        title: "إسحاق عليه السلام",
        content: "بشرت الملائكة إبراهيم وزوجته سارة بإسحاق وهما عجوزان. هو والد يعقوب، ومن نسله جاء أنبياء بني إسرائيل جميعاً. وصفه الله بأنه غلام عليم، ونبي من الصالحين."
    },
    {
        id: 10,
        title: " يعقوب عليه السلام",
        content: "هو يعقوب بن إسحاق بن إبراهيم، ولقبه (إسرائيل). له اثنا عشر ولداً (الأسباط). ابتلي بفقد أحب أبنائه (يوسف) لسنوات طويلة فابيضت عيناه من الحزن، لكنه لم ييأس من روح الله. صبر صبراً جميلاً حتى رد الله إليه بصره وجمع شمله بأبنائه في مصر."
    },
    {
        id: 11,
        title: "يوسف عليه السلام",
        content: "الكريم ابن الكريم. حسده إخوته فألقوه في الجب، وبيع عبداً في مصر. راودته امرأة العزيز عن نفسه فاستعصم وقال (معاذ الله)، فسجن ظلماً بضع سنين. <br><br>في السجن فسر الرؤى ودعا للتوحيد. أخرجه الملك ليفسر رؤياه عن البقرات السمان والعجاف، وعينه عزيزاً لمصر. دبر خطة بحكمة الله ليجمع إخوته، ثم عفا عنهم قائلاً: (لا تثريب عليكم اليوم). تحققت رؤياه القديمة بسجود إخوته وأبويه له (سجود تكريم)."
    },
    {
        id: 12,
        title: "أيوب عليه السلام",
        content: "رمز الصبر. كان أيوب ذا مال وأهل كثير، فابتلاه الله بفقد ماله كله، وموت أبنائه، ومرض شديد في جسده حتى لم يبق سليم منه إلا قلبه ولسانه يذكران الله. تخلى عنه الناس إلا زوجته. ظل صابراً محتسباً سنين طويلة، حتى دعا ربه: (أني مسني الضر وأنت أرحم الراحمين). استجاب الله له، وأمره أن يضرب برجله الأرض، فنبع ماء بارد اغتسل منه وشرب فبرأ، ورد الله له أهله وماله ومثلهم معهم."
    },
    {
        id: 13,
        title: "شعيب عليه السلام",
        content: "خطيب الأنبياء، أرسل إلى أهل مدين. كانوا يعبدون الأيكة (الشجرة)، وينقصون المكيال والميزان، ويفسدون في الأرض. <br><br>دعاهم شعيب للتوحيد والعدل في البيع والشراء، وحذرهم من عذاب الله. كذبوه وهددوه بالرجم. نجا شعيب والذين آمنوا، وأخذت قومه الصيحة (صوت مدمر) والرجفة، فأصبحوا في ديارهم جاثمين."
    },
    {
        id: 14,
        title: "موسى عليه السلام",
        content: "كليم الله وأحد أولي العزم. ولد في عام قتل الأطفال بمصر، فألقته أمه في اليم، ليربى في قصر عدوه فرعون. قتل مصرياً خطأ وهرب إلى مدين 10 سنوات. كلمه الله عند جبل الطور وأرسله لفرعون. <br><br>أيده الله بمعجزات (العصا، اليد البيضاء). هزم السحرة فآمنوا. شق الله له البحر بعصاه، فنجا هو وقومه وغرق فرعون. أنزل الله عليه التوراة، وعانى كثيراً من عناد بني إسرائيل وعبادتهم العجل ورفضهم دخول الأرض المقدسة."
    },
    {
        id: 15,
        title: "هارون عليه السلام",
        content: "أخو موسى، جعله الله وزيراً له ليسانده، وكان أفصح لساناً من موسى. استخلفه موسى على قومه حين ذهب لميقات ربه، فحاول منعهم من عبادة العجل وكادوا يقتلونه."
    },
    {
        id: 16,
        title: "داود عليه السلام",
        content: "أتاه الله الملك والنبوة. قتل الطاغية جالوت وهو شاب. ألان الله له الحديد فكان يصنع الدروع بيده، وسخر له الجبال والطير يسبحن معه. أنزل الله عليه (الزبور)، وكان أجمل الناس صوتاً في التلاوة."
    },
    {
        id: 17,
        title: "سليمان عليه السلام",
        content: "ورث داود، وآتاه الله ملكاً لم يؤت لأحد من بعده. سخر له الريح، والجن، وعلمه منطق الطير. قصته مع الهدهد وملكة سبأ (بلقيس) مشهورة، حيث أسلمت لله رب العالمين بعد أن رأت عظمة ملك سليمان وصرحه الممرد من قوارير."
    },
    {
        id: 18,
        title: "يونس عليه السلام",
        content: "ذا النون (صاحب الحوت). دعا قومه (أهل نينوى) فكذبوه، فخرج مغاضباً قبل أن يأذن الله له، وظن أن الله لن يضيق عليه. ركب سفينة، فساهموا فوقعت القرعة عليه فألقي في البحر، فالتقمه الحوت. <br><br>نادى في ظلمات بطن الحوت: (لا إله إلا أنت سبحانك إني كنت من الظالمين). استجاب الله له، ونجاه، وأرسله مرة أخرى لقومه فآمنوا جميعاً (مائة ألف أو يزيدون)."
    },
    {
        id: 19,
        title: "زكريا عليه السلام",
        content: "كفل مريم العذراء، وكان كلما دخل عليها المحراب وجد عندها رزقاً. دعا ربه أن يرزقه ولداً يرث النبوة رغم كبر سنه وعقم امرأته. بشرته الملائكة بيحيى مصدقاً بكلمة من الله وسيداً وحصوراً ونبياً من الصالحين."
    },
    {
        id: 20,
        title: "يحيى عليه السلام",
        content: "أتاه الله الحكم صبياً. كان تقياً براً بوالديه ولم يكن جباراً عصياً. عاصر المسيح عيسى عليه السلام، وقتل شهيداً دفاعاً عن الحق."
    },
    {
        id: 21,
        title: "عيسى عليه السلام",
        content: "كلمة الله وروح منه، ولد من مريم العذراء دون أب. تكلم في المهد صبياً يبرئ أمه. أيده الله بمعجزات عظيمة: إحياء الموتى، إبراء الأكمه والأبرص، وخلق الطير من الطين (كل ذلك بإذن الله). أنزل الله عليه الإنجيل. تآمر بنو إسرائيل لقتله، فرفعه الله إليه، وسينزل في آخر الزمان ليحكم بالإسلام ويقتل المسيح الدجال."
    },
    {
        id: 22,
        title: "محمد صلى الله عليه وسلم",
        content: "سيد ولد آدم وخاتم النبيين. ولد يتيماً في مكة. نزل عليه الوحي في غار حراء. دعا إلى الإسلام وتحمل الأذى 13 عاماً في مكة. هاجر إلى المدينة وأسس دولة العدل. انتصر للحق في بدر وفتح مكة. أكمل الله به الدين وأتم النعمة. ترك فينا ما إن تمسكنا به لن نضل بعده: كتاب الله وسنته. صلى الله عليه وسلم."
    }
];

let allSurahs = [];
let favorites = JSON.parse(localStorage.getItem('favs')) || [];
let activityLog = JSON.parse(localStorage.getItem('activityLog')) || [];
let currentReciter = null;
let currentSurahIndex = 0;
let tasbihCount = 0;
let tasbihSound = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
const audio = document.getElementById('audio');
let interactionCount = 0;

window.onload = async () => {
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => document.getElementById('splash').style.display = 'none', 800);
    }, 2000);

    const today = new Date().toLocaleDateString();
    activityLog = activityLog.filter(item => item.date === today);
    localStorage.setItem('activityLog', JSON.stringify(activityLog));

    await fetchSurahs();
    renderReciters();
    renderStories();
    getPrayerTimes();
};

function switchTab(id) {
    trackInteraction();
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const navMap = {'reciters':0, 'quran':1, 'adhkar':2, 'stories':3, 'prayer':4};
    const btns = document.querySelectorAll('.nav-btn');
    if(btns[navMap[id]]) btns[navMap[id]].classList.add('active');
}

function trackInteraction() {
    interactionCount++;
    if(interactionCount === 7) document.getElementById('sharePopup').style.display = 'flex';
}

function renderReciters(filter = "") {
    const container = document.getElementById('recitersList');
    container.innerHTML = '';
    
    let sorted = [...recitersData].sort((a,b) => favorites.includes(b.id) - favorites.includes(a.id));
    if(filter) sorted = sorted.filter(r => r.name.includes(filter));

    sorted.forEach(r => {
        const isFav = favorites.includes(r.id);
        container.innerHTML += `
            <div class="reciter-card" onclick="playReciter('${r.id}')">
                <i class="fas fa-thumbtack pin-icon ${isFav?'active':''}" onclick="togglePin(event,'${r.id}')"></i>
                <i class="fas fa-share-alt share-reciter" onclick="shareReciter(event, '${r.name}')"></i>
                <div class="avatar-unified"><i class="fas fa-user"></i></div>
                <div class="reciter-name">${r.name}</div>
            </div>
        `;
    });
}
function filterReciters(val) { renderReciters(val); }
function togglePin(e, id) {
    e.stopPropagation();
    if(favorites.includes(id)) favorites = favorites.filter(f=>f!==id); else favorites.push(id);
    localStorage.setItem('favs', JSON.stringify(favorites));
    renderReciters();
}
function shareReciter(e, name) {
    e.stopPropagation();
    if(navigator.share) navigator.share({title:`استمع للشيخ ${name}`, text: `استمع للقرآن الكريم بصوت الشيخ ${name} على Islamic.x`, url: window.location.href});
}

async function fetchSurahs() {
    try {
        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();
        allSurahs = data.data;
        const select = document.getElementById('readerSelect');
        allSurahs.forEach(s => select.innerHTML += `<option value="${s.number}">${s.number}. ${s.name}</option>`);
    } catch(e) {}
}
async function openReader() {
    trackInteraction();
    const num = document.getElementById('readerSelect').value;
    if(!num) return;
    document.getElementById('fullReader').style.display = 'block';
    const txt = document.getElementById('readerText');
    txt.innerHTML = '<div style="text-align:center;">جاري تحميل السورة...</div>';
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`);
        const data = await res.json();
        let html = `<h2 style="text-align:center; color:#0f2e26; margin-bottom:20px;">${data.data.name}</h2>`;
        if(num!=1 && num!=9) html += `<div style="text-align:center; margin-bottom:15px;">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>`;
        
        data.data.ayahs.forEach(a => {
            html += `${a.text} <span style="color:#C5A059; font-size:0.8em;">(${a.numberInSurah})</span> `;
        });
        txt.innerHTML = html;
        addToHistory(`قراءة سورة ${data.data.name}`);
    } catch(e) { txt.innerHTML = "حدث خطأ في التحميل"; }
}
function closeReader() { document.getElementById('fullReader').style.display = 'none'; }

function renderStories() {
    const list = document.getElementById('storiesList');
    fullStoriesData.forEach(s => {
        list.innerHTML += `
            <div class="story-item-card" onclick="openStoryOverlay(${s.id})">
                <div class="story-title-row">
                    <div class="story-avatar"><i class="fas fa-book-open"></i></div>
                    <span style="font-weight:bold;">${s.title}</span>
                </div>
                <i class="fas fa-share-alt share-story-list" onclick="event.stopPropagation(); shareStoryDirect('${s.title}')"></i>
                <i class="fas fa-angle-left" style="color:#ccc;"></i>
            </div>
        `;
    });
}
function shareStoryDirect(title) {
    if(navigator.share) navigator.share({title, text: `اقرأ قصة ${title} على Islamic.x`, url: window.location.href});
}
function openStoryOverlay(id) {
    trackInteraction();
    const s = fullStoriesData.find(x => x.id === id);
    if(!s) return;
    document.getElementById('overlayStoryTitle').innerText = s.title;
    document.getElementById('overlayStoryContent').innerHTML = s.content;
    document.getElementById('fullStoryOverlay').style.display = 'flex';
    addToHistory(`قراءة قصة ${s.title}`);
}
function closeStoryOverlay() { document.getElementById('fullStoryOverlay').style.display = 'none'; }
function copyStoryContent() {
    const txt = document.getElementById('overlayStoryContent').innerText;
    navigator.clipboard.writeText(txt);
    alert("تم نسخ نص القصة");
}
function shareOverlayStory() {
    const title = document.getElementById('overlayStoryTitle').innerText;
    const txt = document.getElementById('overlayStoryContent').innerText.substring(0, 100);
    if(navigator.share) navigator.share({title, text: txt + "...\nاقرأ القصة كاملة على تطبيق Islamic.x", url: window.location.href});
    else alert("تم نسخ رابط القصة");
}

function openAzkar(type) {
    trackInteraction();
    const data = azkarData[type];
    const map = {morning:'أذكار الصباح', evening:'أذكار المساء', sleep:'أذكار النوم', prayer:'أذكار الصلاة', mosque:'أذكار المسجد', wudu:'أذكار الوضوء'};
    document.getElementById('azkarTitleView').innerText = map[type];
    const container = document.getElementById('azkarContainer');
    container.innerHTML = '';
    data.forEach(d => {
        container.innerHTML += `
            <div class="detail-card">
                <div class="share-cat-btn" onclick="shareAppGlobal()"><i class="fas fa-share-alt"></i></div>
                <div class="detail-text">${d.txt}</div>
                <div class="detail-meta">
                    <span class="count-badge">عدد المرات: ${d.count}</span>
                    <div class="detail-actions">
                        <i class="fas fa-copy" onclick="copyText(this, '${d.txt.substring(0,20)}')"></i>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('azkarDetailView').style.display = 'flex';
    addToHistory(`قراءة ${map[type]}`);
}
function closeAzkarDetail() { document.getElementById('azkarDetailView').style.display = 'none'; }
function copyText(el, txt) { 
    navigator.clipboard.writeText(txt); 
    el.style.color = 'green'; 
    setTimeout(()=>el.style.color='#999', 1000); 
}

function getPrayerTimes() {
    document.getElementById('location-name').innerText = "جاري تحديد الموقع...";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            fetchPrayerAPI(pos.coords.latitude, pos.coords.longitude);
        }, () => {
            fetchPrayerAPI(30.0444, 31.2357); 
        });
    } else {
        fetchPrayerAPI(30.0444, 31.2357);
    }
}
async function fetchPrayerAPI(lat, lng) {
    const d = new Date();
    const dateStr = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
    try {
        const res = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=2`);
        const data = await res.json();
        
        const timings = data.data.timings;
        const hijri = data.data.date.hijri;
        
        document.getElementById('location-name').innerText = data.data.meta.timezone;
        document.getElementById('hijri-date').innerText = `${hijri.day} ${hijri.month.ar} ${hijri.year}`;
        document.getElementById('gregorian-date').innerText = data.data.date.readable;

        const prayers = [
            {k:'Fajr', n:'الفجر', i:'fa-cloud-sun'},
            {k:'Dhuhr', n:'الظهر', i:'fa-sun'},
            {k:'Asr', n:'العصر', i:'fa-cloud'},
            {k:'Maghrib', n:'المغرب', i:'fa-moon'},
            {k:'Isha', n:'العشاء', i:'fa-star'}
        ];

        const list = document.getElementById('prayer-times-list');
        list.innerHTML = '';
        
        let nextP = null;
        const nowTime = d.getHours() + ':' + String(d.getMinutes()).padStart(2,'0');

        prayers.forEach(p => {
            const time = timings[p.k];
            let isActive = false;
            if(!nextP && time > nowTime) {
                nextP = {name: p.n, time: time};
                isActive = true;
            }
            
            list.innerHTML += `
                <div class="prayer-time-box ${isActive?'active':''}">
                    <span class="pt-name">${p.n}</span>
                    <span class="pt-time">${time}</span>
                    <i class="fas ${p.i} pt-icon"></i>
                </div>
            `;
        });
        
        if(!nextP) {
             nextP = {name: 'الفجر', time: timings['Fajr']};
        }
        
        document.getElementById('next-prayer-name').innerText = `${nextP.name} (${nextP.time})`;

    } catch(e) {
        document.getElementById('location-name').innerText = "تعذر جلب البيانات";
    }
}

function openTasbihModal() { document.getElementById('tasbihModal').style.display = 'flex'; }
function closeTasbihModal() { document.getElementById('tasbihModal').style.display = 'none'; }
function changeDhikrFromSelect() {
    const sel = document.getElementById('dhikrSelect');
    document.getElementById('tasbihTargetName').innerText = sel.value;
    resetTasbih();
}
function doTasbih() {
    tasbihCount++;
    document.getElementById('tasbihCounter').innerText = tasbihCount;
    tasbihSound.currentTime = 0;
    tasbihSound.play().catch(e=>{}); 
    if(navigator.vibrate) navigator.vibrate(15);
}
function resetTasbih() { tasbihCount=0; document.getElementById('tasbihCounter').innerText=0; }

function playReciter(id) {
    trackInteraction();
    currentReciter = recitersData.find(r => r.id === id);
    playSurah(0);
}
function playSurah(idx) {
    if(!currentReciter) return;
    currentSurahIndex = idx;
    const s = allSurahs[idx];
    const num = String(s.number).padStart(3, '0');
    audio.src = `${currentReciter.server}${num}.mp3`;
    audio.play();
    
    document.getElementById('persistent-player').style.display = 'flex';
    document.getElementById('fabTasbih').style.bottom = '140px'; 
    document.getElementById('p-title').innerText = s.name;
    document.getElementById('p-reciter').innerText = currentReciter.name;
    document.getElementById('playIcon').className = 'fas fa-pause';
    
    addToHistory(`استماع ${s.name} (${currentReciter.name})`);
}
function togglePlay() {
    if(audio.paused) { audio.play(); document.getElementById('playIcon').className = 'fas fa-pause'; }
    else { audio.pause(); document.getElementById('playIcon').className = 'fas fa-play'; }
}
function closePlayer() { 
    audio.pause(); 
    document.getElementById('persistent-player').style.display = 'none';
    document.getElementById('fabTasbih').style.bottom = '85px';
}
function minimizePlayer() {
}
function maximizePlayer() { toggleSurahMenu(); }

function toggleSurahMenu() {
    const m = document.getElementById('playlistModal');
    if(m.style.transform === 'translateY(0%)') m.style.transform = 'translateY(110%)';
    else {
        const c = document.getElementById('playlistContent');
        c.innerHTML = '';
        allSurahs.forEach((s, i) => {
            c.innerHTML += `<div class="playlist-item" onclick="playSurah(${i}); toggleSurahMenu()"><span>${s.number}. ${s.name}</span></div>`;
        });
        m.style.transform = 'translateY(0%)';
    }
}
function prevTrack() { if(currentSurahIndex > 0) playSurah(currentSurahIndex - 1); }
function nextTrack() { if(currentSurahIndex < 113) playSurah(currentSurahIndex + 1); }

function addToHistory(desc) {
    const now = new Date();
    activityLog.unshift({ date: now.toLocaleDateString(), time: now.toLocaleTimeString('ar-EG', {hour:'2-digit',minute:'2-digit'}), desc });
    localStorage.setItem('activityLog', JSON.stringify(activityLog));
}
function showHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    activityLog.forEach(x => list.innerHTML += `<div class="hist-item"><span class="hist-time">${x.time}</span> ${x.desc}</div>`);
    document.getElementById('historyModal').style.display = 'flex';
}
function closeHistory() { document.getElementById('historyModal').style.display = 'none'; }
function clearHistory() { activityLog = []; localStorage.setItem('activityLog', '[]'); showHistory(); }

function shareAppGlobal() {
    if(navigator.share) navigator.share({title:'Islamic.x', text:'تطبيق إسلامي شامل ومميز.', url:window.location.href});
    else alert("تم نسخ رابط التطبيق");
    closeSharePopup();
}
function closeSharePopup() { document.getElementById('sharePopup').style.display = 'none'; }
