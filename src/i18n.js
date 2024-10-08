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
                    greet2mid1: "Con",
                    greet2mid2: "nex ",
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
                    ourVText: "To be the leading global distributor of IT products by fostering strong partnerships, delivering effective marketing, and providing proficient support for mutual growth.",
                    ourMTopic: "Our Mission",
                    ourMText: "Our mission is to globally provide top-tier products and solutions with passion, continuous improvement, and proactive support, ensuring business success and satisfaction for our partners and their customers.",
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
                    patricName: "Patrick Yogaratnam",
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
                    solu: "Solutions",
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
                    headLine1: "60, Paya Lebar Road,",
                    headLine2: " #06-39, Paya Lebar Square, ",
                    headLine3: "Singapore 409051 .",
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
                    tab5: "Upcoming Events",
                    tab6: "Blogs",
                    tab7: "Portal",
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
                    cont30: "Leave A Comment"
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
                    upevnt2: "Events ",
                    upevnt3: "No Image Available",
                    upevnt4: "Close",
                },
                portalsec: {
                    ptl1: "To be launch",
                    ptl2: "Soon"
                },
                blogsec: {
                    blg1: "Blogs"
                },
                authentisec: {
                    at1: "Authentication & Identity Management",
                    at2: "No Image Available",
                },
                cybersec: {
                    cy1: "Cyber Security Governance & Compliance",
                    cy2: "No Image Available"
                }, endpsec: {
                    ep1: "Endpoint Security",
                    ep2: "No Image Available"
                }, newtworksec: {
                    nt1: "Networking",
                    nt2: "No Image Available"
                }, ifmsec: {
                    if1: "Data Center Infrastructure and Infrastructure Monitoring",
                    if2: "No Image Available"
                }, perisec: {
                    pr1: "Perimeter And Internal Security",
                    pr2: "No Image Available"
                }, securitysec: {
                    scrty1: "Security Management",
                    scrty2: "No Image Available"
                }, serversec: {
                    svr1: "Server Storage & Backup Solutions",
                    svr2: "No Image Available"
                },
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
                    ThaiourVText: "To be the leading global distributor of IT products by fostering strong partnerships, delivering effective marketing, and providing proficient support for mutual growth.",
                    ThaiourMTopic: "Our Mission",
                    ThaiourMText: "Our mission is to globally provide top-tier products and solutions with passion, continuous improvement, and proactive support, ensuring business success and satisfaction for our partners and their customers.",
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
                    ThaipatricName: "Patrick Yogaratnam",
                    ThaipatricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    ThaierangaName: "Eranga Wickramasinghe",
                    ThaierangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    ThaijananiName: "Janani Siriwardhane",
                    ThaijananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    ThairomeshName: "Romesh De Silva",
                    ThairomeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                    ThaiKiththiName: "Kiththi Perera",
                    ThaiKiththiText: `"Transforming potential into performance with innovative technology,"`,
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
                    ThaiMicrosoft: "Microsoft"
                },
                // Footer section
                Thaifootersec: {
                    ThaifootHeadTopic: "Head Office",
                    ThaiheadLine1: "60, Paya Lebar Road,",
                    ThaiheadLine2: " #06-39, Paya Lebar Square, ",
                    ThaiheadLine3: "Singapore 409051 .",
                    ThaiheadLine4: "Contact: +6567278910",
                    ThaifootConTopic: "Thailand Office",
                    ThaiconLine1: "184/79,",
                    ThaiconLine2: "Forum Tower Buiding, 17th Floor,",
                    ThaiconLine3: " Ratchadaphisek Road, Huai Khwang,",
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
                    Thaitab5: "Upcoming Events",
                    Thaitab6: "Blogs",
                    Thaitab7: "Portal",
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
                    Thaicont25: "184/79",
                    Thaicont26: "Forum Tower Buiding, 17th Floor,",
                    Thaicont27: "Ratchadaphisek Road, Huai Khwang,",
                    Thaicont28: "Bangkok 10310, Thailand",
                    Thaicont29: "Get Directions",
                    Thaicont30: "Leave A Comment"


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
                    Thaiupevnt2: "Events ",
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
                Thaiauthentisec: {
                    Thaiat1: "Authentication & Identity Management",
                    Thaiat2: "No Image Available",
                },
                Thaicybersec: {
                    Thaicy1: "Cyber Security Governance & Compliance",
                    Thaicy2: "No Image Available"
                },
                Thaiendpsec: {
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
                    Thaipr1: "Perimeter And Internal Security",
                    Thaipr2: "No Image Available"
                },
                Thaisecuritysec: {
                    Thaiscrty1: "Security Management",
                    Thaiscrty2: "No Image Available"
                },
                Thaiserversec: {
                    Thaisvr1: "Server Storage & Backup Solutions",
                    Thaisvr2: "No Image Available"
                }

                // MU Part

                ,
                Muriherosect: {
                    Murigreet1: "Leading Technology Distributor",
                    Murigreet2first: "Welcome to ",
                    Murigreet2mid1: "Con",
                    Murigreet2mid2: "nex ",
                    Murigreet2last: "Information Technologies",
                    Murigreet3: "Value added distributor for more than 30 leading global vendors.",
                    Muricontact: "Contact Us",
                    Muriwtvideo: "Watch Video",
                },
                Muriwhowearesec: {
                    Muriwhotopic: "Who we are",
                    Muricard1: "Distribution",
                    Muricard1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    Muricard2: "Consultancy",
                    Muricard2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    Muricard3: "Training",
                    Muricard3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    Muricard4: "TAC Support",
                    Muricard4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    MurirText1: "A decade of expertise in cutting-edge technology distribution ",
                    MurirText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    Muriic1: "Found",
                    Muriic2: "Employees",
                    Muriic3: "Vendors",
                    Muriic4: "Partners",
                    Muricontact: "Contact Us",
                },
                Murivendorsec: {
                    Muriventopic: "Our Vendors",
                    MurivenText1: "Embark on technological Excellence with our Trusted ",
                    MurivenText2: "Network of Vendors.",

                },
                Murilatestsec: {
                    Murilattopic: "Latest News",
                },
                // About us section
                Muriourstory: {
                    MuriourSTopic: "Our Story",
                    MuriourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    MuriourVTopic: "Our Vision",
                    MuriourVText: "To be the leading global distributor of IT products by fostering strong partnerships, delivering effective marketing, and providing proficient support for mutual growth.",
                    MuriourMTopic: "Our Mission",
                    MuriourMText: "Our mission is to globally provide top-tier products and solutions with passion, continuous improvement, and proactive support, ensuring business success and satisfaction for our partners and their customers.",
                    MurisureshName: "Suresh Wijesinghe",
                    MurisureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    MurishamalName: "Shamal Aberathne",
                    MurishamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    MuridilshanName: "Dilshan De Silva",
                    MuridilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    MurirohanName: "Rohan Samaraweera",
                    MurirohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    MurirajivName: "Rajiv Senawirathne",
                    MurirajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    MuripatricName: "Patrick Yogaratnam",
                    MuripatricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    MurierangaName: "Eranga Wickramasinghe",
                    MurierangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    MurijananiName: "Janani Siriwardhane",
                    MurijananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    MuriromeshName: "Romesh De Silva",
                    MuriromeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                    MuriKiththiName: "Kiththi Perera",
                    MuriKiththiText: `"Transforming potential into performance with innovative technology,"`,
                },
                Murilatestsec: {
                    Murilattopic: "Latest News",
                },
                // Sollutions section
                Murisolutionssec: {
                    Murimaintopic: "Solutions",
                    MuriperiTopic: "Perimeter and  Internal Security",
                    MuricyberTopic: "Cyber Security Governance & Compliance",
                    MuriauthTopic: "Authentication & Identity Management",
                    MurisecTopic: "Security Management",
                    MuriendTopic: "Endpoint Security",
                    MurinetTopic: "Networking",
                    MuridataTopic: "Data Center Infrastructure and  Monitoring",
                    MuriserverTopic: "Server Storage & Backup Solutions",
                    MuriMicrosoft: "Microsoft"
                },
                // Footer section
                Murifootersec: {
                    MurifootHeadTopic: "Head Office",
                    MuriiheadLine1: "60, Paya Lebar Road,",
                    MuriheadLine2: " #06-39, Paya Lebar Square, ",
                    MuriheadLine3: "Singapore 409051 .",
                    MuriheadLine4: "Contact: +6567278910",
                    MurifootConTopic: "Mauritius Office",
                    MuriconLine1: "Office C-03, ",
                    MuriconLine2: "Ebene Junction, ",
                    MuriconLine3: "Ebene, Quatre Bornes,",
                    MuriconLine4: "Mauritius",
                    MuriconLine5: "Contact: +23 05 942 8354",
                    MuriresTopic: "Resources",
                    Murires1: "Event & News",
                    Murires2: "FAQs",
                    Murires3: "Careers",
                },
                // Chat
                Murichatsec: {
                    Muriques1: "Hi! I am here to help you. Can I know your name? ",
                    Muriques2: `Hi {previousValue}, How Can I help you?`,
                    Muriques3: "Sure. Can I have your phone number?",
                    Muriques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                Murinavsec: {
                    Muritab1: "About Us",
                    Muritab2: "Solutions",
                    Muritab3: "Events",
                    Muritab4: "Events & News",
                    Muritab5: "Upcoming Events",
                    Muritab6: "Blogs",
                    Muritab7: "Portal",
                    Muritab8: "Country",
                    Muritab9: "Contact Us",
                },

                // contactus page
                Muricontsec: {
                    Muricont1: "Contact Us",
                    Muricont2: "Reach out to us ",
                    Muricont3: "to let us know how we can assist you.",
                    Muricont4: "We are happy to provide",
                    Muricont5: "customer support or",
                    Muricont6: "answer any general inquiries",
                    Muricont7: " you may have.",
                    Muricont8: "First name",
                    Muricont9: "First name is required",
                    Muricont10: "Last name",
                    Muricont11: "Last name is required",
                    Muricont12: "Company",
                    Muricont13: "Company is required",
                    Muricont14: "Contact Number",
                    Muricont15: "Contact number must be exactly 10 digits",
                    Muricont16: "name@example.com",
                    Muricont17: "Invalid email address",
                    Muricont18: "Comments are required",
                    Muricont19: "I accept the privacy & policy",
                    Muricont20: "You must accept the privacy & policy",
                    Muricont21: "Submit",
                    Muricont22: "Clear",
                    Muricont23: "Mauritius",
                    Muricont24: "Mauritius Office",
                    Muricont25: "Office C-03,",
                    Muricont26: "Ebene Junction,",
                    Muricont27: "Ebene, Quatre Bornes, ",
                    Muricont28: "Mauritius",
                    Muricont29: "Get Directions",
                    Muricont30: "Leave a comment"
                },

                Murieventsec: {
                    Murievnt1: "Events & News",
                    Murievnt2: "Latest Events and News",
                    Murievnt3: "No Image Available",
                    Murievnt4: "Close",
                    Murievnt5: "Events & News",
                    Murievnt6: "Blogs",
                },
                MuriupEventSec: {
                    Muriupevnt1: "Upcoming",
                    Muriupevnt2: "Events ",
                    Muriupevnt3: "No Image Available",
                    Muriupevnt4: "Close",
                },
                Muriportalsec: {
                    Muriptl1: "To be launch",
                    Muriptl2: "Soon"
                },
                Muriblogsec: {
                    Muriblg1: "Blogs"
                },
                Muriauthentisec: {
                    Muriat1: "Authentication & Identity Management",
                    Muriat2: "No Image Available",
                },
                Muricybersec: {
                    Muricy1: "Cyber Security Governance & Compliance",
                    Muricy2: "No Image Available"
                },
                Muriendpsec: {
                    Muriep1: "Endpoint Security",
                    Muriep2: "No Image Available"
                },
                Murinewtworksec: {
                    Murint1: "Networking",
                    Murint2: "No Image Available"
                },
                Muriifmsec: {
                    Muriif1: "Data Center Infrastructure and Infrastructure Monitoring",
                    Muriif2: "No Image Available"
                },
                Muriperisec: {
                    Muripr1: "Perimeter And Internal Security",
                    Muripr2: "No Image Available"
                },
                Murisecuritysec: {
                    Muriscrty1: "Security Management",
                    Muriscrty2: "No Image Available"
                },
                Muriserversec: {
                    Murisvr1: "Server Storage & Backup Solutions",
                    Murisvr2: "No Image Available"
                },

                // End of MU part


                // NPL Part


                NPLherosect: {
                    NPLgreet1: "Leading Technology Distributor",
                    NPLgreet2first: "Welcome to ",
                    NPLgreet2mid1: "Con",
                    NPLgreet2mid2: "nex ",
                    NPLgreet2last: "Information Technologies",
                    NPLgreet3: "Value added distributor for more than 30 leading global vendors.",
                    NPLcontact: "Contact Us",
                    NPLwtvideo: "Watch Video",
                },
                NPLwhowearesec: {
                    NPLwhotopic: "Who we are",
                    NPLcard1: "Distribution",
                    NPLcard1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    NPLcard2: "Consultancy",
                    NPLcard2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    NPLcard3: "Training",
                    NPLcard3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    NPLcard4: "TAC Support",
                    NPLcard4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    NPLrText1: "A decade of expertise in cutting-edge technology distribution ",
                    NPLrText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    NPLic1: "Found",
                    NPLic2: "Employees",
                    NPLic3: "Vendors",
                    NPLic4: "Partners",
                    NPLcontact: "Contact Us",
                },
                NPLvendorsec: {
                    NPLventopic: "Our Vendors",
                    NPLvenText1: "Embark on technological Excellence with our Trusted ",
                    NPLvenText2: "Network of Vendors.",

                },
                NPLlatestsec: {
                    NPLlattopic: "Latest News",
                },
                // About us section
                NPLourstory: {
                    NPLourSTopic: "Our Story",
                    NPLourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    NPLourVTopic: "Our Vision",
                    NPLourVText: "To be the leading global distributor of IT products by fostering strong partnerships, delivering effective marketing, and providing proficient support for mutual growth.",
                    NPLourMTopic: "Our Mission",
                    NPLourMText: "Our mission is to globally provide top-tier products and solutions with passion, continuous improvement, and proactive support, ensuring business success and satisfaction for our partners and their customers.",
                    NPLsureshName: "Suresh Wijesinghe",
                    NPLsureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    NPLshamalName: "Shamal Aberathne",
                    NPLshamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    NPLdilshanName: "Dilshan De Silva",
                    NPLdilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    NPLrohanName: "Rohan Samaraweera",
                    NPLrohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    NPLrajivName: "Rajiv Senawirathne",
                    NPLrajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    NPLpatricName: "Patrick Yogaratnam",
                    NPLpatricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    NPLerangaName: "Eranga Wickramasinghe",
                    NPLerangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    NPLjananiName: "Janani Siriwardhane",
                    NPLjananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    NPLromeshName: "Romesh De Silva",
                    NPLromeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                    NPLKiththiName: "Kiththi Perera",
                    NPLKiththiText: `"Transforming potential into performance with innovative technology,"`,
                },
                NPLlatestsec: {
                    NPLlattopic: "Latest News",
                },
                // Sollutions section
                NPLsolutionssec: {
                    NPLmaintopic: "Solutions",
                    NPLperiTopic: "Perimeter and  Internal Security",
                    NPLcyberTopic: "Cyber Security Governance & Compliance",
                    NPLauthTopic: "Authentication & Identity Management",
                    NPLsecTopic: "Security Management",
                    NPLendTopic: "Endpoint Security",
                    NPLnetTopic: "Networking",
                    NPLdataTopic: "Data Center Infrastructure and  Monitoring",
                    NPLserverTopic: "Server Storage & Backup Solutions",
                    NPLMicrosoft: "Microsoft"
                },
                // Footer section
                NPLfootersec: {
                    NPLfootHeadTopic: "Head Office",
                    NPLheadLine1: "60, Paya Lebar Road,",
                    NPLheadLine2: " #06-39, Paya Lebar Square, ",
                    NPLheadLine3: "Singapore 409051 .",
                    NPLheadLine4: "Contact: +6567278910",
                    NPLfootConTopic: "Nepal Office",
                    NPLconLine1: " Baluwatar-4,  ",
                    NPLconLine2: "Kathmandu,  ",
                    NPLconLine3: "Nepal.",
                    // NPLconLine4: "",
                    NPLconLine5: "Contact: +977-9841592542",
                    NPLresTopic: "Resources",
                    NPLres1: "Event & News",
                    NPLres2: "FAQs",
                    NPLres3: "Careers",
                },
                // Chat
                NPLchatsec: {
                    NPLques1: "Hi! I am here to help you. Can I know your name? ",
                    NPLques2: `Hi {previousValue}, How Can I help you?`,
                    NPLques3: "Sure. Can I have your phone number?",
                    NPLques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                NPLnavsec: {
                    NPLtab1: "About Us",
                    NPLtab2: "Solutions",
                    NPLtab3: "Events",
                    NPLtab4: "Events & News",
                    NPLtab5: "Upcoming Events",
                    NPLtab6: "Blogs",
                    NPLtab7: "Portal",
                    NPLtab8: "Country",
                    NPLtab9: "Contact Us",
                },

                // contactus page
                NPLcontsec: {
                    NPLcont1: "Contact Us",
                    NPLcont2: "Reach out to us ",
                    NPLcont3: "to let us know how we can assist you.",
                    NPLcont4: "We are happy to provide",
                    NPLcont5: "customer support or",
                    NPLcont6: "answer any general inquiries",
                    NPLcont7: " you may have.",
                    NPLcont8: "First name",
                    NPLcont9: "First name is required",
                    NPLcont10: "Last name",
                    NPLcont11: "Last name is required",
                    NPLcont12: "Company",
                    NPLcont13: "Company is required",
                    NPLcont14: "Contact Number",
                    NPLcont15: "Contact number must be exactly 10 digits",
                    NPLcont16: "name@example.com",
                    NPLcont17: "Invalid email address",
                    NPLcont18: "Comments are required",
                    NPLcont19: "I accept the privacy & policy",
                    NPLcont20: "You must accept the privacy & policy",
                    NPLcont21: "Submit",
                    NPLcont22: "Clear",
                    NPLcont23: "Nepal",
                    NPLcont24: "Nepal Office",
                    NPLcont25: "Baluwatar-4,",
                    NPLcont26: "Kathmandu",
                    NPLcont27: "Nepal. ",
                    // NPLcont28: "Nepal",
                    NPLcont29: "Get Directions",
                    NPLcont30: "Leave a comment"
                },

                NPLeventsec: {
                    NPLevnt1: "Events & News",
                    NPLevnt2: "Latest Events and News",
                    NPLevnt3: "No Image Available",
                    NPLevnt4: "Close",
                    NPLevnt5: "Events & News",
                    NPLevnt6: "Blogs",
                },
                NPLupEventSec: {
                    NPLupevnt1: "Upcoming",
                    NPLupevnt2: "Events",
                    NPLupevnt3: "No Image Available",
                    NPLupevnt4: "Close",
                },
                NPLportalsec: {
                    NPLptl1: "To be launch",
                    NPLptl2: "Soon"
                },
                NPLblogsec: {
                    NPLblg1: "Blogs"
                },
                NPLauthentisec: {
                    NPLat1: "Authentication & Identity Management",
                    NPLat2: "No Image Available",
                },
                NPLcybersec: {
                    NPLcy1: "Cyber Security Governance & Compliance",
                    NPLcy2: "No Image Available"
                },
                NPLendpsec: {
                    NPLep1: "Endpoint Security",
                    NPLep2: "No Image Available"
                },
                NPLnewtworksec: {
                    NPLnt1: "Networking",
                    NPLnt2: "No Image Available"
                },
                NPLifmsec: {
                    NPLif1: "Data Center Infrastructure and Infrastructure Monitoring",
                    NPLif2: "No Image Available"
                },
                NPLperisec: {
                    NPLpr1: "Perimeter And Internal Security",
                    NPLpr2: "No Image Available"
                },
                NPLsecuritysec: {
                    NPLscrty1: "Security Management",
                    NPLscrty2: "No Image Available"
                },
                NPLserversec: {
                    NPLsvr1: "Server Storage & Backup Solutions",
                    NPLsvr2: "No Image Available"
                },

                // End of NPL part


                //Brunei

                Brnherosect: {
                    Brngreet1: "Leading Technology Distributor",
                    Brngreet2first: "Welcome to ",
                    Brngreet2mid: "Connex ",
                    Brngreet2last: "Information Technologies",
                    Brngreet3: "Value added distributor for more than 30 leading global vendors.",
                    Brncontact: "Contact Us",
                    Brnwtvideo: "Watch Video",
                },
                Brnwhowearesec: {
                    Brnwhotopic: "Who we are",
                    Brncard1: "Distribution",
                    Brncard1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    Brncard2: "Consultancy",
                    Brncard2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    Brncard3: "Training",
                    Brncard3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    Brncard4: "TAC Support",
                    Brncard4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    BrnrText1: "A decade of expertise in cutting-edge technology distribution ",
                    BrnrText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    Brnic1: "Found",
                    Brnic2: "Employees",
                    Brnic3: "Vendors",
                    Brnic4: "Partners",
                    Brncontact: "Contact Us",
                },
                Brnvendorsec: {
                    Brnventopic: "Our Vendors",
                    BrnvenText1: "Embark on technological Excellence with our Trusted ",
                    BrnvenText2: "Network of Vendors.",

                },
                Brnlatestsec: {
                    Brnlattopic: "Latest News",
                },
                // About us section
                Brnourstory: {
                    BrnourSTopic: "Our Story",
                    BrnourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    BrnourVTopic: "Our Vision",
                    BrnourVText: "To be the leading global distributor of IT products by fostering strong partnerships, delivering effective marketing, and providing proficient support for mutual growth.",
                    BrnourMTopic: "Our Mission",
                    BrnourMText: "Our mission is to globally provide top-tier products and solutions with passion, continuous improvement, and proactive support, ensuring business success and satisfaction for our partners and their customers.",
                    BrnsureshName: "Suresh Wijesinghe",
                    BrnsureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    BrnshamalName: "Shamal Aberathne",
                    BrnshamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    BrndilshanName: "Dilshan De Silva",
                    BrndilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    BrnrohanName: "Rohan Samaraweera",
                    BrnrohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    BrnrajivName: "Rajiv Senawirathne",
                    BrnrajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    BrnpatricName: "Patrick Yogaratnam",
                    BrnpatricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    BrnerangaName: "Eranga Wickramasinghe",
                    BrnerangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    BrnjananiName: "Janani Siriwardhane",
                    BrnjananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    BrnromeshName: "Romesh De Silva",
                    BrnromeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                    BrnKiththiName: "Kiththi Perera",
                    BrnKiththiText: `"Transforming potential into performance with innovative technology,"`,
                },
                Brnlatestsec: {
                    Brnlattopic: "Latest News",
                },
                // Sollutions section
                Brnsolutionssec: {
                    Brnmaintopic: "Solutions",
                    BrnperiTopic: "Perimeter and  Internal Security",
                    BrncyberTopic: "Cyber Security Governance & Compliance",
                    BrnauthTopic: "Authentication & Identity Management",
                    BrnsecTopic: "Security Management",
                    BrnendTopic: "Endpoint Security",
                    BrnnetTopic: "Networking",
                    BrndataTopic: "Data Center Infrastructure and  Monitoring",
                    BrnserverTopic: "Server Storage & Backup Solutions",
                },
                // Footer section
                Brnfootersec: {
                    BrnfootHeadTopic: "Head Office",
                    BrnheadLine1: "60, Paya Lebar Road,",
                    BrnheadLine2: " #06-39, Paya Lebar Square, ",
                    BrnheadLine3: "Singapore 409051 .",
                    BrnheadLine4: "Contact: +6567278910",
                    BrnfootConTopic: "Brunei Office",
                    BrnconLine1: "Connex Information Technologies Sdn Bhd",
                    BrnconLine2: "No. B22, B23 & B24, Block B, Bangunan Habza, Spg 150 , ",
                    BrnconLine3: "Kg Kiulap,Gadong B, Brunei Muara, BE1518,   ",
                    BrnconLine4: " Brunei Darussalam.",
                    BrnconLine5: "Contact: +673 223 3575",
                    BrnresTopic: "Resources",
                    Brnres1: "Event & News",
                    Brnres2: "FAQs",
                    Brnres3: "Careers",
                },
                // Chat
                Brnchatsec: {
                    Brnques1: "Hi! I am here to help you. Can I know your name? ",
                    Brnques2: `Hi {previousValue}, How Can I help you?`,
                    Brnques3: "Sure. Can I have your phone number?",
                    Brnques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                Brnnavsec: {
                    Brntab1: "About Us",
                    Brntab2: "Solutions",
                    Brntab3: "Events",
                    Brntab4: "Events & News",
                    Brntab5: "Upcoming Events",
                    Brntab6: "Blogs",
                    Brntab7: "Portal",
                    Brntab8: "Country",
                    Brntab9: "Contact Us",
                },

                // contactus page
                Brncontsec: {
                    Brncont1: "Contact Us",
                    Brncont2: "Reach out to us ",
                    Brncont3: "to let us know how we can assist you.",
                    Brncont4: "We are happy to provide",
                    Brncont5: "customer support or",
                    Brncont6: "answer any general inquiries",
                    Brncont7: " you may have.",
                    Brncont8: "First name",
                    Brncont9: "First name is required",
                    Brncont10: "Last name",
                    Brncont11: "Last name is required",
                    Brncont12: "Company",
                    Brncont13: "Company is required",
                    Brncont14: "Contact Number",
                    Brncont15: "Contact number must be exactly 10 digits",
                    Brncont16: "name@example.com",
                    Brncont17: "Invalid email address",
                    Brncont18: "Comments are required",
                    Brncont19: "I accept the privacy & policy",
                    Brncont20: "You must accept the privacy & policy",
                    Brncont21: "Submit",
                    Brncont22: "Clear",
                    Brncont23: "Brunei",
                    Brncont24: "Brunei Office",
                    Brncont25: "No.B22,B23 & B24, Block B",
                    Brncont26: "Bangunan Habza, Spg 150, Kg kiulap",
                    Brncont27: "Gadong B, Brunei Muara, BE1518",
                    Brncont28: "Brunei Darussalam",
                    Brncont29: "Get Directions",
                    Brncont30: "Leave A Comment"
                },

                Brneventsec: {
                    Brnevnt1: "Events & News",
                    Brnevnt2: "Latest Events and News",
                    Brnevnt3: "No Image Available",
                    Brnevnt4: "Close",
                    Brnevnt5: "Events & News",
                    Brnevnt6: "Blogs",
                },
                BrnupEventSec: {
                    Brnupevnt1: "Upcoming",
                    Brnupevnt2: "Events ",
                    Brnupevnt3: "No Image Available",
                    Brnupevnt4: "Close",
                },
                Brnportalsec: {
                    Brnptl1: "To be launch",
                    Brnptl2: "Soon"
                },
                Brnblogsec: {
                    Brnblg1: "Blogs"
                },
                Brnauthentisec: {
                    Brnat1: "Authentication & Identity Management",
                    Brnat2: "No Image Available",
                },
                Brncybersec: {
                    Brncy1: "Cyber Security Governance & Compliance",
                    Brncy2: "No Image Available"
                },
                Brnendpsec: {
                    Brnep1: "Endpoint Security",
                    Brnep2: "No Image Available"
                },
                Brnnewtworksec: {
                    Brnnt1: "Networking",
                    Brnnt2: "No Image Available"
                },
                Brnifmsec: {
                    Brnif1: "Data Center Infrastructure and Infrastructure Monitoring",
                    Brnif2: "No Image Available"
                },
                Brnperisec: {
                    Brnpr1: "Perimeter And Internal Security",
                    Brnpr2: "No Image Available"
                },
                Brnsecuritysec: {
                    Brnscrty1: "Security Management",
                    Brnscrty2: "No Image Available"
                },
                Brnserversec: {
                    Brnsvr1: "Server Storage & Backup Solutions",
                    Brnsvr2: "No Image Available"
                }

                //Brunei End

            }
        },
        kh: {
            translation: {
                herosect: {
                    greet1: "អ្នកចែកចាយបច្ចេកវិទ្យាឈានមុខ",
                    greet2first: "សូមស្វាគមន៍មកកាន់ ",
                    greet2mid1: "Con",
                    greet2mid2: "nex ",
                    greet2last: "Information Technologies",
                    greet3: "អ្នកចែកចាយសេវាកម្ម និងផលិតផលជាង៣០ ប្រភេទទូទាំងពិភពលោកដ៏ល្អជាមួយនឹងតម្លៃពិសេស",
                    contact: "ទាក់ទងមកយើង",
                    wtvideo: "មើលវីដេអូ",
                },
                whowearesec: {
                    whotopic: "អំពីយើង",
                    card1: "ផលិតផលនាំចូលផ្តាច់មុខ",
                    card1Text: "ស្វែងរកដំណោះស្រាយដែលត្រូវបានបង្កើតឡើងដើម្បីបំពេញតម្រូវការប្រើចុងក្រោយជាមួយដំណោះស្រាយប្រើសមរម្សនិងប្រកួតប្រជែងបំផុតសម្រាប់តម្រូវការដែលមានលក្ខណះពីសេសរបស់យើង។",
                    card2: "ការផ្តល់យោបល់",
                    card2Text: "សេវាកម្មផ្តល់យោបល់គឺជាដំណោះស្រាយដ៏ពិសេសដែលត្រូវបានផ្តល់ជូនដោយ Connex ដែលធានាថាដំណោះស្រាយដែលសមរម្យនិងប្រកួតប្រជែងបំផុតសម្រាប់តម្រូវការរបស់អ្នកប្រើចុងក្រោយ។ យើងផ្តល់សេវាកម្មផ្តល់យោបល់ដែលមានជំនាញវិជ្ជាជីវៈដែលរួមបញ្ចូលគ្នាដែលលូតលាស់និងផ្លាស់ប្តូរជាមួយអាជីវកម្មនិងតម្រូវការរបស់អតិថិជន។ ក្រុមហ៊ុនផ្តល់យោបល់ Connex ផ្តល់នូវបុគ្គលិកដែលមានលក្ខណៈសម្បត្តិខ្ពស់ដើម្បីបំពេញជំនាញរបស់ក្រុមរបស់អ្នក។ អ្នកផ្តល់យោបល់និងវិស្វកររបស់យើងធ្វើការនៅលើឈ្មោះរបស់អ្នកដើម្បីធានាការប្រតិបត្តិការជាបន្តនៃការតំឡើងរបស់អតិថិជនដោយទៀងទាត់និងស្របតាមផលប៉ះពាល់នៃថវិកា។",
                    card3: "ការបណ្តុះបណ្តាល",
                    card3Text: "យើងជឿជាក់ថាជម្រើសនៃការរៀនសូត្រអស់មួយជីវិតហើយយើងខិតខំបង្កើតវប្បធម៌នៃការរៀនសូត្រដោយផ្តល់ឱកាសជាច្រើនដល់បុគ្គលិករបស់យើងដើម្បីបន្តការអភិវឌ្ឍជំនាញវិជ្ជាជីវៈរបស់ពួកគេ។ យើងក៏បណ្តុះបណ្តាលបុគ្គលិករបស់យើងសម្រាប់មុខតំណែងនៃការដឹកនាំអនាគតពីក្នុងក្រុមហ៊ុន។ នៅក្នុងពិភពឌីជីថលដែលមានការវិវត្តជាបន្តបន្ទាប់ឧស្សាហកម្មបច្ចេកវិទ្យាប្រឈមនឹងការផ្លាស់ប្តូរយ៉ាងលឿន ដូច្នេះយើងយល់ដឹងពីភាពចាំបាច់ក្នុងការគាំទ្រអត្រាការផ្លាស់ប្តូរជា​ច្រើននិងនៅលើដំណើរដ៏អស្ចារ្យនៃបច្ចេកវិទ្យា។ ការបណ្តុះបណ្តាលអាជីពរបស់យើងនិងការអភិវឌ្ឍជំនាញវិជ្ជាជីវៈបានរួមចំណែកក្នុងការរក្សាបុគ្គលិក។",
                    card4: "ការគាំទ្រ TAC",
                    card4Text: "Connex ផ្តល់សេវាកម្ម TAC 24/7 ជាមួយនឹងមនុស្សដែលមានវិជ្ជាជីវៈ បច្ចេកទេសនិងមានសមត្ថភាពដែលបានបញ្ជាក់។ យើងមានមោទនភាពនៃកិច្ចព្រមព្រៀងសេវាកម្ (SLA) របស់ Bronze, Silver, Gold និង Platinum ។ អ្នកនឹងទទួលបានការចូលរួមជាមួយអ្នកគ្រប់គ្រងផលិតផលរបស់អ្នកដែលនឹងចែករំលែកការយល់ដឹងរបស់គាត់អំពីផលិតផល ដូច្នេះអ្នកមានការយល់ដឹងពេញលេញនិងមានសមត្ថភាពបច្ចេកទេសក្នុងការប្រើប្រាស់ផលិតផល។ ការស្រាវជ្រាវផលិតផលនិងព័ត៌មានអំពីការចុះឈ្មោះអាជីវកម្មក៏នឹងត្រូវបានចែករំលែកផងដែរ។ សេវាកម្មផ្តល់ជំនួយវិជ្ជាជីវៈនិងបច្ចេកទេសរបស់ Connex គឺមានសម្រាប់ដៃគូរបស់យើងប៉ុណ្ណោះ។ សូមទាក់ទងមកយើង។",
                    rText1: "បទពិសោធន៍រយៈពេលជាង១០ឆ្នាំក្នុងការចែកចាយសេវាកម្ម និងផលិតផលបច្ចេកវិទ្យាទំនើប",
                    rText2: "ជាអ្នកចែកចាយបច្ចែកវិទ្យាដ័៏លេចធ្លោមានភាពរីកចម្រើនក្នុងការតភ្ជាប់ទៅកាន់ពិភពលោកដែលកំពុងវិត្តទៅមុខ។ប្រសិនបើអ្នកត្រូវការដំណោះស្រាយផ្សេងៗដើម្បីសំរេចបាននូវភាពច្បាស់លាស់និងការបំលែងអាជីវកម្មរបស់អ្នក ការស្វែងរករបស់អ្នកនៅទីនេះ។",
                    ic1: "បង្កើតឡើង",
                    ic2: "បុគ្គលិក",
                    ic3: "អ្នកលក់",
                    ic4: "ដៃគូ",
                    contact: "ទាក់ទងមកយើង",
                },
                vendorsec: {
                    ventopic: "ទំនាក់ទំនងផ្នែកលក់",
                    venText1: "ចាប់ផ្តើមនូវភាពល្អឥតខ្ចោះនូវបណ្តាញដែគួសហការដ៍មានទំនុកចិត្តរបស់យើង។",
                    venText2: "ព័ត៏មានថ្មីៗ",
                },
                ourstory: {
                    ourSTopic: "អំពីយើង",
                    ourSText: "បង្កើតឡើងដោយចំណង់ចំណូលចិត្តក្នុងបច្ចេកវិទ្យានិងភាពល្អឥតខ្ចោះ CONNEX INFORMATION TECHNOLOGY បានក្លាយជាអ្នកដឹកនាំក្នុងការចែកចាយផលិតផល IT ។ យើងបានចាប់ផ្តើមដោយចក្ខុវិស័យក្នុងការផ្លាស់ប្តូរឧស្សាហកម្មតាមរយៈដំណោះស្រាយថ្មីនិងការគាំទ្រដែលល្អឥតខ្ចោះ។ ជោគជ័យរបស់យើងគឺដោយផ្អែកលើទំនាក់ទំនងរឹងមាំជាមួយអតិថិជននិងដៃគូរបស់យើងដែលអនុញ្ញាតឱ្យយើងធ្វើឱ្យសមរម្យនិងបំពេញតាមតម្រូវការម៉ាក។ នៅពេលដែលយើងលូតលាស់យើងនៅតែប្តេជ្ញាផ្លាស់ប្តូរជាមួយបច្ចេកវិទ្យាបញ្ញា។",
                    ourVTopic: "ចក្ខុវិស័យរបស់យើង",
                    ourVText: "ដើម្បីក្លាយជាអ្នកចែកចាយផលិតផល IT ឈានមុខគេទូទាំងពិភពលោក ដោយ ជំរុញភាពជាដៃគូរឹងមាំ ផ្តល់ប្រសិទ្ធភាព ទីផ្សារ និងផ្តល់ការគាំទ្រយ៉ាងស្ទាត់ជំនាញសម្រាប់ការរីកចម្រើនទៅវិញទៅមក។",
                    ourMTopic: "បេសកកម្មរបស់យើង",
                    ourMText: " បេសកកម្មរបស់យើងគឺដើម្បីផ្តល់នូវផលិតផលលំដាប់កំពូលទូទាំងពិភពលោក និងដំណោះស្រាយជាមួយនឹងចំណង់ចំណូលចិត្ត ការកែលម្អជាបន្តបន្ទាប់ និងការគាំទ្រយ៉ាងសកម្ម ធានានូវភាពជោគជ័យនៃអាជីវកម្ម និង ការពេញចិត្តសម្រាប់ដៃគូរបស់យើង និងអតិថិជនរបស់ពួកគេ។",
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
                    patricName: "Patrick Yogaratnam",
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
                    periTopic: "បណ្តាញសន្តិសុខផ្ទៃក្នុង",
                    cyberTopic: "ការគ្រប់គ្រងនិងការអនុវត្ត សន្តិសុខបច្ចេកវិទ្យា",
                    authTopic: "ការផ្ទៀងផ្តាត់និងការគ្រប់គ្រង អត្តសញ្ញាណ",
                    secTopic: "ការគ្រប់គ្រងប្រព័ន្ធសុត្ថិភាព",
                    endTopic: "សន្តិសុខផ្នែកចុងក្រោយ",
                    netTopic: "បណ្ដាញ",
                    dataTopic: "ហេដ្ឋារចនាសម្ព័ន្ធនិងការត្រួតពិនិត្យផ្នែកទិន្នន័យ",
                    serverTopic: "ដំណោះស្រាយផ្ទុកនិងការបម្រុងទុកម៉ាស៊ីនបម្រើ",
                    Microsoft: "ម៉ៃក្រូសូហ្វ្ទ"
                },
                footersec: {
                    footHeadTopic: "ការិយាល័យកណ្ដាល : ",
                    headLine1: "60, ផ្លូវ Paya Lebar,",
                    headLine2: "លេខ #06-39, Paya Lebar Square,",
                    headLine3: "សិង្ហបុរី 409051។",
                    headLine4: "លេខទំនាក់ទំនង : +6567278910",
                    footConTopic: "ការិយាល័យរាជធានីភ្នំពេញប្រទេសកម្ពុជា : ",
                    conLine1: "ជាន់11F-12 ផ្លូវសុភមង្គល ",
                    conLine2: "ភូមិ១៤ សង្កាត់ទន្លេបាសាក់ ",
                    conLine3: "ខណ្ឌចំការមន ",
                    conLine4: "រាធានីភ្នំពេញ។",
                    conLine5: "លេខទំនាក់ទំនង : +85586677044",
                    resTopic: "ឧបករណ៍ :",
                    res1: "ព្រឹត្តិការណ៍ និងព័ត៍មាន",
                    res2: "សំនួរ",
                    res3: "រឺមតិយោបសល់",
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
                    cont1: "ទំនាក់ទំនងផ្នែកសេវាកម្ម",
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
                    cont23: "ការិយាល័យក្រុង",
                    cont24: "ភ្នំពេញប្រទេសកម្ពុជា",
                    cont25: "Morgan Tower ទីក្រុងកោះពេជ្រ ",
                    cont26: "ជាន់ទី១១ បន្ទប់លេខ11F-12 ផ្លូវសុភមង្គល ",
                    cont27: "ភូមិ១៤ សង្កាត់ទន្លេបាសាក់",
                    cont28: "ខណ្ឌចំការមន រាជធានីភ្នំពេញ",
                    cont29: "ទទួលដំណើរ",
                    cont30: "បោះពុម្ភមតិយោបល់នៅទីនេ"
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
                portalsec: {
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
                    ThaiourVText: "เพื่อเป็นผู้จัดจำหน่ายสินค้าไอทีชั้นนำระดับโลกโดย ส่งเสริมความร่วมมือที่แข็งแกร่ง ส่งมอบประสิทธิผล การตลาดและให้การสนับสนุนอย่างเชี่ยวชาญเพื่อการเติบโตร่วมกัน",
                    ThaiourMTopic: "พันธกิจของเรา",
                    ThaiourMText: "ภารกิจของเราคือการจัดหาผลิตภัณฑ์ชั้นยอดทั่วโลก และโซลูชั่นด้วยความหลงใหล การพัฒนาอย่างต่อเนื่อง และการสนับสนุนเชิงรุกเพื่อให้มั่นใจว่าธุรกิจประสบความสำเร็จและ ความพึงพอใจสำหรับคู่ค้าของเราและลูกค้าของพวกเขา",
                    ThaisureshName: "Suresh Wijesinghe",
                    ThaisureshText: `"การเป็นผู้นำไม่ใช่แค่การตัดสินใจเท่านั้น แต่ยังเป็นการสร้างแรงบันดาลใจให้ผู้อื่นบรรลุความยิ่งใหญ่"`,
                    ThaishamalName: "Shamal Aberathne",
                    ThaishamalText: `"ในโลกที่มีเสียงรบกวน แบรนด์ของเราต้องมีเสียงที่แท้จริง มีส่วนร่วม และน่าจดจำ"`,
                    ThaidilshanName: "Dilshan De Silva",
                    ThaidilshanText: `"ความเป็นเลิศในการดำเนินงานเป็นรากฐานของความสำเร็จของเรา ขับเคลื่อนประสิทธิภาพและนวัตกรรม"`,
                    ThairohanName: "Rohan Samaraweera",
                    ThairohanText: `"เทคโนโลยีเปลี่ยนวิสัยทัศน์ให้เป็นจริง ขับเคลื่อนการเดินทางของเราไปสู่อนาคต"`,
                    ThairajivName: "Rajiv Senawirathne",
                    ThairajivText: `"ความไว้วางใจและความพึงพอใจของลูกค้าเป็นรากฐานของชื่อเสียงของบริษัทเรา"`,
                    ThaipatricName: "Patrick Yogaratnam",
                    ThaipatricText: `"การเชื่อมต่อกับลูกค้าทั่วโลกของเราต้องการความเข้าใจในความต้องการที่หลากหลายและการให้บริการที่ยอดเยี่ยม"`,
                    ThaierangaName: "Eranga Wickramasinghe",
                    ThaierangaText: `"การสร้างความสัมพันธ์ที่แข็งแกร่งกับลูกค้าของเราเป็นรากฐานของความสำเร็จและการเติบโตของเรา"`,
                    ThaijananiName: "Janani Siriwardhane",
                    ThaijananiText: `"การให้อำนาจแก่พนักงานและการสร้างวัฒนธรรมที่เป็นบวกคือกุญแจสู่ความสำเร็จขององค์กร"`,
                    ThairomeshName: "Romesh De Silva",
                    ThairomeshText: `"ความสำเร็จในการขายไม่ใช่เรื่องของการผลักดันผลิตภัณฑ์ แต่เป็นเรื่องของการเข้าใจและแก้ปัญหาความต้องการของลูกค้า"`,
                    ThaiKiththiName: "Kiththi Perera",
                    ThaiKiththiText: `"เปลี่ยนศักยภาพให้เป็นประสิทธิภาพด้วยเทคโนโลยีที่เป็นนวัตกรรม"`,
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
                    ThaiMicrosoft: "ไมโครซอฟท์"
                },
                Thaifootersec: {
                    ThaifootHeadTopic: "สำนักงานใหญ่",
                    ThaiheadLine1: "60, ถนนปายาเลบาร์,",
                    ThaiheadLine2: "เลขที่ #06-39, ปายาเลบาร์สแควร์,",
                    ThaiheadLine3: "สิงคโปร์ 409051.",
                    ThaiheadLine4: "ติดต่อ: +6567278910",
                    ThaifootConTopic: "สำนักงานในประเทศไทย",
                    ThaiconLine1: "184/75,",
                    ThaiconLine2: "อาคารฟอรัม ชั้น 17",
                    ThaiconLine3: "ถนนรัชดาภิเษก, ห้วยขวาง,",
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
                    Thaicont25: "184/79",
                    Thaicont26: "อาคารฟอรัม ชั้น 17",
                    Thaicont27: "ถนนรัชดาภิเษก, ห้วยขวาง,",
                    Thaicont28: "กรุงเทพฯ 10310, ประเทศไทย",
                    Thaicont29: "ขอเส้นทาง",
                    Thaicont30: "ฝากความคิดเห็นไว้ที่นี่"
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
                Thaiauthentisec: {
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
                }, Thainewtworksec: {
                    Thaint1: "เครือข่าย",
                    Thaint2: "ไม่มีภาพที่แสดง"
                }, Thaiifmsec: {
                    Thaiif1: "โครงสร้างพื้นฐานของศูนย์ข้อมูลและการตรวจสอบโครงสร้างพื้นฐาน",
                    Thaiif2: "ไม่มีภาพที่แสดง"
                }, Thaiperisec: {
                    Thaipr1: "ความปลอดภัยรอบขอบเขตและภายใน",
                    Thaipr2: "ไม่มีภาพที่แสดง"
                }, Thaisecuritysec: {
                    Thaiscrty1: "การจัดการความปลอดภัย",
                    Thaiscrty2: "ไม่มีภาพที่แสดง"
                }, Thaiserversec: {
                    Thaisvr1: "โซลูชั่นการจัดเก็บและสำรองข้อมูลเซิร์ฟเวอร์",
                    Thaisvr2: "ไม่มีภาพที่แสดง"
                }

            },
        },

        // mauritius translation

        frMuri: {
            translation: {
                Muriherosect: {
                    Murigreet1: "Principal distributeur de technologies",
                    Murigreet2first: "Bienvenue chez ",
                    Murigreet2mid1: "Con",
                    Murigreet2mid2: "nex ",
                    Murigreet2last: "Information Technologies",
                    Murigreet3: "Distributeur à valeur ajoutée pour plus de 30 grands fournisseurs mondiaux.",
                    Muricontact: "Contactez-nous",
                    Muriwtvideo: "Regarder la vidéo",
                },
                Muriwhowearesec: {
                    Muriwhotopic: "Qui nous sommes",
                    Muricard1: "Distribution",
                    Muricard1Text: "Découvrez nos solutions sur mesure, conçues pour répondre aux besoins des utilisateurs finaux avec les réponses les plus compétitives et les mieux adaptées à leurs besoins uniques.",
                    Muricard2: "Consultance",
                    Muricard2Text: "Le service de conseil est une solution unique offerte par Connex, garantissant la solution la plus appropriée et compétitive aux besoins des utilisateurs finaux. Nous offrons un service intégré et personnalisé de compétences en conseil qui évolue et change avec les besoins des entreprises et des clients. La consultance Connex fournit du personnel hautement qualifié pour compléter les compétences de votre propre équipe. Nos consultants et ingénieurs agissent en votre nom pour garantir le bon déroulement de l'installation des clients, en temps voulu et selon les implications budgétaires.",
                    Muricard3: "Formation",
                    Muricard3Text: "Nous croyons en l'adage populaire selon lequel nous sommes tous des apprenants à vie, c'est pourquoi nous nous efforçons de créer une culture de l'apprentissage où nos employés bénéficient de nombreuses opportunités de développement professionnel. Nous préparons également nos employés à des postes de leadership futurs au sein de l'entreprise. Dans un monde numérique en évolution rapide, l'industrie technologique évolue rapidement ; par conséquent, nous réalisons la nécessité de suivre le rythme des taux de rotation et de rester à la pointe des technologies les plus avancées. Notre formation extensive et notre développement professionnel de programmeurs ont contribué à la fidélisation des employés.",
                    Muricard4: "Support TAC",
                    Muricard4Text: "Connex offre des services TAC 24/7, avec une gamme de professionnels certifiés, techniques et qualifiés. Nous sommes fiers des niveaux d'accords de niveau de service Bronze, Silver, Gold et Platinum. Vous pourrez engager avec votre gestionnaire de produit qui partagera sa compréhension du produit, afin que vous soyez pleinement informé et équipé des connaissances et du savoir-faire technique pour utiliser le produit. Les mises à jour de la recherche produit seront également partagées ainsi que des informations sur l'enregistrement des transactions. Le service professionnel et le support technique de Connex sont disponibles uniquement pour nos partenaires de distribution. Veuillez contacter.",
                    MurirText1: "Une décennie d'expertise dans la distribution de technologies de pointe",
                    MurirText2: "Un distributeur de technologie de premier plan prospère en s'adaptant à un monde en constante évolution. Si vous avez besoin de solutions diversifiées pour atteindre la conformité et transformer votre entreprise, votre recherche se termine ici.",
                    Muriic1: "Fondé",
                    Muriic2: "Employés",
                    Muriic3: "Fournisseurs",
                    Muriic4: "Partenaires",
                    Muricontact: "Contactez-nous",
                },
                Murivendorsec: {
                    Muriventopic: "Nos fournisseurs",
                    MurivenText1: "Embarquez vers l'excellence technologique avec notre réseau de fournisseurs de confiance",
                    MurivenText2: ".",
                },
                Murilatestsec: {
                    Murilattopic: "Dernières nouvelles",
                },
                // About us section
                Muriourstory: {
                    MuriourSTopic: "Notre histoire",
                    MuriourSText: "Fondé avec une passion pour la technologie et l'excellence, CONNEX INFORMATION TECHNOLOGY est devenu un leader dans la distribution de produits informatiques. Nous avons commencé avec une vision de révolutionner l'industrie grâce à des solutions innovantes et un soutien inégalé. Notre succès repose sur des relations solides avec nos clients et partenaires, nous permettant de nous adapter et de répondre aux besoins dynamiques du marché. Au fur et à mesure de notre croissance, nous restons engagés envers l'innovation, l'intégrité et le partenariat, favorisant une croissance mutuelle et établissant de nouveaux standards dans l'industrie.",
                    MuriourVTopic: "Notre vision",
                    MuriourVText: "Être le principal distributeur mondial de produits informatiques en favorisant des partenariats solides, en offrant un marketing efficace et en fournissant un soutien compétent pour une croissance mutuelle.",
                    MuriourMTopic: "Notre mission",
                    MuriourMText: "Notre mission est de fournir à l'échelle mondiale des produits et solutions de premier ordre avec passion, amélioration continue et soutien proactif, garantissant le succès des entreprises et la satisfaction de nos partenaires et de leurs clients.",
                    MurisureshName: "Suresh Wijesinghe",
                    MurisureshText: "Le leadership ne consiste pas seulement à prendre des décisions ; il s'agit d'inspirer les autres à atteindre la grandeur.",
                    MurishamalName: "Shamal Aberathne",
                    MurishamalText: "Dans un monde de bruit, la voix de notre marque doit être authentique, engageante et mémorable.",
                    MuridilshanName: "Dilshan De Silva",
                    MuridilshanText: "L'excellence opérationnelle est la base de notre succès, favorisant l'efficacité et l'innovation.",
                    MurirohanName: "Rohan Samaraweera",
                    MurirohanText: "La technologie transforme la vision en réalité, propulsant notre voyage vers l'avenir.",
                    MurirajivName: "Rajiv Senawirathne",
                    MurirajivText: "La confiance et la satisfaction des clients sont les pierres angulaires de la réputation de notre entreprise.",
                    MuripatricName: "Patrick Yogaratnam",
                    MuripatricText: "Se connecter avec nos clients mondiaux nécessite de comprendre des besoins divers et de fournir un service exceptionnel.",
                    MurierangaName: "Eranga Wickramasinghe",
                    MurierangaText: "Établir des relations solides avec nos clients est la pierre angulaire de notre succès et de notre croissance.",
                    MurijananiName: "Janani Siriwardhane",
                    MurijananiText: "Autonomiser les employés et favoriser une culture positive sont les clés du succès organisationnel.",
                    MuriromeshName: "Romesh De Silva",
                    MuriromeshText: "Le succès dans la vente ne consiste pas à pousser des produits, mais à comprendre et à résoudre les besoins des clients.",
                    MuriKiththiName: "Kiththi Perera",
                    MuriKiththiText: "Transformer le potentiel en performance avec une technologie innovante.",
                },
                Murilatestsec: {
                    Murilattopic: "Dernières nouvelles",
                },
                // Solutions section
                Murisolutionssec: {
                    Murimaintopic: "Solutions",
                    MuriperiTopic: "Sécurité périmétrique et interne",
                    MuricyberTopic: "Gouvernance et conformité en cybersécurité",
                    MuriauthTopic: "Gestion de l'authentification et des identités",
                    MurisecTopic: "Gestion de la sécurité",
                    MuriendTopic: "Sécurité des points de terminaison",
                    MurinetTopic: "Réseautage",
                    MuridataTopic: "Infrastructure et surveillance des centres de données",
                    MuriserverTopic: "Solutions de stockage et de sauvegarde des serveurs",
                    MuriMicrosoft: "Microsoft"
                },
                // Footer section
                Murifootersec: {
                    MurifootHeadTopic: "Siège social",
                    MuriheadLine1: "60, Rue Paya Lebar,",
                    MuriheadLine2: "#06-39, Paya Lebar Square,",
                    MuriheadLine3: "Singapour 409051.",

                    MuriheadLine4: "Contact: +6567278910",
                    MurifootConTopic: "Bureau de Maurice",
                    MuriconLine1: "Bureau C-03,",
                    MuriconLine2: "Ebene Junction,",
                    MuriconLine3: "Ebene, Quatre Bornes,",
                    MuriconLine4: "Maurice.",
                    MuriconLine5: "Contact: +66612700590",
                    MuriresTopic: "Ressources",
                    Murires1: "Événements et nouvelles",
                    Murires2: "FAQ",
                    Murires3: "Carrières",
                },
                // Chat
                Murichatsec: {
                    Muriques1: "Bonjour! Je suis là pour vous aider. Puis-je connaître votre nom?",
                    Muriques2: "Bonjour {previousValue}, comment puis-je vous aider?",
                    Muriques3: "Bien sûr. Puis-je avoir votre numéro de téléphone?",
                    Muriques4: "Merci! Un de nos employés vous appellera sous peu.",
                },
                // Navbar Section
                Murinavsec: {
                    Muritab1: "À propos de nous",
                    Muritab2: "Solutions",
                    Muritab3: "Événements",
                    Muritab4: "Événements & Nouvelles",
                    Muritab5: "Nouvelles à venir",
                    Muritab6: "Blogs",
                    Muritab7: "Portail",
                    Muritab8: "Pays",
                    Muritab9: "Contactez-nous",
                },

                // contactus page
                Muricontsec: {
                    Muricont1: "Contactez-nous",
                    Muricont2: "Contactez-nous",
                    Muricont3: "pour nous faire savoir comment nous pouvons vous aider.",
                    Muricont4: "Nous sommes heureux de fournir",
                    Muricont5: "un support client ou",
                    Muricont6: "répondre à toute demande générale",
                    Muricont7: "que vous pourriez avoir.",
                    Muricont8: "Prénom",
                    Muricont9: "Le prénom est requis",
                    Muricont10: "Nom de famille",
                    Muricont11: "Le nom de famille est requis",
                    Muricont12: "Entreprise",
                    Muricont13: "L'entreprise est requise",
                    Muricont14: "Numéro de contact",
                    Muricont15: "Le numéro de contact doit comporter exactement 10 chiffres",
                    Muricont16: "nom@exemple.com",
                    Muricont17: "Adresse e-mail invalide",
                    Muricont18: "Les commentaires sont requis",
                    Muricont19: "J'accepte la politique de confidentialité",
                    Muricont20: "Vous devez accepter la politique de confidentialité",
                    Muricont21: "Soumettre",
                    Muricont22: "Effacer",
                    Muricont23: "Maurice",
                    Muricont24: "Bureau de Maurice",
                    Muricont25: "Bureau C-03,",
                    Muricont26: "Ebene Junction,",
                    Muricont27: "Ebene, Quatre Bornes,",
                    Muricont28: "Maurice.",
                    Muricont29: "Obtenir des directions",
                    Muricont30: "Kite enn komanter isi"
                },

                Murieventsec: {
                    Murievnt1: "Événements & Nouvelles",
                    Murievnt2: "Derniers événements et nouvelles",
                    Murievnt3: "Aucune image disponible",
                    Murievnt4: "Fermer",
                    Murievnt5: "Événements & Nouvelles",
                    Murievnt6: "Blogs",
                },
                MuriupEventSec: {
                    Muriupevnt1: "À venir",
                    Muriupevnt2: "Événements & Nouvelles",
                    Muriupevnt3: "Aucune image disponible",
                    Muriupevnt4: "Fermer",
                },
                Muriportalsec: {
                    Muriptl1: "À lancer",
                    Muriptl2: "Bientôt"
                },
                Muriblogsec: {
                    Muriblg1: "Blogs"
                },
                Muriauthentisec: {
                    Muriat1: "Gestion de l'authentification et des identités",
                    Muriat2: "Aucune image disponible",
                },
                Muricybersec: {
                    Muricy1: "Gouvernance et conformité en cybersécurité",
                    Muricy2: "Aucune image disponible"
                },
                Muriendpsec: {
                    Muriep1: "Sécurité des points de terminaison",
                    Muriep2: "Aucune image disponible"
                },
                Murinewtworksec: {
                    Murint1: "Réseautage",
                    Murint2: "Aucune image disponible"
                },
                Muriifmsec: {
                    Muriif1: "Infrastructure et surveillance des centres de données",
                    Muriif2: "Aucune image disponible"
                },
                Muriperisec: {
                    Muripr1: "Sécurité périmétrique et interne",
                    Muripr2: "Aucune image disponible"
                },
                Murisecuritysec: {
                    Muriscrty1: "Gestion de la sécurité",
                    Muriscrty2: "Aucune image disponible"
                },
                Muriserversec: {
                    Murisvr1: "Solutions de stockage et de sauvegarde des serveurs",
                    Murisvr2: "Aucune image disponible"
                }
            },
        },

        //Brunei Translation
        frMalay: {
            translation: {
                Brnherosect: {
                    Brngreet1: "Pengedar Teknologi Utama",
                    Brngreet2first: "Selamat datang ke ",
                    Brngreet2mid: "Connex ",
                    Brngreet2last: "Teknologi Maklumat",
                    Brngreet3: "Pengedar nilai tambah untuk lebih daripada 30 vendor global terkemuka.",
                    Brncontact: "Hubungi Kami",
                    Brnwtvideo: "Tonton Video"
                },
                Brnwhowearesec: {
                    Brnwhotopic: "Siapa Kami",
                    Brncard1: "Pengedaran",
                    Brncard1Text: "Temui penyelesaian yang diperibadikan kami, direka untuk memenuhi keperluan pengguna akhir dengan jawapan yang paling kompetitif dan sesuai untuk keperluan unik mereka.",
                    Brncard2: "Perundingan",
                    Brncard2Text: "Perkhidmatan perundingan adalah penyelesaian unik yang ditawarkan oleh Connex, memastikan penyelesaian yang paling sesuai dan kompetitif untuk keperluan pengguna akhir. Kami menawarkan perkhidmatan perundingan yang disesuaikan secara bersepadu yang berkembang dan berubah bersama dengan keperluan perniagaan dan pelanggan. Perundingan Connex menyediakan kakitangan yang sangat berkelayakan untuk melengkapkan kemahiran pasukan anda sendiri. Perunding dan jurutera kami bertindak bagi pihak anda untuk memastikan kelancaran pemasangan pelanggan, dalam masa yang ditetapkan dan mengikut anggaran kos.",
                    Brncard3: "Latihan",
                    Brncard3Text: "Kami percaya pada pepatah popular bahawa kita semua adalah pelajar seumur hidup, oleh itu kami berusaha untuk mewujudkan budaya pembelajaran di mana pekerja kami diberikan pelbagai peluang untuk meningkatkan pembangunan profesional mereka. Kami juga melatih pekerja kami untuk jawatan kepimpinan masa depan dari dalam syarikat. Dalam dunia digital yang cepat berkembang, industri Teknologi mengalami perubahan dengan pantas; oleh itu kami menyedari keperluan untuk mengikuti kadar pusing ganti dan sentiasa berada di hadapan teknologi yang paling maju. Latihan dan pembangunan profesional kami yang meluas untuk pengaturcara telah menyumbang kepada pengekalan pekerja.",
                    Brncard4: "Sokongan TAC",
                    Brncard4Text: "Connex menawarkan perkhidmatan TAC 24/7, dengan pelbagai profesional yang bertauliah, teknikal dan berkelayakan. Kami bangga dengan tahap Perjanjian Tahap Perkhidmatan seperti Gangsa, Perak, Emas dan Platinum. Anda akan berhubung dengan Pengurus Produk anda yang akan berkongsi pemahamannya tentang produk, supaya anda benar-benar dimaklumkan dan dilengkapi dengan pengetahuan serta kemahiran teknikal untuk menggunakan produk tersebut. Kemas kini penyelidikan produk juga akan dikongsi bersama dengan maklumat mengenai pendaftaran tawaran. Perkhidmatan profesional dan sokongan teknikal Connex hanya tersedia untuk rakan kongsi saluran kami sahaja. Sila hubungi.",
                    BrnrText1: "Sepuluh tahun kepakaran dalam pengedaran teknologi canggih",
                    BrnrText2: "Pengedar teknologi utama berkembang dengan menyesuaikan diri dengan dunia yang sentiasa berubah. Jika anda memerlukan pelbagai penyelesaian untuk mencapai pematuhan dan mengubah perniagaan anda, pencarian anda berakhir di sini.",
                    Brnic1: "Ditemui",
                    Brnic2: "Pekerja",
                    Brnic3: "Vendor",
                    Brnic4: "Rakan Kongsi",
                    Brncontact: "Hubungi Kami"
                },
                Brnvendorsec: {
                    Brnventopic: "Vendor Kami",
                    BrnvenText1: "Mulakan kecemerlangan teknologi dengan ",
                    BrnvenText2: "Rangkaian Vendor Kami."
                },
                Brnlatestsec: {
                    Brnlattopic: "Berita Terkini"
                },
                Brnourstory: {
                    BrnourSTopic: "Kisah Kami",
                    BrnourSText: "Ditubuhkan dengan semangat untuk teknologi dan kecemerlangan, CONNEX INFORMATION TECHNOLOGY telah menjadi peneraju dalam pengedaran produk IT. Kami bermula dengan visi untuk merevolusikan industri melalui penyelesaian inovatif dan sokongan yang tiada tandingan. Kejayaan kami dibina atas hubungan yang kukuh dengan pelanggan dan rakan kongsi kami, membolehkan kami menyesuaikan diri dan memenuhi keperluan pasaran yang dinamik. Sebagai kami berkembang, kami tetap komited kepada inovasi, integriti, dan perkongsian, memacu pertumbuhan bersama dan menetapkan penanda aras baru dalam industri.",
                    BrnourVTopic: "Visi Kami",
                    BrnourVText: "Untuk menjadi pengedar produk IT global terkemuka dengan membina perkongsian yang kukuh, menyampaikan pemasaran yang berkesan, dan menyediakan sokongan yang mahir untuk pertumbuhan bersama.",
                    BrnourMTopic: "Misi Kami",
                    BrnourMText: "Misi kami adalah untuk menyediakan produk dan penyelesaian terbaik di seluruh dunia dengan semangat, peningkatan berterusan, dan sokongan proaktif, memastikan kejayaan perniagaan dan kepuasan untuk rakan kongsi kami dan pelanggan mereka.",
                    BrnsureshName: "Suresh Wijesinghe",
                    BrnsureshText: `"Kepimpinan bukan sekadar membuat keputusan; ia tentang memberi inspirasi kepada orang lain untuk mencapai kejayaan."`,
                    BrnshamalName: "Shamal Aberathne",
                    BrnshamalText: `"Dalam dunia yang bising, suara jenama kami mesti autentik, menarik, dan mudah diingati."`,
                    BrndilshanName: "Dilshan De Silva",
                    BrndilshanText: `"Kecemerlangan operasi adalah asas kejayaan kami, memacu kecekapan dan inovasi."`,
                    BrnrohanName: "Rohan Samaraweera",
                    BrnrohanText: `"Teknologi mengubah visi menjadi realiti, menggerakkan perjalanan kami ke masa depan."`,
                    BrnrajivName: "Rajiv Senawirathne",
                    BrnrajivText: `"Kepercayaan dan kepuasan pelanggan adalah asas reputasi syarikat kami."`,
                    BrnpatricName: "Patrick Yogaratnam",
                    BrnpatricText: `"Berhubung dengan pelanggan global kami memerlukan pemahaman terhadap keperluan yang pelbagai dan memberikan perkhidmatan yang luar biasa."`,
                    BrnerangaName: "Eranga Wickramasinghe",
                    BrnerangaText: `"Membina hubungan yang kukuh dengan pelanggan kami adalah asas kejayaan dan pertumbuhan kami."`,
                    BrnjananiName: "Janani Siriwardhane",
                    BrnjananiText: `"Memberdayakan pekerja dan memupuk budaya positif adalah kunci kejayaan organisasi."`,
                    BrnromeshName: "Romesh De Silva",
                    BrnromeshText: `"Kejayaan dalam jualan bukanlah tentang mendorong produk, tetapi tentang memahami dan menyelesaikan keperluan pelanggan."`,
                    BrnKiththiName: "Kiththi Perera",
                    BrnKiththiText: `"Mengubah potensi menjadi prestasi dengan teknologi inovatif."`
                },
                Brnlatestsec: {
                    Brnlattopic: "Berita Terkini"
                },
                Brnsolutionssec: {
                    Brnmaintopic: "Penyelesaian",
                    BrnperiTopic: "Keselamatan Perimeter dan Dalaman",
                    BrncyberTopic: "Tadbir Urus & Pematuhan Keselamatan Siber",
                    BrnauthTopic: "Pengesahan & Pengurusan Identiti",
                    BrnsecTopic: "Pengurusan Keselamatan",
                    BrnendTopic: "Keselamatan Titik Akhir",
                    BrnnetTopic: "Rangkaian",
                    BrndataTopic: "Infrastruktur Pusat Data dan Pemantauan",
                    BrnserverTopic: "Penyelesaian Penyimpanan & Sandaran Pelayan"
                },
                Brnfootersec: {
                    BrnfootHeadTopic: "Ibu Pejabat",
                    BrnheadLine1: "60, Jalan Paya Lebar,",
                    BrnheadLine2: "#06-39, Paya Lebar Square,",
                    BrnheadLine3: "Singapura 409051.",

                    BrnheadLine4: "Hubungi: +6567278910",
                    BrnfootConTopic: "Pejabat Brunei",
                    BrnconLine1: "Connex Information Technologies Sdn Bhd",
                    BrnconLine2: "Tidak. B22, B23 & B24, Blok B, Bangunan Habza, Spg 150,",
                    BrnconLine3: "Kg Kiulap, Gadong B, Brunei Muara, BE1518,",
                    BrnconLine4: "Brunei Darussalam.",
                    BrnconLine5: "Hubungi: +673 223 3575",
                    BrnresTopic: "Sumber",
                    Brnres1: "Acara & Berita",
                    Brnres2: "Soalan Lazim",
                    Brnres3: "Kerjaya"
                },
                Brnchatsec: {
                    Brnques1: "Hai! Saya di sini untuk membantu anda. Boleh saya tahu nama anda?",
                    Brnques2: "Hai {previousValue}, bagaimana saya boleh membantu anda?",
                    Brnques3: "Tentu. Boleh saya dapatkan nombor telefon anda?",
                    Brnques4: "Terima kasih! Salah seorang kakitangan kami akan menghubungi anda tidak lama lagi."
                },
                Brnnavsec: {
                    Brntab1: "Tentang Kami",
                    Brntab2: "Penyelesaian",
                    Brntab3: "Acara",
                    Brntab4: "Acara & Berita",
                    Brntab5: "Berita Akan Datang",
                    Brntab6: "Blog",
                    Brntab7: "Portal",
                    Brntab8: "Negara",
                    Brntab9: "Hubungi Kami"
                },
                Brncontsec: {
                    Brncont1: "Hubungi Kami",
                    Brncont2: "Hubungi kami ",
                    Brncont3: "untuk memberitahu kami bagaimana kami boleh membantu anda.",
                    Brncont4: "Kami gembira untuk memberikan",
                    Brncont5: "sokongan pelanggan atau",
                    Brncont6: "menjawab sebarang pertanyaan umum",
                    Brncont7: "yang anda ada.",
                    Brncont8: "Nama pertama",
                    Brncont9: "Nama pertama diperlukan",
                    Brncont10: "Nama akhir",
                    Brncont11: "Nama akhir diperlukan",
                    Brncont12: "Syarikat",
                    Brncont13: "Syarikat diperlukan",
                    Brncont14: "Nombor Telefon",
                    Brncont15: "Nombor telefon mesti tepat 10 digit",
                    Brncont16: "nama@example.com",
                    Brncont17: "Alamat e-mel tidak sah",
                    Brncont18: "Komen diperlukan",
                    Brncont19: "Saya terima privasi & dasar",
                    Brncont20: "Anda mesti menerima privasi & dasar",
                    Brncont21: "Hantar",
                    Brncont22: "Kosongkan",
                    Brncont23: "Brunei",
                    Brncont24: "Pejabat Brunei",
                    Brncont25: "No.B22,B23 & B24, Blok B",
                    Brncont26: "Bangunan Habza, Spg 150, Kg Kiulap",
                    Brncont27: "Gadong B, Brunei Muara, BE1518",
                    Brncont28: "Negara Brunei Darussalam",
                    Brncont29: "Dapatkan Arah",
                    Brncont30: "Tinggalkan Komen"
                },
                Brneventsec: {
                    Brnevnt1: "Acara & Berita",
                    Brnevnt2: "Acara dan Berita Terkini",
                    Brnevnt3: "Tiada Imej Tersedia",
                    Brnevnt4: "Tutup",
                    Brnevnt5: "Acara & Berita",
                    Brnevnt6: "Blog"
                },
                BrnupEventSec: {
                    Brnupevnt1: "Akan Datang",
                    Brnupevnt2: "Acara & Berita",
                    Brnupevnt3: "Tiada Imej Tersedia",
                    Brnupevnt4: "Tutup"
                },
                Brnportalsec: {
                    Brnptl1: "Akan dilancarkan",
                    Brnptl2: "Tidak Lama Lagi"
                },
                Brnblogsec: {
                    Brnblg1: "Blog"
                },
                Brnauthentisec: {
                    Brnat1: "Pengesahan & Pengurusan Identiti",
                    Brnat2: "Tiada Imej Tersedia"
                },
                Brncybersec: {
                    Brncy1: "Tadbir Urus & Pematuhan Keselamatan Siber",
                    Brncy2: "Tiada Imej Tersedia"
                },
                Brnendpsec: {
                    Brnep1: "Keselamatan Titik Akhir",
                    Brnep2: "Tiada Imej Tersedia"
                },
                Brnnewtworksec: {
                    Brnnt1: "Rangkaian",
                    Brnnt2: "Tiada Imej Tersedia"
                },
                Brnifmsec: {
                    Brnif1: "Infrastruktur Pusat Data dan Pemantauan Infrastruktur",
                    Brnif2: "Tiada Imej Tersedia"
                },
                Brnperisec: {
                    Brnpr1: "Keselamatan Perimeter dan Dalaman",
                    Brnpr2: "Tiada Imej Tersedia"
                },
                Brnsecuritysec: {
                    Brnscrty1: "Pengurusan Keselamatan",
                    Brnscrty2: "Tiada Imej Tersedia"
                },
                Brnserversec: {
                    Brnsvr1: "Penyelesaian Penyimpanan & Sandaran Pelayan",
                    Brnsvr2: "Tiada Imej Tersedia"
                }
            }

        },

        // Nepal 

        frNepali: {
            translation: {
                // NPL Part

                NPLherosect: {
                    NPLgreet1: "अग्रणी प्रविधि वितरक",
                    NPLgreet2first: "स्वागत छ ",
                    NPLgreet2mid1: "कन",
                    NPLgreet2mid2: "नेक्स ",
                    NPLgreet2last: "सूचना प्रविधि",
                    NPLgreet3: "३० भन्दा बढी विश्वव्यापी विक्रेताहरूको लागि मूल्य अभिवृद्धि वितरक।",
                    NPLcontact: "सम्पर्क गर्नुहोस्",
                    NPLwtvideo: "भिडियो हेर्नुहोस्",
                },
                NPLwhowearesec: {
                    NPLwhotopic: "हामी को हौं",
                    NPLcard1: "वितरण",
                    NPLcard1Text: "हामीले अन्त-प्रयोगकर्ताहरूको आवश्यकता पूरा गर्न, तिनीहरूको विशिष्ट आवश्यकताहरूको लागि सबैभन्दा प्रतिस्पर्धी, उपयुक्त समाधानहरू प्रदान गर्ने अनुकूलित समाधानहरू पत्ता लगाउन सक्नुहुन्छ।",
                    NPLcard2: "परामर्श",
                    NPLcard2Text: "परामर्श सेवा कननेक्सद्वारा प्रदान गरिने एक विशेष समाधान हो, जसले अन्त-प्रयोगकर्ताको आवश्यकताहरूको लागि सबैभन्दा उपयुक्त र प्रतिस्पर्धी समाधान सुनिश्चित गर्दछ। हामी परामर्श कौशलको एक एकीकृत अनुकूलित सेवा प्रदान गर्दछौं जुन व्यापार र ग्राहकको आवश्यकताहरूको साथ बढ्छ र परिवर्तन हुन्छ। कननेक्स परामर्श सेवाले योग्य जनशक्ति प्रदान गर्दछ, जसले तपाइँको टोलीको क्षमतालाई पूरक बनाउँछ। हाम्रा परामर्शदाताहरू र इन्जिनियरहरूले तपाइँको तर्फबाट कार्य गर्छन् ताकि ग्राहकहरूको स्थापना सहज रूपमा संचालन गर्न र बजेटको अवधारणामा रहन सुनिश्चित गर्न सकियोस्।",
                    NPLcard3: "प्रशिक्षण",
                    NPLcard3Text: "हामीलाई विश्वास छ कि हामी सबै जीवनभर सिक्नेमध्येका हौं, त्यसैले हामी हाम्रो कर्मचारीहरूको व्यावसायिक विकासलाई अगाडि बढाउनको लागि धेरै अवसरहरू प्रदान गर्ने सिकाइ संस्कृतिलाई प्रोत्साहन दिन प्रयास गर्छौं। हामी कम्पनी भित्रबाट भविष्यको नेतृत्व पदहरूको लागि हाम्रो कर्मचारीहरूलाई तयार पार्छौं। एउटा छिटो बढ्दो र विकासशील डिजिटल दुनियाँमा, प्रविधि उद्योगले तीव्र रूपमा परिवर्तनहरू अनुभव गर्छ; त्यसैले हामीले सबैभन्दा नयाँ प्रविधिहरूसँग निरन्तर रहनको लागि आवश्यकतालाई महसुस गरेका छौं। हाम्रो व्यापक प्रशिक्षण र कार्यक्रमकर्ताहरूको व्यावसायिक विकासले कर्मचारीहरूलाई कायम राख्न योगदान पुर्‍याएको छ।",
                    NPLcard4: "TAC समर्थन",
                    NPLcard4Text: "कननेक्सले २४/७ TAC सेवाहरू प्रदान गर्दछ, प्रमाणित, प्राविधिक र योग्य पेशेवरहरूको टोलीको साथ। हामी कांस्य, चाँदी, सुन, र प्लेटिनम स्तरको सेवा स्तर सम्झौतामा गर्व गर्छौं। तपाईं आफ्नो उत्पादन प्रबन्धकसँग संलग्न हुनुहुनेछ जसले तपाइँलाई उत्पादनको बारेमा बुझ्न सहयोग गर्नेछ, ताकि तपाइँलाई उत्पादन प्रयोग गर्ने ज्ञान र प्राविधिक जानकारीको साथ पूर्ण रूपमा सुसज्जित बनाउन सकियोस्। उत्पादन अनुसन्धान अपडेटहरू पनि तपाइँसँग साझा गरिनेछ, साथै सम्झौतासम्बन्धी जानकारी पनि उपलब्ध हुनेछ। कननेक्सको व्यावसायिक सेवा र प्राविधिक समर्थन सेवा हाम्रो च्यानल साझेदारहरूको लागि मात्र उपलब्ध छ। कृपया सम्पर्क गर्नुहोस्।",
                    NPLrText1: "अत्याधुनिक प्रविधि वितरणमा एक दशकको विशेषज्ञता",
                    NPLrText2: "एउटा अग्रणी प्रविधि वितरकले बदलिँदो दुनियाँसँग अनुकूल हुन प्रयास गर्छ। यदि तपाईंले अनुपालन हासिल गर्न र आफ्नो व्यवसाय रूपान्तरण गर्न विविध समाधानहरूको आवश्यकता छ भने, तपाईंको खोज यहाँ समाप्त हुन्छ।",
                    NPLic1: "स्थापना गरिएको",
                    NPLic2: "कर्मचारीहरू",
                    NPLic3: "विक्रेताहरू",
                    NPLic4: "साझेदारहरू",
                    NPLcontact: "सम्पर्क गर्नुहोस्",
                },
                NPLvendorsec: {
                    NPLventopic: "हाम्रो विक्रेताहरू",
                    NPLvenText1: "हाम्रो भरपर्दो ",
                    NPLvenText2: "विक्रेता नेटवर्कसँग प्रविधि उत्कृष्टतामा यात्रा सुरु गर्नुहोस्।",
                },
                NPLlatestsec: {
                    NPLlattopic: "ताजा समाचार",
                },
                // About us section
                NPLourstory: {
                    NPLourSTopic: "हाम्रो कथा",
                    NPLourSText: "प्रविधिप्रति जोश र उत्कृष्टतासँग स्थापना भएको, CONNEX INFORMATION TECHNOLOGY IT उत्पादन वितरणमा एक अग्रणी बन्दै गएको छ। हामीले उद्योगलाई नवीन समाधान र अद्वितीय समर्थन मार्फत क्रान्तिकारी बनाउनको लागि दृष्टिकोणका साथ सुरु गर्यौं। हाम्रो सफलता हाम्रो ग्राहक र साझेदारहरूसँगको बलियो सम्बन्धमा आधारित छ, जसले हामीलाई गतिशील बजार आवश्यकता अनुसार अनुकूल गर्न सक्षम बनाउँछ। हामी बढ्दै जाँदा, हामी नवीनता, अखण्डता, र साझेदारीमा प्रतिबद्ध रहन्छौं, पारस्परिक वृद्धिलाई अघि बढाउँदै र उद्योगमा नयाँ मापदण्डहरू सेट गर्दै।",
                    NPLourVTopic: "हाम्रो दृष्टिकोण",
                    NPLourVText: "मजबुत साझेदारीहरूलाई प्रवर्द्धन गर्दै, प्रभावकारी मार्केटिङ प्रदान गर्दै, र पारस्परिक वृद्धिको लागि दक्ष समर्थन प्रदान गर्दै, IT उत्पादनहरूको अग्रणी विश्वव्यापी वितरक बन्ने।",
                    NPLourMTopic: "हाम्रो लक्ष्य",
                    NPLourMText: "हाम्रो लक्ष्य भनेको व्यवसायिक सफलता र हाम्रो साझेदार र तिनीहरूको ग्राहकहरूको सन्तुष्टिका लागि जोश, निरन्तर सुधार, र सक्रिय समर्थनका साथ उत्कृष्ट उत्पाद र समाधानहरू प्रदान गर्नु हो।",
                    NPLsureshName: "सुरेश विजेसिङ्हे",
                    NPLsureshText: `"नेतृत्व भनेको निर्णयहरू गर्ने मात्र होइन; यो अरूलाई महानता हासिल गर्न प्रेरित गर्नु हो।"`,
                    NPLshamalName: "शमल अबेराथ्ने",
                    NPLshamalText: `"कोलाहलको दुनियाँमा, हाम्रो ब्रान्डको आवाज प्रामाणिक, आकर्षक र सम्झनलायक हुनुपर्छ।"`,
                    NPLdilshanName: "दिलशन डी सिल्भा",
                    NPLdilshanText: `"सञ्चालन उत्कृष्टता हाम्रो सफलताको आधार हो, जसले दक्षता र नवीनतालाई अघि बढाउँछ।"`,
                    NPLrohanName: "रोहन समरवीरा",
                    NPLrohanText: `"प्रविधिले दृष्टिलाई यथार्थमा बदल्छ, हामीलाई भविष्यको यात्रा गर्न प्रेरित गर्दछ।"`,
                    NPLrajivName: "राजिव सेनाविराथ्ने",
                    NPLrajivText: `"ग्राहकको विश्वास र सन्तुष्टि हाम्रो कम्पनीको प्रतिष्ठाको आधार हो।"`,
                    NPLpatricName: "प्याट्रिक योगारत्नम्",
                    NPLpatricText: `"हाम्रो विश्वव्यापी ग्राहकहरूसँग जडान राख्नको लागि विविध आवश्यकताहरू बुझ्न र असाधारण सेवा प्रदान गर्न आवश्यक छ।"`,
                    NPLerangaName: "एरङ्गा विक्रमसिंघे",
                    NPLerangaText: `"हाम्रा ग्राहकहरूसँगको बलियो सम्बन्ध निर्माण गर्नु हाम्रो सफलताको र वृद्धिको आधार हो।"`,
                    NPLjananiName: "जननी सिरिवर्धने",
                    NPLjananiText: `"कर्मचारीलाई सशक्त पार्नु र सकारात्मक संस्कृतिलाई बढावा दिनु नै संस्थागत सफलताको कुञ्जी हो।"`,
                    NPLromeshName: "रोमेश डी सिल्भा",
                    NPLromeshText: `"बिक्रीमा सफलता भनेको उत्पादनहरूलाई अगाडि बढाउने होइन, तर ग्राहकको आवश्यकताहरू बुझेर समाधान दिनु हो।"`,
                    NPLKiththiName: "किथ्थी परेरा",
                    NPLKiththiText: `"नवीन प्रविधिसँग सम्भावनालाई कार्यसम्पादनमा रूपान्तरण गर्दै,"`,
                },
                NPLsolutionssec: {
                    NPLmaintopic: "समाधानहरू",
                    NPLperiTopic: "परिधि र आन्तरिक सुरक्षा",
                    NPLcyberTopic: "साइबर सुरक्षा शासन र अनुपालन",
                    NPLauthTopic: "प्रमाणीकरण र पहिचान व्यवस्थापन",
                    NPLsecTopic: "सुरक्षा व्यवस्थापन",
                    NPLendTopic: "एन्डप्वाइन्ट सुरक्षा",
                    NPLnetTopic: "नेटवर्किङ",
                    NPLdataTopic: "डाटा सेन्टर पूर्वाधार र अनुगमन",
                    NPLserverTopic: "सर्भर भण्डारण र ब्याकअप समाधानहरू",
                    NPLMicrosoft: "माइक्रोसफ्ट",
                },
                NPLfootersec: {
                    NPLfootHeadTopic: "मुख्य कार्यालय",
                    NPLheadLine1: "६०, पया लेबर रोड,",
                    NPLheadLine2: " #०६-३९, पया लेबर स्क्वायर, ",
                    NPLheadLine3: "सिंगापुर ४०९०५१।",
                    NPLheadLine4: "सम्पर्क: +६५६७२७८९१०",
                    NPLfootConTopic: "नेपाल कार्यालय",
                    NPLconLine1: " बालुवाटार-४,  ",
                    NPLconLine2: "काठमाण्डू,  ",
                    NPLconLine3: "नेपाल।",
                    NPLconLine5: "सम्पर्क: +९७७-९८४१५९२५४२",
                    NPLresTopic: "स्रोतहरू",
                    NPLres1: "कार्यक्रम र समाचार",
                    NPLres2: "FAQs",
                    NPLres3: "क्यारियर",
                },
                // Chat
                NPLchatsec: {
                    NPLques1: "नमस्ते! म तपाईंलाई मद्दत गर्न यहाँ छु। के म तपाईंको नाम जान्न सक्छु?",
                    NPLques2: `नमस्ते {previousValue}, म तपाईंलाई कसरी मद्दत गर्न सक्छु?`,
                    NPLques3: "पक्का। के म तपाईंको फोन नम्बर पाउन सक्छु?",
                    NPLques4: "धन्यवाद! हाम्रा मध्ये एक स्टाफले चाँडै तपाईंलाई कल गर्नेछ।",
                },
                NPLnavsec: {
                    NPLtab1: "हाम्रो बारेमा",
                    NPLtab2: "समाधानहरू",
                    NPLtab3: "कार्यक्रमहरू",
                    NPLtab4: "कार्यक्रम र समाचार",
                    NPLtab5: "आउँदै गरेको कार्यक्रमहरू",
                    NPLtab6: "ब्लगहरू",
                    NPLtab7: "पोर्टल",
                    NPLtab8: "देश",
                    NPLtab9: "सम्पर्क गर्नुहोस्",
                },
                NPLcontsec: {
                    NPLcont1: "सम्पर्क गर्नुहोस्",
                    NPLcont2: "हामीलाई सम्पर्क गर्नुहोस् ",
                    NPLcont3: "र जान्नुहोस् हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं।",
                    NPLcont4: "हामी खुसी हुनेछौं",
                    NPLcont5: "ग्राहक समर्थन प्रदान गर्न वा",
                    NPLcont6: "तपाईंले सोध्न सक्ने कुनै पनि साधारण प्रश्नहरूको उत्तर दिन।",
                    NPLcont7: "पहिलो नाम",
                    NPLcont8: "पहिलो नाम अनिवार्य छ",
                    NPLcont9: "थर",
                    NPLcont10: "थर अनिवार्य छ",
                    NPLcont11: "कम्पनी",
                    NPLcont12: "कम्पनी अनिवार्य छ",
                    NPLcont13: "सम्पर्क नम्बर",
                    NPLcont14: "सम्पर्क नम्बर ठीक १० अंकको हुनुपर्छ",
                    NPLcont15: "name@example.com",
                    NPLcont16: "अवैध इमेल ठेगाना",
                    NPLcont17: "टिप्पणी अनिवार्य छ",
                    NPLcont18: "म गोपनीयता नीति स्वीकार गर्छु",
                    NPLcont19: "तपाईंले गोपनीयता नीति स्वीकार गर्नुपर्छ",
                    NPLcont20: "बुझाउनुहोस्",
                    NPLcont21: "मेटाउनुहोस्",
                    NPLcont22: "मौरिसस",
                    NPLcont23: "नेपाल",
                    NPLcont24: "नेपाल कार्यालय",
                    NPLcont25: "बालुवाटार-४,",
                    NPLcont26: "काठमाण्डू",
                    NPLcont27: "नेपाल।",                    
                    NPLcont28: "दिशा प्राप्त गर्नुहोस्",
                    NPLcont29: "टिप्पणी गर्नुहोस्",
                },
                NPLeventsec: {
                    NPLevnt1: "कार्यक्रम र समाचार",
                    NPLevnt2: "ताजा कार्यक्रम र समाचार",
                    NPLevnt3: "छवि उपलब्ध छैन",
                    NPLevnt4: "बन्द गर्नुहोस्",
                    NPLevnt5: "कार्यक्रम र समाचार",
                    NPLevnt6: "ब्लगहरू",
                },
                NPLupEventSec: {
                    NPLupevnt1: "आउँदै गरेको",
                    NPLupevnt2: "कार्यक्रमहरू",
                    NPLupevnt3: "छवि उपलब्ध छैन",
                    NPLupevnt4: "बन्द गर्नुहोस्",
                },
                NPLportalsec: {
                    NPLptl1: "लन्च गरिनेछ",
                    NPLptl2: "छिट्टै",
                },
                NPLblogsec: {
                    NPLblg1: "ब्लगहरू",
                },
                NPLauthentisec: {
                    NPLat1: "प्रमाणीकरण र पहिचान व्यवस्थापन",
                    NPLat2: "छवि उपलब्ध छैन",
                },
                NPLcybersec: {
                    NPLcy1: "साइबर सुरक्षा शासन र अनुपालन",
                    NPLcy2: "छवि उपलब्ध छैन",
                },
                NPLendpsec: {
                    NPLep1: "एन्डप्वाइन्ट सुरक्षा",
                    NPLep2: "छवि उपलब्ध छैन",
                },
                NPLnewtworksec: {
                    NPLnt1: "नेटवर्किङ",
                    NPLnt2: "छवि उपलब्ध छैन",
                },
                NPLifmsec: {
                    NPLif1: "डाटा सेन्टर पूर्वाधार र पूर्वाधार अनुगमन",
                    NPLif2: "छवि उपलब्ध छैन",
                },
                NPLperisec: {
                    NPLpr1: "परिधि र आन्तरिक सुरक्षा",
                    NPLpr2: "छवि उपलब्ध छैन",
                },
                NPLsecuritysec: {
                    NPLscrty1: "सुरक्षा व्यवस्थापन",
                    NPLscrty2: "छवि उपलब्ध छैन",
                },
                NPLserversec: {
                    NPLsvr1: "सर्भर भण्डारण र ब्याकअप समाधानहरू",
                    NPLsvr2: "छवि उपलब्ध छैन",
                },


            },
        },

        //end of nepal
    }
});
