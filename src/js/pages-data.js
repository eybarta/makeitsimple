export const PagesData = [
    // PAGE SLIDE 1 -- More with less
    {
        hash: 'More_with_less',
        introBg: '/dist/img/intro-v3.jpg',
        introFloatingElement: 'data:img/png;base64,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',
        introVideo: 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/V3_GravityLR.mp4', 
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'More with less'
            },
            txt: 'MIS continuously strives to uphold this simple concept. An excellent example of this is the V3 implant. The triangular design of the V3 means less implant. Less implant means more room for blood pooling and vascularization so that more bone can grow Faster.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 3,
                        text: 'The triangular shape provides high immediate crestal stability.'
                    },
                    {
                        title: 2,
                        text: '2 platforms. Blue for narrow and purple for standard.'
                    },
                    {
                        title: 12,
                        text: 'The 12° conical connection creates an ultimate seal.'
                    },
                    {
                        title: 1,
                        text: 'One consistent concave emergence profile for the entire prosthetic line.'
                    }
                ]
            },
            image: '/dist/img/v3-bottom-graphic.jpg'
        },
        outblock: {
            txt: 'The simplicity of this geometrical change; circular to triangular; is at the core of some major advantages of the V3. Less cortical pressure, less bone resorption and better initial and biological stability. ',
            h2: 'V3. More bone where it matters most.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Mini Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37485',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Implants/V3_Catalog_(MC-V3MCA)_Rev4.pdf'
                            },
                            {
                                txt: 'V3 User Manual',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Users.aspx#39891',
                                pdf: 'http://www.mis-implants.com/upload/pdf/User-Manuals/V3_User_Manual_(MP-UI0V3)_Rev1.pdf'
                            },
                            {
                                txt: 'Conical Restorative Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37486',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Prosthetics/Conical_Connection_Prosth_Opt_(MC-RCCTE)_Rev8.pdf'
                            },
                             {
                                txt: 'Conical Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37484',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Products/MIS_Conical_Connection_Catalog_2017_(MC-PCCSE)_Rev3.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Implant Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#37532'

                            },
                            {
                                txt: 'V3 Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#37532'
                            },
                            {
                                txt: 'VCONCEPT Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#43079'
                            }
                        ]
                    },
                     {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                            },
                            {
                                txt: 'VCONCEPT Magazine',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#48338',
                                pdf: 'http://www.mis-implants.com/upload/PDF/market/MIS_Magazine_2016_(MC-MMAG5)_Rev4.pdf'
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 2 -- Agility is in our nature
    {
        hash: 'Agility_is_in_our_nature',
        introBg: '/dist/img/intro-agility.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Agility is in our nature'
            },
            txt: 'At MIS, being agile means knowing when to change course and take in new ideas and requirements. It also means moving fast towards meeting the needs of our customers.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 4,
                        text: '4 Engineers working on a single project to provide the right solution.'
                    },
                    {
                        title: 15,
                        text: '15 different design concept cycles to get the best possible and simplest result.'
                    },
                    {
                        title: 2,
                        symbol: 'K',
                        text: 'Thousands of fatigue, insertion tool, sealing and other tests to ensure the best product.'
                    },
                    {
                        title: 20,
                        text: '2 groups of 10 doctors participate in brainstorming groups in order to advance and improve developments.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-agility.jpg'
        },
        outblock: {
            txt: 'At times, making an improvement to an existing product is crucial. Moving quickly towards advancement is a key to success.',
            h2: 'Moving swiftly to produce the best product.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            },
                            {
                                txt: 'Warranty Certificate',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37616',
                                pdf: 'http://www.mis-implants.com/upload/PDF/MIS_Warranty_Certificate_(MC-MISWR)_Rev2.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Overview',
                                href: 'http://www.mis-implants.com/MIS-Info.aspx'
                            },
                            {
                                txt: 'Our Mission & Vision',
                                href: 'http://www.mis-implants.com/MIS-Info/Vision.aspx'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'MIS Website',
                                href: 'http://www.mis-implants.com'
                            },
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 3 -- Key to satisfied patients
    {
        hash: 'Key_to_satisfied_patients',
        introBg: '/dist/img/intro-key.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Key to satisfied patients'
            },
            txt: 'Proven history, with millions of implants placed the world over. MIS provides the patient with the most effective solution for the restoration of missing teeth, making it simple to leave the doctor\'s office with a complete smile.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 4,
                        text: 'MIS restoration options for single teeth, fixed bridge, complete denture, or a fixed restoration for edentulous jaw.'
                    },
                    {
                        title: 3,
                        text: '3 parts of rehabilitation: implant, abutment and prosthetic restoration.'
                    },
                    {
                        title: 5,
                        text: 'V3, C1, SEVEN, M4, UNO For 5 choices of implant based restorations.'
                    },
                    {
                        title: 2,
                        text: 'Reconstruction for both young and aging patients.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-key.jpg'
        },
        outblock: {
            txt: 'Restoring a patient\'s missing smile is simple with the vast range of prosthetic and rehabilitation options that MIS has to offer.',
            h2: 'MIS Implants different scenarios, one solution',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Patient Brochure',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#32226',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Patient_Brochure_3D_(MC-PBPIC)_Rev5.pdf'
                            },
                            {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Patient Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/General.aspx#118'
                            },
                            {
                                txt: 'Company Movie',
                                href: 'https://youtu.be/k_SKT7ke-38'
                            },
                            {
                                txt: 'The Company Behind...',
                                href: 'http://www.mis-implants.com/Media/Movies/General.aspx#2170'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'MIS Website',
                                href: 'http://www.mis-implants.com/MIS-Info.aspx'
                            },
                            {
                                txt: 'V3 Minisite',
                                href: 'http://www.mis-implants.com/MIS-Info/Vision.aspx'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'MIS Scientific Info',
                                href: 'http://www.mis-implants.com/Scientific.aspx'
                            }
                        ]
                    },
                ]
            }
        }
    },    
     // PAGE SLIDE 4 -- Easy with every product
    {
        hash: 'Easy_with_every_product',
        introBg: '/dist/img/intro-easy.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Easy with every product'
            },
            txt: 'MIS delivers simplicity, reliability and innovation for implants, prosthetics, digital dentistry and regenerative solutions.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 31,
                        text: 'More than 30 convenient tool kits and sets that make procedures simple.'
                    },
                    {
                        title: 14,
                        text: '14 different tool categories, with over 100 different tools to simplify every procedure.'
                    },
                    {
                        title: 60,
                        text: 'Sixty top-quality drills for a precise and safe procedure.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-easy.jpg'
        },
        outblock: {
            txt: 'MIS offers a wide range of innovative tools and instruments, providing clinicians and lab technicians with simple and easy solutions suited to almost any clinical scenario.',
            h2: 'MIS gives you tools for success.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Conical Con. Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx?#37484'
                            },
                            {
                                txt: 'Internal Hex. Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx?#2560'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Tools - Online Catalog',
                                href: 'http://www.mis-implants.com/Catalog/ImplantSystem/Tools.aspx'
                            },
                            {
                                txt: 'Kits - Online Catalog',
                                href: 'http://www.mis-implants.com/Catalog/ImplantSystem/Kits.aspx'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [    
                            {
                                txt: 'Tools Overview',
                                href: 'http://www.mis-implants.com/Products/Implants/Tools.aspx'
                            },
                            {
                                txt: 'Kits Overview',
                                href: 'http://www.mis-implants.com/Products/Implants/Kits.aspx'
                            }
                        ]
                    }
                ]
            }
        }
    },   
    // PAGE SLIDE 5 -- Innovation leading the way
    {
        hash: 'Innovation_leading_the_way',
        introBg: '/dist/img/intro-innovation.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Innovation leading the way'
            },
            txt: 'Keeping up with market demands means that our innovation comes from a real need to constantly improve, advance and provide the right solution.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 1,
                        text: 'A monolayer of multi-phosphonate molecules.'
                    },
                    {
                        title: 3,
                        text: 'Titanium + B+ + Bone'
                    },
                    {
                        title: 10,
                        text: 'B+ Experience Team of 250 dentists, implanting 10 B+ implants each and reporting back their findings.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-innovation.jpg'
        },
        outblock: {
            txt: 'The B+ was designed to integrate into the surface chemistry of the implant, while creating a layer that perfectly integrates with existing bone.',
            h2: 'Biological Organic Contact',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'B+ Leaflet',
                                href: 'http://www.mis-implants.com/Products/Implants/B-Plus-Surface/Learn-More.aspx#48418'
                            },
                            {
                                txt: 'B+ Flier',
                                href: 'http://www.mis-implants.com/Products/Implants/B-Plus-Surface/Learn-More.aspx#48421'
                            },
                             {
                                txt: 'V3 Mini Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37485',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Implants/V3_Catalog_(MC-V3MCA)_Rev4.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            // {
                            //     txt: 'B+ Movie',
                            //     href: '#p'
                            // },
                            {
                                txt: 'V3 Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#37532'
                            },
                            {
                                txt: 'C1 Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#29920'
                            },
                            {
                                txt: 'B+ Lecture',
                                href: 'http://www.mis-implants.com/Media/Movies/Lectures.aspx#48408'
                            }
                            
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'B+ Minisite',
                                href: 'http://bplus.mis-implants.com/'
                            },
                            {
                                txt: 'B+ Webpage',
                                href: 'http://www.mis-implants.com/Products/Implants/B-Plus-Surface.aspx'
                            },
                            {
                                txt: 'V3 Ministe',
                                href: 'http://v3-implant.com/'
                            }
                        ]
                    }
                ]
            }
        }
    },
    // PAGE SLIDE 6 -- Technology taken to the limits
    {
        hash: 'Technology_taken_to_the_limits',
        introBg: '/dist/img/intro-technology.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Technology taken to the limits'
            },
            txt: 'Pushing the envelope of today\'s technological advancements means MIS continuously explores new ways in which technology can take implant dentistry to the next level for optimal results.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 3,
                        text: 'New advancements to make things simple. V3. 4MATRIX. MGUIDE.'
                    },
                    {
                        title: 3,
                        text: 'The revolutionary triangular shape of the V3 implant.'
                    },
                    {
                        title: 2,
                        text: 'Two parts combine to make the 4MATRIX easy to handle.'
                    },
                    {
                        title: 3,
                        text: 'Three MCENTERS using state-of-the-art technology to take digital dentistry forward.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-technology.jpg'
        },
        outblock: {
            txt: 'The key is to use the most advanced, sophisticated technology so that our customers see a simple, convenient result.',
            h2: 'Using technology to make things simpler',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Mini Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37485',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Implants/V3_Catalog_(MC-V3MCA)_Rev4.pdf'
                            },
                            {
                                txt: 'MCENTER Mini Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#17639',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Products/MCENTER/MCENTER_Catalog_(MC-MGPRM)_Rev3.pdf'
                            },
                            {
                                txt: '4MATRIX Flier',
                                href: 'http://www.mis-implants.com/Products/Regenerative-Solutions/Bone-Grafting-Materials/4MATRIX/Learn-More.aspx#40167',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Regenrative/4MATRIX_Flier_(MC-4MFLI)_Rev1.pdf'
                            },
                            {
                                txt: 'Innovation Flier',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#29918',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Innovation_Flier_(MC-INN09)_Rev9.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#37532'
                            },
                            {
                                txt: 'Mguide Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#4696'
                            },
                            {
                                txt: '4MATRIX Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#48349'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                            {
                                txt: 'MGUIDE Webpage',
                                href: 'http://www.mis-implants.com/Products/Digital-Dentistry/MGUIDE.aspx'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'VCONCEPT Clinic Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 7 -- Service in every step of the process
    {
        hash: 'Service_in_every_step_of_the_process',
        introBg: '/dist/img/intro-service.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Service in every step of the process'
            },
            txt: 'MIS strives to incorporate top notch service in every step of the process. This includes providing excellent training and marketing materials for our distributors and sales reps as well as for the dentists who use our products, and always being available to provide assistance when necessary.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 24,
                        text: '24-hour MCENTER service'
                    },
                    {
                        title: 1,
                        text: 'One convenient location for all marketing and education materials.'
                    },
                    {
                        title: 2,
                        text: 'Fast, 2 day delivery guarantee anywhere in the world.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-service.jpg'
        },
        outblock: {
            txt: 'Customer service goes beyond support for products and procedures. At MIS, service also means building a platform for education.',
            h2: 'There is no compromise on top quality service.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                             {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            },
                            {
                                txt: 'Warranty Certificate',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37616',
                                pdf: 'http://www.mis-implants.com/upload/PDF/MIS_Warranty_Certificate_(MC-MISWR)_Rev2.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Movie',
                                href: 'https://youtu.be/k_SKT7ke-38'
                            },
                            {
                                txt: 'The Company Behind...',
                                href: 'http://www.mis-implants.com/Media/Movies/General.aspx#2170'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Overview Webpage',
                                href: 'http://www.mis-implants.com/MIS-Info.aspx'
                            },
                            {
                                txt: 'Contact Us Webpage',
                                href: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx'
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 8 -- Integrity unwavering
    {
        hash: 'Integrity_unwavering',
        introBg: '/dist/img/intro-integrity.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Integrity unwavering'
            },
            txt: 'Integrity at MIS means an unwavering stance behind each one of our products, as well as corporate integrity towards our employees, suppliers, distributors and of course customers.  A genuine concern for all of the people who make this company run is a core value at MIS.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: '&infin;',
                        text: 'Life time warranty for all of our implants'
                    },
                    {
                        title: 3,
                        text: '3 years warranty for all of our drills and tools'
                    },
                    {
                        title: 5,
                        text: '5 years warranty for all of our abutments and prosthetic accessories'
                    },
                    {
                        title: 10,
                        text: 'More than 10 certificates in accordance with the most stringent international standards.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-integrity.jpg'
        },
        outblock: {
            txt: 'Having a name that can be trusted means never compromising on our beliefs or the way that we conduct our business in the world.',
            h2: 'Our principles are our guide in the market.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                    {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                             {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            },
                            {
                                txt: 'Warranty Certificate',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37616',
                                pdf: 'http://www.mis-implants.com/upload/PDF/MIS_Warranty_Certificate_(MC-MISWR)_Rev2.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'MIS Overview',
                                href: 'http://www.mis-implants.com/MIS-Info.aspx'
                            },
                            {
                                txt: 'MIS Quality Standards',
                                href: 'http://www.mis-implants.com/MIS-Info/Quality.aspx'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'MIS Website',
                                href: 'http://mis-implant.com/'
                            },
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                                
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 9 -- Many years of experience and expertise
    {
        hash: 'Many_years_of_experience_and_expertise',
        introBg: '/dist/img/intro-years.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Many years of experience and expertise'
            },
            txt: 'For over 20 years, MIS has been working hard to make things simple. With countless studies and research done over the years, in order to push the limits of innovation, yet maintain a safe, reliable and tested product.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 95,
                        text: 'Established in 1995, MIS is at the forefront of development and production'
                    },
                    {
                        title: 65,
                        text: '/distributed in over 65 countries'
                    },
                    {
                        title: 22,
                        text: '22 years of dedicated service in the market.'
                    },
                    {
                        title: 50,
                        text: 'More than 50 key opinion leaders globally who stand behind the products.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-years.jpg'
        },
        outblock: {
            txt: 'Standing behind MIS are world-class scientists and engineers, devoted to the continued research and development of innovative products and technologies.',
            h2: 'Knowledge and expertise give MIS the advantage.',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                     {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                             {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            },
                            {
                                txt: 'Warranty Certificate',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37616',
                                pdf: 'http://www.mis-implants.com/upload/PDF/MIS_Warranty_Certificate_(MC-MISWR)_Rev2.pdf'
                            },
                            {
                                txt: 'Innovatively Simple Flier',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#29918',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Innovation_Flier_(MC-INN09)_Rev9.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Movie',
                                href: 'https://youtu.be/k_SKT7ke-38'
                            },
                            {
                                txt: 'The Company Behind...',
                                href: 'http://www.mis-implants.com/Media/Movies/General.aspx#2170'
                            },
                            {
                                txt: 'VCONCEPT Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#43079'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                            {
                                txt: 'B+ Minisite',
                                href: 'http://bplus.mis-implants.com/'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Scientific Overview',
                                href: 'http://www.mis-implants.com/Scientific.aspx'
                            },
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'                                
                            }
                        ]
                    },
                ]
            }
        }
    },
    // PAGE SLIDE 10 -- Preferred choice of dentists worldwide
    {
        hash: 'Preferred_choice_of_dentists_worldwide',
        introBg: '/dist/img/intro-preferred.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Preferred choice of dentists worldwide'
            },
            txt: '1 out of every 17 implants sold globally today is manufactured by MIS. Distributed in over 65 countries worldwide, the top quality and commitment to service keep the dentists who use our products satisfied and returning time and time again.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 17,
                        text: '1 out of every 17 implants sold in the world is produced by MIS.'
                    },
                    {
                        title: 3,
                        symbol: 'K',
                        text: 'Almost three thousand doctors attended the last MIS global conference in Barcelona.'
                    },
                    {
                        title: 70,
                        symbol: 'K',
                        text: 'Over seventy thousand dentist using MIS products worldwide.'
                    },
                    {
                        title: 10,
                        text: 'More then 10 certificates accordance with the most stringent international standards.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-preferred.jpg'
        },
        outblock: {
            txt: 'The global market for dental implants is growing rapidly and together with it is the presence of MIS in the world.',
            h2: {
                    txt: 'Offering simple, creative and comprehensive solutions.',
                    break: 4,
                },
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                     {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                            },
                            {
                                txt: 'Innovatively Simple Flier',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#29918',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Innovation_Flier_(MC-INN09)_Rev9.pdf'
                            },
                            {
                                txt: 'Conical Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37484',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Products/MIS_Conical_Connection_Catalog_2017_(MC-PCCSE)_Rev3.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Online Catalog',
                                href: 'http://www.mis-implants.com/Catalog.aspx'
                            },
                            
                            {
                                txt: 'Company Movie',
                                href: 'https://youtu.be/k_SKT7ke-38'
                            },
                            {
                                txt: 'The Company Behind...',
                                href: 'http://www.mis-implants.com/Media/Movies/General.aspx#2170'
                            },
                            {
                                txt: 'VCONCEPT Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#43079'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                            {
                                txt: 'B+ Minisite',
                                href: 'http://bplus.mis-implants.com/'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Scientific Overview',
                                href: 'http://www.mis-implants.com/Scientific.aspx'
                            },
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                            }
                        ]
                    }
                ]
            }
        }
    },
    // PAGE SLIDE 11 -- Long & short term qualitative research
    {
        hash: 'Long_and_short_term_qualitative_research',
        introBg: '/dist/img/intro-research.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Long & short term qualitative research'
            },
            txt: 'MIS products are backed by years of qualitative research and are currently included in over 90 international studies.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 40,
                        symbol: '+',
                        text: 'Over 40 MIS research publications.'
                    },
                    {
                        title: 20,
                        symbol: '+',
                        text: 'More than 20 published case studies.'
                    },
                    {
                        title: 45,
                        text: 'Over 45 influential key opinion leaders to back up the research done on MIS products.'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-research.jpg'
        },
        outblock: {
            txt: 'We stand by our pledge to conduct the most rigorous, consistent, and ongoing testing and evaluation of our products.',
            h2: 'Substantial research is at the heart of simple products',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items: [
                     {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'
                                
                            },
                            {
                                txt: 'Scientific Studies Vol 4',
                                href: 'http://www.mis-implants.com/upload//Pdf/Volume_4_1.pdf'
                            },
                            {
                                txt: 'Scientific Studies Vol 5',
                                href: 'http://www.mis-implants.com/upload//PDF/MC-SS005.pdf'
                            },
                            {
                                txt: 'Scientific Studies Vol 6',
                                href: 'http://www.mis-implants.com/upload/PDF/MC-SS006_scientific-studies-6.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Scientific Articles',
                                href: 'http://www.mis-implants.com/Scientific/Articles.aspx'
                            },
                            
                            {
                                txt: 'Research Materials',
                                href: 'http://www.mis-implants.com/Scientific/ResearchMaterials.aspx'
                            },
                            {
                                txt: 'Case Studies',
                                href: 'http://www.mis-implants.com/Scientific/Case-Study.aspx'
                            },
                            {
                                txt: 'Lectures',
                                href: 'http://www.mis-implants.com/Media/Movies/Lectures.aspx'
                            },
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                            {
                                txt: 'B+ Minisite',
                                href: 'http://bplus.mis-implants.com/'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Scientific Overview',
                                href: 'http://www.mis-implants.com/Scientific.aspx'
                            },
                            {
                                txt: 'Research Updates 2016',
                                href: 'http://www.mis-implants.com/Media/Newsletters/News2016.aspx#47832'
                            },
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                            }
                        ]
                    }
                ]
            }
        }
    },  
    // PAGE SLIDE 12 -- Everything the dentist needs
    {
        hash: 'Everything_the_dentist_needs',
        introBg: '/dist/img/intro-everything.jpg',
        infoblock: {
            title: {
                tag: 'h1',
                txt: 'Everything the dentist needs'
            },
            txt: 'With over 2000 implants, abutments, prosthetic components, tools and regenerative products to choose from, MIS offers a comprehensive solution for every clinical scenario.',
            group: {
                type: 'numbers',
                items: [
                    {
                        title: 15,
                        text: '15 different surgical kits.'
                    },
                    {
                        title: 5,
                        text: 'Five types of implants...'
                    },
                    {
                        title: 7,
                        text: 'Drilling diameter options...'
                    },
                    {
                        title: 4,
                        text: 'Prosthetics options'
                    }
                ]
            },
            image: '/dist/img/bottom-graphic-everything.jpg'
        },
        outblock: {
            txt: 'The range of choices offered to the dentist in products and tools is key to making it simple.',
            h2: 'Solutions aimed to simplify implant dentistry',
            btn: {
                link: 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx',
                txt: 'Contact your local distributor'
            }
        },
        infoblock2: {
            title: {
                tag: 'h3',
                txt: 'INFORMATION WORTH SEEING',
                options: ['word-break'],
                classNames: ['pb-big']
            },
            group: {
                type: 'images',
                items:[
                     {
                        img:  {
                            src: '/dist/img/prints.svg',
                            alt: 'Printing Catalog'
                        },
                        links: [
                            {
                                txt: 'Company Profile',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/General%20.aspx#37688',
                                pdf: 'http://www.mis-implants.com/upload/pdf/MIS_Company_Profile.pdf'                                
                            },
                            {
                                txt: 'Conical Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37484',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Products/MIS_Conical_Connection_Catalog_2017_(MC-PCCSE)_Rev3.pdf'
                            },
                            {
                                txt: 'Conical Restorative Catalog',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#37486',
                                pdf: 'http://www.mis-implants.com/upload/pdf/Products/Prosthetics/Conical_Connection_Prosth_Opt_(MC-RCCTE)_Rev8.pdf'                                
                            },
                            {
                                txt: 'Scientific Studies Vol 6',
                                href: 'http://www.mis-implants.com/upload/PDF/MC-SS006_scientific-studies-6.pdf'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/online-catalog-icon.png',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Online Catalog',
                                href: 'http://www.mis-implants.com/Catalog.aspx'
                            },
                            
                            {
                                txt: 'Research Materials',
                                href: 'http://www.mis-implants.com/Scientific/ResearchMaterials.aspx'
                            },
                            {
                                txt: 'V3 Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#37532'
                            },
                            {
                                txt: 'MGUIDE Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#4696'
                            },
                            {
                                txt: '4MATRIX Movie',
                                href: 'http://www.mis-implants.com/Media/Movies/Products.aspx#48349'
                            }
                        ]
                    },
                        {
                        img:  {
                            src: '/dist/img/www.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'V3 Minisite',
                                href: 'http://v3-implant.com/'
                            },
                            {
                                txt: 'B+ Minisite',
                                href: 'http://bplus.mis-implants.com/'
                            }
                        ]
                    },
                    {
                        img:  {
                            src: '/dist/img/magnify.svg',
                            alt: 'Online Catalog'
                        },
                        links: [
                            {
                                txt: 'Scientific Overview',
                                href: 'http://www.mis-implants.com/Scientific.aspx'
                            },
                            {
                                txt: 'VCONCEPT Clinical Cases',
                                href: 'http://www.mis-implants.com/Media/Printed-Materials/Products.aspx#43709',
                                pdf: 'http://www.mis-implants.com/upload/PDF/Research/VCONCEPT_Clinical_Cases_(MC-SS007)_Rev2.pdf'
                            }
                        ]
                    }
                ]
            }
        }
    },   
]