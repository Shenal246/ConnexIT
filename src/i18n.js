import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                herosect: {
                    greet1: "Leading Technology Distributor",
                    greet2first: "Welcome to ",
                    greet2mid: "Connex ",
                    greet2last: "Information Technologies",
                    greet3: "Value added distributor for more than 30 leading global vendors.",
                    contact: "Contact Us",
                    wtvideo: "Watch Video",
                },
                whowearesec: {
                    whotopic: "Who we are",
                    card1: "Distribution",
                    card1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    card2: "Consultancy",
                    card2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    card3: "Training",
                    card3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    card4: "TAC Support",
                    card4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    rText1: "A decade of expertise in cutting-edge technology distribution ",
                    rText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    ic1: "Found",
                    ic2: "Employees",
                    ic3: "Vendors",
                    ic4: "Partners",
                    contact: "Contact Us",
                },
                vendorsec: {
                    ventopic: "Our Vendors",
                    venText1: "Embark on technological Excellence with our Trusted ",
                    venText2: "Network of Vendors.",

                },
                // About us section
                ourstory: {
                    ourSTopic: "Our Story",
                    ourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    ourVTopic: "Our Vision",
                    ourVText: "Our vision is to deliver high-quality IT products and solutions through our extensive network of partners. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers, driving sustained growth and technological advancement.",
                    ourMTopic: "Our Mission",
                    ourMText: "Our mission is to deliver high-quality IT products and solutions by leveraging our extensive network of partners and channels. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers. Together, we strive to build a technologically advanced future and achieve sustained growth.",
                    sureshName: "Suresh Wijesinghe",
                    sureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    shamalName: "Shamal Aberathne",
                    shamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    dilshanName: "Dilshan De Silva",
                    dilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    rohanName: "Rohan Samaraweera",
                    rohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    rajivName: "Rajiv Senawirathne",
                    rajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    patricName: "Patric Yogarathnam",
                    patricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    erangaName: "Eranga Wickramasinghe",
                    erangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    jananiName: "Janani Siriwardhane",
                    jananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    romeshName: "Romesh De Silva",
                    romeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                },
                latestsec: {
                    lattopic: "Latest News",
                },
                // Sollutions section
                solutionssec: {
                    solu: "Solution",
                    periTopic: "Perimeter and  Internal Security",
                    cyberTopic: "Cyber Security Governance & Compliance",
                    authTopic: "Authentication & Identity Management",
                    secTopic: "Security Management",
                    endTopic: "Endpoint Security",
                    netTopic: "Networking",
                    dataTopic: "Data Center Infrastructure and  Monitoring",
                    serverTopic: "Server Storage & Backup Solutions",
                    Microsoft: "Microsoft"
                },
                // Footer section
                footersec: {
                    footHeadTopic: "Head Office",
                    headLine1: "Level 35,",
                    headLine2: "The Gateway West 150 Beach Road,",
                    headLine3: "Singapore 189720 .",
                    headLine4: "Contact: +6567278910",
                    footConTopic: "Cambodia Office",
                    conLine1: "11F-12,  Morgan Tower,",
                    conLine2: "Sopheakmongkul Street,",
                    conLine3: " Village 14, Sangkat Tonle Bassac,",
                    conLine4: "Khan Chamkarmon, Phnom Penh, Cambodia",
                    conLine5: "Contact: +85586677044",
                    resTopic: "Resources",
                    res1: "Event & News",
                    res2: "FAQs",
                    res3: "Careers",
                },
                // Chat
                chatsec: {
                    ques1: "Hi! I am here to help you. Can I know your name? ",
                    ques2: `Hi {previousValue}, How Can I help you?`,
                    ques3: "Sure. Can I have your phone number?",
                    ques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                navsec: {
                    tab1: "About Us",
                    tab2: "Solutions",
                    tab3: "Events",
                    tab4: "Events & News",
                    tab5: "Upcoming News",
                    tab6: "Blogs",
                    tab7: "Potal",
                    tab8: "Country",
                    tab9: "Contact Us",
                },

                // contactus page
                contsec: {
                    cont1: "Contact Us",
                    cont2: "Reach out to us ",
                    cont3: "to let us know how we can assist you.",
                    cont4: "We are happy to provide",
                    cont5: "customer support or",
                    cont6: "answer any general inquiries",
                    cont7: " you may have.",
                    cont8: "First name",
                    cont9: "First name is required",
                    cont10: "Last name",
                    cont11: "Last name is required",
                    cont12: "Company",
                    cont13: "Company is required",
                    cont14: "Contact Number",
                    cont15: "Contact number must be exactly 10 digits",
                    cont16: "name@example.com",
                    cont17: "Invalid email address",
                    cont18: "Comments are required",
                    cont19: "I accept the privacy & policy",
                    cont20: "You must accept the privacy & policy",
                    cont21: "Submit",
                    cont22: "Clear",
                    cont23: "Cambodia",
                    cont24: "Cambodia Office",
                    cont25: "11F-12,  Morgan Tower,",
                    cont26: "Sopheakmongkul Street,",
                    cont27: "Village 14, Sangkat Tonle Bassac,",
                    cont28: "Khan Chamkarmon, Phnom Penh, Cambodia",
                    cont29: "Get Directions",
                },
                eventsec: {
                    evnt1: "Events & News",
                    evnt2: "Latest Events and News",
                    evnt3: "No Image Available",
                    evnt4: "Close",
                    evnt5: "Events & News",
                    evnt6: "Blogs",
                },
                upEventSec: {
                    upevnt1: "Upcoming",
                    upevnt2: "Events & News",
                    upevnt3: "No Image Available",
                    upevnt4: "Close",
                },
                portalsec:{
                    ptl1: "To be launch",
                    ptl2: "Soon"
                },
                blogsec: {
                    blg1: "Blogs"
                },
                authentisec:{
                    at1: "Authentication & Identity Management",
                    at2: "No Image Available",
                },
                cybersec:{
                    cy1: "Cyber Security Governance & Compliance",
                    cy2: "No Image Available"
                },endpsec:{
                    ep1: "Endpoint Security",
                    ep2: "No Image Available"
                },newtworksec: {
                    nt1: "Networking",
                    nt2: "No Image Available"
                },ifmsec: {
                    if1: "Data Center Infrastructure and Infrastructure Monitoring",
                    if2: "No Image Available"
                },perisec: {
                    pr1:"Perimeter And Internal Security",
                    pr2:"No Image Available"
                },securitysec: {
                    scrty1: "Security Management",
                    scrty2: "No Image Available"
                },serversec: {
                    svr1: "Server Storage & Backup Solutions",
                    svr2: "No Image Available"
                }
            },
        },
        kh: {
            translation: {
                herosect: {
                    greet1: "អ្នកចែកចាយបច្ចេកវិទ្យានាំមុខ",
                    greet2first: "សូមស្វាគមន៍មកកាន់ ",
                    greet2mid: "Connex ",
                    greet2last: "ព័ត៌មានបច្ចេកវិទ្យា",
                    greet3: "អ្នកចែកចាយដែលបន្ថែមតម្លៃសម្រាប់អ្នកលក់ជាង ៣០ នាក់នៅទូទាំងពិភពលោក។",
                    contact: "ទាក់ទងមកយើង",
                    wtvideo: "មើលវីដេអូ",
                },
                whowearesec: {
                    whotopic: "យើងគឺជានរណា",
                    card1: "ការចែកចាយ",
                    card1Text: "ស្វែងរកដំណោះស្រាយដែលត្រូវបានបង្កើតឡើងដើម្បីបំពេញតម្រូវការរបស់អ្នកប្រើចុងក្រោយជាមួយនឹងដំណោះស្រាយដែលសមរម្យនិងប្រកួតប្រជែងបំផុតសម្រាប់តម្រូវការដែលមានលក្ខណៈពិសេសរបស់ពួកគេ។",
                    card2: "ការផ្តល់យោបល់",
                    card2Text: "សេវាកម្មផ្តល់យោបល់គឺជាដំណោះស្រាយដ៏ពិសេសដែលត្រូវបានផ្តល់ជូនដោយ Connex ដែលធានាថាដំណោះស្រាយដែលសមរម្យនិងប្រកួតប្រជែងបំផុតសម្រាប់តម្រូវការរបស់អ្នកប្រើចុងក្រោយ។ យើងផ្តល់សេវាកម្មផ្តល់យោបល់ដែលមានជំនាញវិជ្ជាជីវៈដែលរួមបញ្ចូលគ្នាដែលលូតលាស់និងផ្លាស់ប្តូរជាមួយអាជីវកម្មនិងតម្រូវការរបស់អតិថិជន។ ក្រុមហ៊ុនផ្តល់យោបល់ Connex ផ្តល់នូវបុគ្គលិកដែលមានលក្ខណៈសម្បត្តិខ្ពស់ដើម្បីបំពេញជំនាញរបស់ក្រុមរបស់អ្នក។ អ្នកផ្តល់យោបល់និងវិស្វកររបស់យើងធ្វើការនៅលើឈ្មោះរបស់អ្នកដើម្បីធានាការប្រតិបត្តិការជាបន្តនៃការតំឡើងរបស់អតិថិជនដោយទៀងទាត់និងស្របតាមផលប៉ះពាល់នៃថវិកា។",
                    card3: "ការបណ្តុះបណ្តាល",
                    card3Text: "យើងជឿជាក់ថាជម្រើសនៃការរៀនសូត្រអស់មួយជីវិតហើយយើងខិតខំបង្កើតវប្បធម៌នៃការរៀនសូត្រដោយផ្តល់ឱកាសជាច្រើនដល់បុគ្គលិករបស់យើងដើម្បីបន្តការអភិវឌ្ឍជំនាញវិជ្ជាជីវៈរបស់ពួកគេ។ យើងក៏បណ្តុះបណ្តាលបុគ្គលិករបស់យើងសម្រាប់មុខតំណែងនៃការដឹកនាំអនាគតពីក្នុងក្រុមហ៊ុន។ នៅក្នុងពិភពឌីជីថលដែលមានការវិវត្តជាបន្តបន្ទាប់ឧស្សាហកម្មបច្ចេកវិទ្យាប្រឈមនឹងការផ្លាស់ប្តូរយ៉ាងលឿន ដូច្នេះយើងយល់ដឹងពីភាពចាំបាច់ក្នុងការគាំទ្រអត្រាការផ្លាស់ប្តូរជា​ច្រើននិងនៅលើដំណើរដ៏អស្ចារ្យនៃបច្ចេកវិទ្យា។ ការបណ្តុះបណ្តាលអាជីពរបស់យើងនិងការអភិវឌ្ឍជំនាញវិជ្ជាជីវៈបានរួមចំណែកក្នុងការរក្សាបុគ្គលិក។",
                    card4: "ការគាំទ្រ TAC",
                    card4Text: "Connex ផ្តល់សេវាកម្ម TAC 24/7 ជាមួយនឹងមនុស្សដែលមានវិជ្ជាជីវៈ បច្ចេកទេសនិងមានសមត្ថភាពដែលបានបញ្ជាក់។ យើងមានមោទនភាពនៃកិច្ចព្រមព្រៀងសេវាកម្ (SLA) របស់ Bronze, Silver, Gold និង Platinum ។ អ្នកនឹងទទួលបានការចូលរួមជាមួយអ្នកគ្រប់គ្រងផលិតផលរបស់អ្នកដែលនឹងចែករំលែកការយល់ដឹងរបស់គាត់អំពីផលិតផល ដូច្នេះអ្នកមានការយល់ដឹងពេញលេញនិងមានសមត្ថភាពបច្ចេកទេសក្នុងការប្រើប្រាស់ផលិតផល។ ការស្រាវជ្រាវផលិតផលនិងព័ត៌មានអំពីការចុះឈ្មោះអាជីវកម្មក៏នឹងត្រូវបានចែករំលែកផងដែរ។ សេវាកម្មផ្តល់ជំនួយវិជ្ជាជីវៈនិងបច្ចេកទេសរបស់ Connex គឺមានសម្រាប់ដៃគូរបស់យើងប៉ុណ្ណោះ។ សូមទាក់ទងមកយើង។",
                    rText1: "ជាងដប់ឆ្នាំនៃជំនាញក្នុងការចែកចាយបច្ចេកវិទ្យាទំនើប",
                    rText2: "អ្នកចែកចាយបច្ចេកវិទ្យាដ៏លេចធ្លោមានភាពរីកចម្រើនក្នុងការតភ្ជាប់ទៅនឹងពិភពលោកដែលបន្តផ្លាស់ប្តូរ។ ប្រសិនបើអ្នកត្រូវការដំណោះស្រាយផ្សេងៗដើម្បីសំរេចបាននូវភាពច្បាស់លាស់និងការបំលែងអាជីវកម្មរបស់អ្នក ការស្វែងរករបស់អ្នកនឹងបញ្ចប់នៅទីនេះ។",
                    ic1: "បង្កើតឡើង",
                    ic2: "បុគ្គលិក",
                    ic3: "អ្នកលក់",
                    ic4: "ដៃគូ",
                    contact: "ទាក់ទងមកយើង",
                },
                vendorsec: {
                    ventopic: "អ្នកលក់របស់យើង",
                    venText1: "ចាប់ផ្តើមនូវភាពល្អឥតខ្ចោះបច្ចេកវិទ្យាជាមួយនឹងអតិថិជនទុកចិត្តរបស់យើង",
                    venText2: "បណ្ដាញនៃអ្នកលក់។",
                },
                ourstory: {
                    ourSTopic: "រឿងរបស់យើង",
                    ourSText: "បង្កើតឡើងដោយចំណង់ចំណូលចិត្តក្នុងបច្ចេកវិទ្យានិងភាពល្អឥតខ្ចោះ CONNEX INFORMATION TECHNOLOGY បានក្លាយជាអ្នកដឹកនាំក្នុងការចែកចាយផលិតផល IT ។ យើងបានចាប់ផ្តើមដោយចក្ខុវិស័យក្នុងការផ្លាស់ប្តូរឧស្សាហកម្មតាមរយៈដំណោះស្រាយថ្មីនិងការគាំទ្រដែលល្អឥតខ្ចោះ។ ជោគជ័យរបស់យើងគឺដោយផ្អែកលើទំនាក់ទំនងរឹងមាំជាមួយអតិថិជននិងដៃគូរបស់យើងដែលអនុញ្ញាតឱ្យយើងធ្វើឱ្យសមរម្យនិងបំពេញតាមតម្រូវការម៉ាក។ នៅពេលដែលយើងលូតលាស់យើងនៅតែប្តេជ្ញាផ្លាស់ប្តូរជាមួយបច្ចេកវិទ្យាបញ្ញា។",
                    ourVTopic: "ចក្ខុវិស័យរបស់យើង",
                    ourVText: "ចក្ខុវិស័យរបស់យើងគឺផ្តល់នូវផលិតផល IT មានគុណភាពខ្ពស់និងដំណោះស្រាយតាមរយៈបណ្ដាញដៃគូនៃយើង។ យើងស្មោះត្រង់ក្នុងការផ្តល់សេវាកម្មល្អឥតខ្ចោះការផ្សព្វផ្សាយមានភាពច្នៃប្រឌិតនិងការគាំទ្រប្តេជ្ញាធានាដល់ជោគជ័យនៃដៃគូនិងការពេញចិត្តនៃអតិថិជនរបស់យើងនិងជំរុញការលូតលាស់និងការអភិវឌ្ឍបច្ចេកវិទ្យា។",
                    ourMTopic: "បេសកកម្មរបស់យើង",
                    ourMText: "បេសកកម្មរបស់យើងគឺផ្តល់នូវផលិតផល IT មានគុណភាពខ្ពស់និងដំណោះស្រាយដោយការប្រើប្រាស់បណ្ដាញដៃគូនៃយើង។ យើងស្មោះត្រង់ក្នុងការផ្តល់សេវាកម្មល្អឥតខ្ចោះការផ្សព្វផ្សាយមានភាពច្នៃប្រឌិតនិងការគាំទ្រប្តេជ្ញាធានាដល់ជោគជ័យនៃដៃគូនិងការពេញចិត្តនៃអតិថិជនរបស់យើង។ ទាំងអស់គ្នាយើងខិតខំបង្កើតមុខរបរក្នុងអនាគតបច្ចេកវិទ្យា។",
                    sureshName: "Suresh Wijesinghe",
                    sureshText: `"ការដឹកនាំគឺមិនមែនគ្រាន់តែជាការទៅលើការសម្រេចចិត្តទេ វាក៏ជាការបង្កើតមោទនភាពដើម្បីឱ្យអ្នកដទៃសម្រេចក្តីអស្ចារ្យ។"`,
                    shamalName: "Shamal Aberathne",
                    shamalText: `"នៅក្នុងពិភពដែលមានសម្លេងសំឡេង ម៉ាករបស់យើងត្រូវតែមានសំឡេងពិតប្រាកដចាប់អារម្មណ៍និងគួរឱ្យចាំបាន។"`,
                    dilshanName: "Dilshan De Silva",
                    dilshanText: `"ភាពល្អឥតខ្ចោះនៃប្រតិបត្តិការគឺជាមូលដ្ឋាននៃជោគជ័យរបស់យើង បង្កើតប្រសិទ្ធភាពនិងភាពច្នៃប្រឌិត។"`,
                    rohanName: "Rohan Samaraweera",
                    rohanText: `"បច្ចេកវិទ្យាបម្លែងចក្ខុវិស័យទៅជាការពិត ដំណើររបស់យើងទៅអនាគត។"`,
                    rajivName: "Rajiv Senawirathne",
                    rajivText: `"ការជឿជាក់និងការពេញចិត្តនៃអតិថិជនគឺជាមូលដ្ឋាននៃភាពល្អឥតខ្ចោះរបស់ក្រុមហ៊ុនយើង។"`,
                    patricName: "Patric Yogarathnam",
                    patricText: `"ការតភ្ជាប់ជាមួយអតិថិជនរបស់យើងនៅទូទាំងពិភពលោកចាំបាច់ត្រូវការការយល់ដឹងពីតម្រូវការចម្រុះនិងការផ្តល់សេវាកម្មល្អឥតខ្ចោះ។"`,
                    erangaName: "Eranga Wickramasinghe",
                    erangaText: `"ការបង្កើតទំនាក់ទំនងរឹងមាំជាមួយអតិថិជនរបស់យើងគឺជាសមត្ថភាពនៃភាពល្អឥតខ្ចោះនិងការអភិវឌ្ឍ។"`,
                    jananiName: "Janani Siriwardhane",
                    jananiText: `"ការចាប់ផ្តើមបុគ្គលិកនិងការរីកចម្រើនវប្បធម៌វិជ្ជាជីវៈគឺជាចុងក្រោយនៃភាពល្អឥតខ្ចោះរបស់អង្គភាព។"`,
                    romeshName: "Romesh De Silva",
                    romeshText: `"ជោគជ័យក្នុងការលក់មិនមែនជាការដាក់ផលិតផលក៏ដោយ ប៉ុន្តែនោះជាការយល់ដឹងនិងដោះស្រាយតម្រូវការអតិថិជន។"`,
                },
                latestsec: {
                    lattopic: "ព័ត៌មានថ្មីបំផុត",
                },
                solutionssec: {
                    solu: "ដំណោះស្រាយ",
                    periTopic: "សន្តិសុខបណ្តោយនិងផ្ទៃក្នុង",
                    cyberTopic: "ការគ្រប់គ្រងនិងការអនុវត្តសន្តិសុខបច្ចេកវិទ្យា",
                    authTopic: "ការផ្ទៀងផ្ទាត់និងការគ្រប់គ្រងអត្តសញ្ញាណ",
                    secTopic: "ការគ្រប់គ្រងសន្តិសុខ",
                    endTopic: "សន្តិសុខផ្នែកចុងក្រោយ",
                    netTopic: "បណ្ដាញ",
                    dataTopic: "ហេដ្ឋារចនាសម្ព័ន្ធនិងការត្រួតពិនិត្យផ្នែកទិន្នន័យ",
                    serverTopic: "ដំណោះស្រាយផ្ទុកនិងការបម្រុងទុកម៉ាស៊ីនបម្រើ",
                    Microsoft: "ម៉ៃក្រូសូហ្វ្ទ"
                },
                footersec: {
                    footHeadTopic: "ការិយាល័យគណៈ",
                    headLine1: "ជាន់ 35,",
                    headLine2: "អាមេរិកមហាផ្ទៃដី 150, សង្កាត់សំបូរី,",
                    headLine3: "ទីក្រុងសិង្ហបុរី 189720 .",
                    headLine4: "ទំនាក់ទំនង: +6567278910",
                    footConTopic: "ការិយាល័យកម្ពុជាក្រុងភ្នំពេញ",
                    conLine1: "ជាន់ 11F-12, វត្តមុខ បូរីក្នុង,",
                    conLine2: "ផ្លូវសុភាគមេត្តានគុល,",
                    conLine3: "ភូមិទន្លេបាស្កាត់តុលបាសាក់, ខណ្ឌចំការមន,",
                    conLine4: "រាជធានីភ្នំពេញ, កម្ពុជា",
                    conLine5: "ទំនាក់ទំនង: +85586677044",
                    resTopic: "ឧបករណ៍",
                    res1: "ព្រឹត្តិការណ៍ និង ព័ត៌មាន",
                    res2: "សំណួរសំខាន់",
                    res3: "ការងារជាប់ខ្លួន",
                },

                chatsec: {
                    ques1: "សួស្តី! ខ្ញុំនៅទីនេះដើម្បីជួយអ្នក។ ខ្ញុំអាចដឹងឈ្មោះអ្នកបានទេ?",
                    ques2: `សួស្តី {previousValue}, តើខ្ញុំអាចជួយអ្នកបានយ៉ាងដូចម្តេច?`,
                    ques3: "បាទ/ចាស អាចខ្ញុំសុំលេខទូរសព្ទរបស់អ្នកបានទេ?",
                    ques4: "អរគុណ! មន្រ្តីរបស់យើងនឹងទាក់ទងមកអ្នកក្នុងពេលឆាប់ៗនេះ។",
                },
                navsec: {
                    tab1: "អំពីយើង",
                    tab2: "ដំណោះស្រាយ",
                    tab3: "ព្រឹត្តិការណ៍",
                    tab4: "ព្រឹត្តិការណ៍និងព័ត៌មាន",
                    tab5: "ព័ត៌មានថ្មីៗ",
                    tab6: "ប្លុក",
                    tab7: "ផតថល",
                    tab8: "ប្រទេស",
                    tab9: "ទំនាក់ទំនង",
                },
                contsec: {
                    cont1: "ទាក់ទងមកយើង",
                    cont2: "ទាក់ទងមកយើង",
                    cont3: "ដើម្បីឲ្យយើងដឹងថាយើងអាចជួយអ្នកបានដូចម្តេច",
                    cont4: "យើងខ្ញុំរីករាយដោយការផ្តោតសេវាអតិថិជន",
                    cont5: "ឬឆ្លើយនឹងសំនួរទូទាំងអស់ដែលទាក់ទងបាន",
                    cont6: " ដែលអ្នកអាចមាន",
                    cont7: "។",
                    cont8: "ឈ្មោះ​ដំបូង",
                    cont9: "ត្រូវការឈ្មោះដំបូង",
                    cont10: "នាមត្រូវការ",
                    cont11: "ត្រូវការនាម",
                    cont12: "ក្រុមហ៊ុន",
                    cont13: "ត្រូវការក្រុមហ៊ុន",
                    cont14: "លេខទំនាក់ទំនង",
                    cont15: "លេខទំនាក់ទំនងត្រូវតែមានចំនួន 10 ខ្ទង់",
                    cont16: "name@example.com",
                    cont17: "អាសយដ្ឋានអ៊ីមែលមិនត្រឹមត្រូវ",
                    cont18: "ចំនួននៃមតិយោបល់ត្រូវការ",
                    cont19: "ខ្ញុំទទួលយកគោលការណ៍សំខាន់និងគោលការណ៍",
                    cont20: "អ្នកត្រូវត្រូវទទួលយកគោលការណ៍សំខាន់និងគោលការណ៍",
                    cont21: "ដាក់ស្នើ",
                    cont22: "លុប",
                    cont23: "កម្ពុជា",
                    cont24: "ការិយាល័យកម្ពុជា",
                    cont25: "ផ្ទះលេខ 11F-12,  អូរស្តាប់មូលរឹទ្ធសាសន៍ស៊ីត,",
                    cont26: "ផ្លូវសុផាកំុងគូល,",
                    cont27: "ភូមិទន្លេបាស្កាត់តុលបាសាក់, ខណ្ឌចំការមន,",
                    cont28: "ស្រុកចំការមន, ភ្នំពេញ, កម្ពុជា",
                    cont29: "ទទួលដំណើរ",
                },

                eventsec: {
                    evnt1: "ព្រឹត្តិការណ៍និងព័ត៌មាន",
                    evnt2: "ព្រឹត្តិការណ៍និងព័ត៌មានថ្មីៗ",
                    evnt3: "គ្មានរូបភាព",
                    evnt4: "បិទ",
                    evnt5: "ព្រឹត្តិការណ៍និងព័ត៌មាន",
                    evnt6: "ប្លុក",
                },
                upEventSec: {
                    upevnt1: "នៅខាងមុខ",
                    upevnt2: "ព្រឹត្តិការណ៍និងព័ត៌មាន",
                    upevnt3: "គ្មានរូបភាព",
                    upevnt4: "បិទ",
                },
                portalsec:{
                    ptl1: "ដើម្បីដំណើរការ",
                    ptl2: "ឆាប់ៗនេះ"
                },
                blogsec: {
                    blg1: "ប្លុក"
                },
                    authentisec: {
                        "at1": "ការផ្ទៀងផ្ទាត់ និងការគ្រប់គ្រងអត្តសញ្ញាណ",
                        "at2": "គ្មានរូបភាព"
                    },
                    cybersec: {
                        "cy1": "ការគ្រប់គ្រង និងភាពទៀងទាត់នៃសន្តិសុខអ៊ីនធឺណិត",
                        "cy2": "គ្មានរូបភាព"
                    },
                    endpsec: {
                        "ep1": "សន្តិសុខឧបករណ៍បញ្ចប់",
                        "ep2": "គ្មានរូបភាព"
                    },
                    newtworksec: {
                        "nt1": "បណ្តាញ",
                        "nt2": "គ្មានរូបភាព"
                    },
                    ifmsec: {
                        "if1": "អគ្គិសនីនៃមជ្ឈមណ្ឌលទិន្នន័យ និងការត្រួតពិនិត្យទ្រព្យសម្បត្តិ",
                        "if2": "គ្មានរូបភាព"
                    },
                    perisec: {
                        "pr1": "សន្តិសុខព្រំដែន និងសន្តិសុខផ្ទៃក្នុង",
                        "pr2": "គ្មានរូបភាព"
                    },
                    securitysec: {
                        "scrty1": "ការគ្រប់គ្រងសន្តិសុខ",
                        "scrty2": "គ្មានរូបភាព"
                    },
                    serversec: {
                        "svr1": "ដំណោះស្រាយស្តុកនិងបម្រុងទុកម៉ាស៊ីនមេ",
                        "svr2": "គ្មានរូបភាព"
                    }
            },
        },

        enThai: {
            translation: {
                Thaiherosect: {
                    Thaigreet1: "Leading Technology Distributor",
                    Thaigreet2first: "Welcome to ",
                    Thaigreet2mid: "Connex ",
                    Thaigreet2last: "Information Technologies",
                    Thaigreet3: "Value added distributor for more than 30 leading global vendors.",
                    Thaicontact: "Contact Us",
                    Thaiwtvideo: "Watch Video",
                },
                Thaiwhowearesec: {
                    Thaiwhotopic: "Who we are",
                    Thaicard1: "Distribution",
                    Thaicard1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    Thaicard2: "Consultancy",
                    Thaicard2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    Thaicard3: "Training",
                    Thaicard3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    Thaicard4: "TAC Support",
                    Thaicard4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    ThairText1: "A decade of expertise in cutting-edge technology distribution ",
                    ThairText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    Thaiic1: "Found",
                    Thaiic2: "Employees",
                    Thaiic3: "Vendors",
                    Thaiic4: "Partners",
                    Thaicontact: "Contact Us",
                },
                Thaivendorsec: {
                    Thaiventopic: "Our Vendors",
                    ThaivenText1: "Embark on technological Excellence with our Trusted ",
                    ThaivenText2: "Network of Vendors.",

                },
                Thailatestsec: {
                    Thailattopic: "Latest News",
                },
                // About us section
                Thaiourstory: {
                    ThaiourSTopic: "Our Story",
                    ThaiourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    ThaiourVTopic: "Our Vision",
                    ThaiourVText: "Our vision is to deliver high-quality IT products and solutions through our extensive network of partners. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers, driving sustained growth and technological advancement.",
                    ThaiourMTopic: "Our Mission",
                    ThaiourMText: "Our mission is to deliver high-quality IT products and solutions by leveraging our extensive network of partners and channels. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers. Together, we strive to build a technologically advanced future and achieve sustained growth.",
                    ThaisureshName: "Suresh Wijesinghe",
                    ThaisureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    ThaishamalName: "Shamal Aberathne",
                    ThaishamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    ThaidilshanName: "Dilshan De Silva",
                    ThaidilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    ThairohanName: "Rohan Samaraweera",
                    ThairohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    ThairajivName: "Rajiv Senawirathne",
                    ThairajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    ThaipatricName: "Patric Yogarathnam",
                    ThaipatricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    ThaierangaName: "Eranga Wickramasinghe",
                    ThaierangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    ThaijananiName: "Janani Siriwardhane",
                    ThaijananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    ThairomeshName: "Romesh De Silva",
                    ThairomeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                },
                Thailatestsec: {
                    Thailattopic: "Latest News",
                },
                // Sollutions section
                Thaisolutionssec: {
                    Thaimaintopic: "Solutions",
                    ThaiperiTopic: "Perimeter and  Internal Security",
                    ThaicyberTopic: "Cyber Security Governance & Compliance",
                    ThaiauthTopic: "Authentication & Identity Management",
                    ThaisecTopic: "Security Management",
                    ThaiendTopic: "Endpoint Security",
                    ThainetTopic: "Networking",
                    ThaidataTopic: "Data Center Infrastructure and  Monitoring",
                    ThaiserverTopic: "Server Storage & Backup Solutions",
                },
                // Footer section
                Thaifootersec: {
                    ThaifootHeadTopic: "Head Office",
                    ThaiheadLine1: "Level 35,",
                    ThaiheadLine2: "The Gateway West 150 Beach Road,",
                    ThaiheadLine3: "Singapore 189720 .",
                    ThaiheadLine4: "Contact: +6567278910",
                    ThaifootConTopic: "Thailand Office",
                    ThaiconLine1: "184/75,",
                    ThaiconLine2: "17th Floor, Forum Tower,",
                    ThaiconLine3: "Ratchadaphisek Rd, Khwaeng Huai Khwang, Huai Khwang,",
                    ThaiconLine4: "Bangkok 10310, Thailand",
                    ThaiconLine5: "Contact: +66612700590",
                    ThairesTopic: "Resources",
                    Thaires1: "Event & News",
                    Thaires2: "FAQs",
                    Thaires3: "Careers",
                },
                // Chat
                Thaichatsec: {
                    Thaiques1: "Hi! I am here to help you. Can I know your name? ",
                    Thaiques2: `Hi {previousValue}, How Can I help you?`,
                    Thaiques3: "Sure. Can I have your phone number?",
                    Thaiques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                Thainavsec: {
                    Thaitab1: "About Us",
                    Thaitab2: "Solutions",
                    Thaitab3: "Events",
                    Thaitab4: "Events & News",
                    Thaitab5: "Upcoming News",
                    Thaitab6: "Blogs",
                    Thaitab7: "Potal",
                    Thaitab8: "Country",
                    Thaitab9: "Contact Us",
                },

                // contactus page
                Thaicontsec: {
                    Thaicont1: "Contact Us",
                    Thaicont2: "Reach out to us ",
                    Thaicont3: "to let us know how we can assist you.",
                    Thaicont4: "We are happy to provide",
                    Thaicont5: "customer support or",
                    Thaicont6: "answer any general inquiries",
                    Thaicont7: " you may have.",
                    Thaicont8: "First name",
                    Thaicont9: "First name is required",
                    Thaicont10: "Last name",
                    Thaicont11: "Last name is required",
                    Thaicont12: "Company",
                    Thaicont13: "Company is required",
                    Thaicont14: "Contact Number",
                    Thaicont15: "Contact number must be exactly 10 digits",
                    Thaicont16: "name@example.com",
                    Thaicont17: "Invalid email address",
                    Thaicont18: "Comments are required",
                    Thaicont19: "I accept the privacy & policy",
                    Thaicont20: "You must accept the privacy & policy",
                    Thaicont21: "Submit",
                    Thaicont22: "Clear",
                    Thaicont23: "Thailand",
                    Thaicont24: "Thailand Office",
                    Thaicont25: "184/75, 17th Floor",
                    Thaicont26: "Forum Tower, Ratchadapkisek Rd,",
                    Thaicont27: "Khwaeng Huai Khwang, Hui Khwang,",
                    Thaicont28: "Bangkok 10310, Thailand",
                    Thaicont29: "Get Directions",
                },

                Thaieventsec: {
                    Thaievnt1: "Events & News",
                    Thaievnt2: "Latest Events and News",
                    Thaievnt3: "No Image Available",
                    Thaievnt4: "Close",
                    Thaievnt5: "Events & News",
                    Thaievnt6: "Blogs",
                },
                ThaiupEventSec: {
                    Thaiupevnt1: "Upcoming",
                    Thaiupevnt2: "Events & News",
                    Thaiupevnt3: "No Image Available",
                    Thaiupevnt4: "Close",
                },
                Thaiportalsec: {
                    Thaiptl1: "To be launch",
                    Thaiptl2: "Soon"
                },
                Thaiblogsec: {
                    Thaiblg1: "Blogs"
                },
                Thaiauthentisec:{
                    Thaiat1: "Authentication & Identity Management",
                    Thaiat2: "No Image Available",                  
                },
                Thaicybersec:{
                    Thaicy1: "Cyber Security Governance & Compliance",
                    Thaicy2: "No Image Available"
                },
                Thaiendpsec:{
                    Thaiep1: "Endpoint Security",
                    Thaiep2: "No Image Available"
                },
                Thainewtworksec: {
                    Thaint1: "Networking",
                    Thaint2: "No Image Available"
                },
                Thaiifmsec: {
                    Thaiif1: "Data Center Infrastructure and Infrastructure Monitoring",
                    Thaiif2: "No Image Available"
                },
                Thaiperisec: {
                    Thaipr1:"Perimeter And Internal Security",
                    Thaipr2:"No Image Available"
                },
                Thaisecuritysec: {
                    Thaiscrty1: "Security Management",
                    Thaiscrty2: "No Image Available"
                },
                Thaiserversec: {
                    Thaisvr1: "Server Storage & Backup Solutions",
                    Thaisvr2: "No Image Available"
                }
            },
        },

        frThai: {
            translation: {
                Thaiherosect: {
                    Thaigreet1: "ผู้นำการจัดจำหน่ายเทคโนโลยี",
                    Thaigreet2first: "ยินดีต้อนรับสู่ ",
                    Thaigreet2mid: "คอนเน็กซ์ ",
                    Thaigreet2last: "เทคโนโลยีสารสนเทศ",
                    Thaigreet3: "ผู้จัดจำหน่ายที่มีมูลค่าเพิ่มสำหรับผู้จำหน่ายระดับโลกมากกว่า 30 ราย",
                    Thaicontact: "ติดต่อเรา",
                    Thaiwtvideo: "ชมวิดีโอ",
                },
                Thaiwhowearesec: {
                    Thaiwhotopic: "พวกเราคือใคร",
                    Thaicard1: "การจัดจำหน่าย",
                    Thaicard1Text: "ค้นหาวิธีแก้ไขที่ปรับแต่งตามความต้องการของผู้ใช้ปลายทางด้วยคำตอบที่มีการแข่งขันสูงและเหมาะสมที่สุดสำหรับความต้องการเฉพาะของพวกเขา",
                    Thaicard2: "การให้คำปรึกษา",
                    Thaicard2Text: "บริการให้คำปรึกษาเป็นทางออกที่ไม่เหมือนใครที่นำเสนอโดยคอนเน็กซ์ ซึ่งรับประกันโซลูชันที่เหมาะสมและแข่งขันได้มากที่สุดสำหรับความต้องการของผู้ใช้ปลายทาง เรานำเสนอบริการที่ปรับแต่งแบบบูรณาการที่เติบโตและเปลี่ยนแปลงไปตามความต้องการทางธุรกิจและลูกค้า การให้คำปรึกษาของคอนเน็กซ์มอบบุคลากรที่มีคุณสมบัติสูงเพื่อเสริมทักษะของทีมคุณ ที่ปรึกษาและวิศวกรของเราทำหน้าที่แทนคุณเพื่อให้การติดตั้งของลูกค้าดำเนินไปอย่างราบรื่น ทันเวลา และตามงบประมาณ",
                    Thaicard3: "การฝึกอบรม",
                    Thaicard3Text: " เราเชื่อในคำกล่าวยอดนิยมที่ว่าเราทุกคนเป็นผู้เรียนรู้ตลอดชีวิต ดังนั้นเราจึงพยายามสร้างวัฒนธรรมการเรียนรู้ที่พนักงานของเราได้รับโอกาสมากมายในการพัฒนาวิชาชีพของพวกเขา นอกจากนี้เรายังฝึกอบรมพนักงานของเราสำหรับตำแหน่งผู้นำในอนาคตจากภายในบริษัท ในโลกดิจิทัลที่เคลื่อนไหวและพัฒนาอย่างรวดเร็ว อุตสาหกรรมเทคโนโลยีมีการเปลี่ยนแปลงอย่างรวดเร็ว ดังนั้นเราจึงตระหนักถึงความจำเป็นในการก้าวให้ทันกับอัตราการออกจากงานและอยู่ในแนวหน้าของเทคโนโลยีที่ล้ำสมัย การฝึกอบรมและการพัฒนาวิชาชีพของโปรแกรมเมอร์ที่กว้างขวางของเรามีส่วนช่วยในการรักษาพนักงาน",
                    Thaicard4: "การสนับสนุน TAC",
                    Thaicard4Text: "คอนเน็กซ์มีบริการ TAC ตลอด 24 ชั่วโมงทุกวัน ด้วยผู้เชี่ยวชาญที่ผ่านการรับรอง มีทักษะ และมีคุณสมบัติหลากหลาย เราภูมิใจในระดับข้อตกลงระดับบริการระดับบรอนซ์ เงิน ทอง และแพลทินัม คุณจะได้มีส่วนร่วมกับผู้จัดการผลิตภัณฑ์ของคุณซึ่งจะแบ่งปันความเข้าใจในผลิตภัณฑ์ของเขา เพื่อให้คุณได้รับข้อมูลอย่างครบถ้วนและมีความรู้และความรู้ทางเทคนิคในการใช้ผลิตภัณฑ์ การอัปเดตการวิจัยผลิตภัณฑ์จะแบ่งปันควบคู่ไปกับข้อมูลเกี่ยวกับการลงทะเบียนดีล บริการระดับมืออาชีพและบริการสนับสนุนด้านเทคนิคของคอนเน็กซ์มีให้สำหรับพันธมิตรช่องทางของเราเท่านั้น กรุณาติดต่อ",
                    ThairText1: "ทศวรรษแห่งความเชี่ยวชาญในการจัดจำหน่ายเทคโนโลยีล้ำสมัย",
                    ThairText2: "ผู้นำด้านการจัดจำหน่ายเทคโนโลยีเจริญเติบโตจากการปรับตัวให้เข้ากับโลกที่เปลี่ยนแปลงตลอดเวลา หากคุณต้องการโซลูชันที่หลากหลายเพื่อให้บรรลุการปฏิบัติตามข้อกำหนดและเปลี่ยนแปลงธุรกิจของคุณ การค้นหาของคุณจะสิ้นสุดที่นี่",
                    Thaiic1: "ก่อตั้ง",
                    Thaiic2: "พนักงาน",
                    Thaiic3: "ผู้ขาย",
                    Thaiic4: "พันธมิตร",
                    Thaicontact: "ติดต่อเรา",
                },
                Thaivendorsec: {
                    Thaiventopic: "ผู้จำหน่ายของเรา",
                    ThaivenText1: "เริ่มต้นความเป็นเลิศทางเทคโนโลยีกับเครือข่ายผู้จำหน่ายที่เชื่อถือได้ของเรา",
                    ThaivenText2: "เครือข่ายผู้จำหน่าย",
                },
                Thailatestsec: {
                    Thailattopic: "ข่าวล่าสุด",
                },
                Thaiourstory: {
                    ThaiourSTopic: "เรื่องราวของเรา",
                    ThaiourSText: "ก่อตั้งขึ้นด้วยความหลงใหลในเทคโนโลยีและความเป็นเลิศ CONNEX INFORMATION TECHNOLOGY ได้กลายเป็นผู้นำในการจัดจำหน่ายผลิตภัณฑ์ไอที เราเริ่มต้นด้วยวิสัยทัศน์ที่จะปฏิวัติอุตสาหกรรมด้วยโซลูชั่นที่เป็นนวัตกรรมและการสนับสนุนที่ไม่มีใครเทียบได้ ความสำเร็จของเราสร้างขึ้นจากความสัมพันธ์ที่แน่นแฟ้นกับลูกค้าและพันธมิตรของเรา ทำให้เราสามารถปรับตัวและตอบสนองความต้องการของตลาดที่เปลี่ยนแปลงไป เมื่อเราเติบโตขึ้น เรามุ่งมั่นที่จะสร้างสรรค์นวัตกรรม ความซื่อสัตย์ และความเป็นหุ้นส่วน ขับเคลื่อนการเติบโตร่วมกันและสร้างมาตรฐานใหม่ในอุตสาหกรรม",
                    ThaiourVTopic: "วิสัยทัศน์ของเรา",
                    ThaiourVText: "วิสัยทัศน์ของเราคือการส่งมอบผลิตภัณฑ์และโซลูชั่นไอทีคุณภาพสูงผ่านเครือข่ายพันธมิตรที่กว้างขวางของเรา เรามุ่งมั่นที่จะให้บริการที่ยอดเยี่ยม การตลาดที่เป็นนวัตกรรม และการสนับสนุนที่ทุ่มเทเพื่อให้มั่นใจถึงความสำเร็จของพันธมิตรและความพึงพอใจของลูกค้า ขับเคลื่อนการเติบโตอย่างยั่งยืนและความก้าวหน้าทางเทคโนโลยี",
                    ThaiourMTopic: "พันธกิจของเรา",
                    ThaiourMText: "พันธกิจของเราคือการส่งมอบผลิตภัณฑ์และโซลูชั่นไอทีคุณภาพสูงโดยใช้ประโยชน์จากเครือข่ายพันธมิตรและช่องทางที่กว้างขวางของเรา เรามุ่งมั่นที่จะให้บริการที่ยอดเยี่ยม การตลาดที่เป็นนวัตกรรม และการสนับสนุนที่ทุ่มเทเพื่อให้มั่นใจถึงความสำเร็จของพันธมิตรและความพึงพอใจของลูกค้า ร่วมกัน เราพยายามสร้างอนาคตที่ก้าวหน้าทางเทคโนโลยีและบรรลุการเติบโตอย่างยั่งยืน",
                    ThaisureshName: "สุเรช วิเจสิงเห",
                    ThaisureshText: `"การเป็นผู้นำไม่ใช่แค่การตัดสินใจเท่านั้น แต่ยังเป็นการสร้างแรงบันดาลใจให้ผู้อื่นบรรลุความยิ่งใหญ่"`,
                    ThaishamalName: "ชามาล อาเบราธเน",
                    ThaishamalText: `"ในโลกที่มีเสียงรบกวน แบรนด์ของเราต้องมีเสียงที่แท้จริง มีส่วนร่วม และน่าจดจำ"`,
                    ThaidilshanName: "ดิลชาน เดอ ซิลวา",
                    ThaidilshanText: `"ความเป็นเลิศในการดำเนินงานเป็นรากฐานของความสำเร็จของเรา ขับเคลื่อนประสิทธิภาพและนวัตกรรม"`,
                    ThairohanName: "โรฮาน สมาราวีรา",
                    ThairohanText: `"เทคโนโลยีเปลี่ยนวิสัยทัศน์ให้เป็นจริง ขับเคลื่อนการเดินทางของเราไปสู่อนาคต"`,
                    ThairajivName: "ราชีฟ เสนาวีรัธเน",
                    ThairajivText: `"ความไว้วางใจและความพึงพอใจของลูกค้าเป็นรากฐานของชื่อเสียงของบริษัทเรา"`,
                    ThaipatricName: "แพทริก โยการัทนัม",
                    ThaipatricText: `"การเชื่อมต่อกับลูกค้าทั่วโลกของเราต้องการความเข้าใจในความต้องการที่หลากหลายและการให้บริการที่ยอดเยี่ยม"`,
                    ThaierangaName: "เริงก้า วิกรมสิงเห",
                    ThaierangaText: `"การสร้างความสัมพันธ์ที่แข็งแกร่งกับลูกค้าของเราเป็นรากฐานของความสำเร็จและการเติบโตของเรา"`,
                    ThaijananiName: "จานานี สิริวาร์ธาน",
                    ThaijananiText: `"การให้อำนาจแก่พนักงานและการสร้างวัฒนธรรมที่เป็นบวกคือกุญแจสู่ความสำเร็จขององค์กร"`,
                    ThairomeshName: "โรเมช เดอ ซิลวา",
                    ThairomeshText: `"ความสำเร็จในการขายไม่ใช่เรื่องของการผลักดันผลิตภัณฑ์ แต่เป็นเรื่องของการเข้าใจและแก้ปัญหาความต้องการของลูกค้า"`,
                },
                Thaisolutionssec: {
                    Thaimaintopic: "โซลูชั่น",
                    ThaiperiTopic: "การรักษาความปลอดภัยภายนอกและภายใน",
                    ThaicyberTopic: "การกำกับดูแลและการปฏิบัติตามความปลอดภัยทางไซเบอร์",
                    ThaiauthTopic: "การพิสูจน์ตัวตนและการจัดการข้อมูลประจำตัว",
                    ThaisecTopic: "การจัดการความปลอดภัย",
                    ThaiendTopic: "การรักษาความปลอดภัยปลายทาง",
                    ThainetTopic: "เครือข่าย",
                    ThaidataTopic: "โครงสร้างพื้นฐานและการตรวจสอบศูนย์ข้อมูล",
                    ThaiserverTopic: "โซลูชั่นการจัดเก็บและสำรองข้อมูลเซิร์ฟเวอร์",
                },
                Thaifootersec: {
                    ThaifootHeadTopic: "สำนักงานใหญ่",
                    ThaiheadLine1: "ชั้น 35,",
                    ThaiheadLine2: "เดอะ เกตเวย์ เวสต์ 150 บีชโร้ด,",
                    ThaiheadLine3: "สิงคโปร์ 189720.",
                    ThaiheadLine4: "ติดต่อ: +6567278910",
                    ThaifootConTopic: "สำนักงานในประเทศไทย",
                    ThaiconLine1: "184/75,",
                    ThaiconLine2: "ชั้น 17, ฟอรัม ทาวเวอร์,",
                    ThaiconLine3: "ถ.รัชดาภิเษก, แขวงห้วยขวาง, เขตห้วยขวาง,",
                    ThaiconLine4: "กรุงเทพฯ 10310, ประเทศไทย",
                    ThaiconLine5: "ติดต่อ: +66612700590",
                    ThairesTopic: "ทรัพยากร",
                    Thaires1: "กิจกรรมและข่าวสาร",
                    Thaires2: "คำถามที่พบบ่อย",
                    Thaires3: "อาชีพ",
                },
                Thaichatsec: {
                    Thaiques1: "สวัสดี! ฉันอยู่ที่นี่เพื่อช่วยเหลือคุณ ขอทราบชื่อของคุณได้ไหม?",
                    Thaiques2: `สวัสดี {previousValue}, ฉันช่วยอะไรคุณได้บ้าง?`,
                    Thaiques3: "แน่นอน. ขอเบอร์โทรศัพท์ของคุณได้ไหม?",
                    Thaiques4: "ขอบคุณ! พนักงานของเราจะโทรหาคุณในไม่ช้า",
                },
                Thainavsec: {
                    Thaitab1: "เกี่ยวกับเรา",
                    Thaitab2: "โซลูชั่น",
                    Thaitab3: "กิจกรรม",
                    Thaitab4: "กิจกรรมและข่าวสาร",
                    Thaitab5: "ข่าวสารล่าสุด",
                    Thaitab6: "บล็อก",
                    Thaitab7: "พอร์ทัล",
                    Thaitab8: "ประเทศ",
                    Thaitab9: "ติดต่อเรา",
                },
                Thaicontsec: {
                    Thaicont1: "ติดต่อเรา",
                    Thaicont2: "ติดต่อเรา",
                    Thaicont3: "เพื่อแจ้งให้เราทราบว่าเราสามารถช่วยคุณได้อย่างไร",
                    Thaicont4: "เรายินดีที่จะให้",
                    Thaicont5: "การสนับสนุนลูกค้า หรือ",
                    Thaicont6: "ตอบคำถามทั่วไปใดๆ",
                    Thaicont7: "ที่คุณอาจมี",
                    Thaicont8: "ชื่อ",
                    Thaicont9: "ต้องการชื่อ",
                    Thaicont10: "นามสกุล",
                    Thaicont11: "ต้องการนามสกุล",
                    Thaicont12: "บริษัท",
                    Thaicont13: "ต้องการบริษัท",
                    Thaicont14: "เบอร์โทรศัพท์ติดต่อ",
                    Thaicont15: "เบอร์โทรศัพท์ต้องมี 10 หลัก",
                    Thaicont16: "name@example.com",
                    Thaicont17: "ที่อยู่อีเมลไม่ถูกต้อง",
                    Thaicont18: "ต้องการความคิดเห็น",
                    Thaicont19: "ฉันยอมรับนโยบายความเป็นส่วนตัว",
                    Thaicont20: "คุณต้องยอมรับนโยบายความเป็นส่วนตัว",
                    Thaicont21: "ส่ง",
                    Thaicont22: "ล้าง",
                    Thaicont23: "ประเทศไทย",
                    Thaicont24: "สำนักงานประเทศไทย",
                    Thaicont25: "184/75 ชั้น 17",
                    Thaicont26: "อาคารฟอรั่ม ถนนรัชดาภิเษก",
                    Thaicont27: "แขวงห้วยขวาง เขตห้วยขวาง",
                    Thaicont28: "กรุงเทพฯ 10310 ประเทศไทย",
                    Thaicont29: "ขอเส้นทาง",
                },

                Thaieventsec: {
                    Thaievnt1: "กิจกรรมและข่าวสาร",
                    Thaievnt2: "กิจกรรมและข่าวสารล่าสุด",
                    Thaievnt3: "ไม่มีภาพที่ใช้ได้",
                    Thaievnt4: "ปิด",
                    Thaievnt5: "กิจกรรมและข่าวสาร",
                    Thaievnt6: "บล็อก",
                },
                ThaiupEventSec: {
                    Thaiupevnt1: "กิจกรรมที่จะเกิดขึ้น",
                    Thaiupevnt2: "กิจกรรมและข่าวสาร",
                    Thaiupevnt3: "ไม่มีภาพที่ใช้ได้",
                    Thaiupevnt4: "ปิด",
                },

                Thaiportalsec: {
                    Thaiptl1: "เตรียมเปิดตัว",
                    Thaiptl2: "เร็วๆ นี้"
                },
                Thaiblogsec: {
                    Thaiblg1: "บล็อก"
                },
                Thaiauthentisec:{
                    Thaiat1: "การยืนยันตัวตนและการจัดการข้อมูลประจำตัว",
                    Thaiat2: "ไม่มีภาพที่แสดง",
                },
                Thaicybersec: {
                    Thaicy1: "การกำกับดูแลและการปฏิบัติตามความปลอดภัยทางไซเบอร์",
                    Thaicy2: "ไม่มีภาพที่แสดง"
                },
                Thaiendpsec: {
                    Thaiep1: "ความปลอดภัยของปลายทาง",
                    Thaiep2: "ไม่มีภาพที่แสดง"
                },Thainewtworksec: {
                    Thaint1: "เครือข่าย",
                    Thaint2: "ไม่มีภาพที่แสดง"
                },Thaiifmsec: {
                    Thaiif1: "โครงสร้างพื้นฐานของศูนย์ข้อมูลและการตรวจสอบโครงสร้างพื้นฐาน",
                    Thaiif2: "ไม่มีภาพที่แสดง"
                },Thaiperisec: {
                    Thaipr1: "ความปลอดภัยรอบขอบเขตและภายใน",
                    Thaipr2: "ไม่มีภาพที่แสดง"
                },Thaisecuritysec: {
                    Thaiscrty1: "การจัดการความปลอดภัย",
                    Thaiscrty2: "ไม่มีภาพที่แสดง"
                },Thaiserversec: {
                    Thaisvr1: "โซลูชั่นการจัดเก็บและสำรองข้อมูลเซิร์ฟเวอร์",
                    Thaisvr2: "ไม่มีภาพที่แสดง"
                }
                
                               
                
            },
        }
    }
});
