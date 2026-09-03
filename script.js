/* =========================================================
   FIXHUB JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceCards = document.querySelectorAll(".service-card");

    const globalSearch = document.getElementById("globalSearch");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    const problemCategory = document.getElementById("problemCategory");
    const problemSelect = document.getElementById("problemSelect");
    const solveProblem = document.getElementById("solveProblem");
    const solutionResult = document.getElementById("solutionResult");

    const problemForm = document.getElementById("problemForm");

    const guideButtons = document.querySelectorAll(".guide-button");

    const faqQuestions = document.querySelectorAll(".faq-question");

    const backToTop = document.getElementById("backToTop");

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    const currentYear = document.getElementById("currentYear");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }


    /* Close mobile menu after clicking a link */

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");
            document.body.classList.remove("menu-open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function handleHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", handleHeader);

    handleHeader();


    /* =====================================================
       SERVICE FILTER
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            serviceCards.forEach(card => {

                if (
                    filter === "all" ||
                    card.dataset.category === filter
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });


    /* =====================================================
       PROBLEM DATABASE
    ===================================================== */

    const problemDatabase = {

        computer: {

            "slow": {
                title: "Your laptop may be overloaded",
                description:
                    "A slow computer can be caused by too many startup programs, low storage, high memory usage, malware or aging hardware.",
                steps: [
                    "Restart the computer.",
                    "Close programs you aren't using.",
                    "Check available storage.",
                    "Open Task Manager and check CPU and RAM usage.",
                    "Disable unnecessary startup applications."
                ]
            },

            "no-power": {
                title: "Your computer may have a power issue",
                description:
                    "The charger, battery, power socket or internal hardware could be responsible.",
                steps: [
                    "Check that the charger is properly connected.",
                    "Try another wall socket.",
                    "Check whether the charging indicator comes on.",
                    "Disconnect accessories and try starting again.",
                    "If it still won't turn on, contact a technician."
                ]
            },

            "overheating": {
                title: "Your computer may be overheating",
                description:
                    "Blocked air vents, dust, heavy workloads or a cooling problem can cause overheating.",
                steps: [
                    "Place the laptop on a hard surface.",
                    "Make sure the ventilation openings are not blocked.",
                    "Close unnecessary heavy applications.",
                    "Check whether the fan is running normally.",
                    "Consider professional cleaning if the problem continues."
                ]
            },

            "display": {
                title: "The display connection may be the issue",
                description:
                    "A blank display can be caused by the screen, graphics system, RAM or connection.",
                steps: [
                    "Increase the screen brightness.",
                    "Restart the computer.",
                    "Disconnect external displays.",
                    "Check whether the keyboard lights respond.",
                    "Contact a technician if the display remains blank."
                ]
            }

        },


        phone: {

            "battery": {
                title: "Your battery may be draining quickly",
                description:
                    "Background applications, screen brightness, poor network signal or battery age can affect battery life.",
                steps: [
                    "Check which apps are using the most battery.",
                    "Reduce unnecessary screen brightness.",
                    "Close apps you aren't using.",
                    "Turn off features you don't need.",
                    "Consider battery replacement if the battery is old."
                ]
            },

            "storage": {
                title: "Your phone is running out of storage",
                description:
                    "Large videos, downloads, applications and cached files commonly consume storage.",
                steps: [
                    "Open your storage settings.",
                    "Remove unnecessary videos.",
                    "Delete unused applications.",
                    "Clean old downloads.",
                    "Back up important files before deleting them."
                ]
            },

            "charging": {
                title: "Your charging system may have a problem",
                description:
                    "The charger, cable, charging port or battery may be responsible.",
                steps: [
                    "Try another compatible charging cable.",
                    "Try another compatible charger.",
                    "Check the charging port for visible dirt.",
                    "Restart the phone.",
                    "Seek professional help if the port appears damaged."
                ]
            }

        },


        network: {

            "disconnecting": {
                title: "Your Wi-Fi may be unstable",
                description:
                    "Router distance, interference, congestion or an internet-provider issue can cause disconnections.",
                steps: [
                    "Restart the router.",
                    "Move closer to the router.",
                    "Reconnect to the Wi-Fi network.",
                    "Test another device.",
                    "Contact your internet provider if every device has the problem."
                ]
            },

            "slow": {
                title: "Your internet connection may be congested",
                description:
                    "Multiple connected devices, weak signal or your provider's network can affect speed.",
                steps: [
                    "Run a speed test.",
                    "Move closer to the router.",
                    "Disconnect devices you aren't using.",
                    "Restart the router.",
                    "Contact your provider if the speed remains poor."
                ]
            },

            "no-internet": {
                title: "Your connection may be offline",
                description:
                    "The router, ISP connection or device network settings may be responsible.",
                steps: [
                    "Check whether the router has power.",
                    "Restart the router.",
                    "Check the WAN/internet indicator.",
                    "Test another device.",
                    "Contact your internet provider if necessary."
                ]
            }

        },


        electrical: {

            "lights": {
                title: "There may be a lighting circuit issue",
                description:
                    "A failed bulb, breaker issue or electrical fault could be responsible.",
                steps: [
                    "Check whether other lights work.",
                    "Check whether the building has power.",
                    "If safe, check the breaker.",
                    "Try replacing a faulty bulb.",
                    "Contact a qualified electrician for persistent faults."
                ]
            },

            "socket": {
                title: "The socket may have a power problem",
                description:
                    "The socket, circuit breaker or wiring may be responsible.",
                steps: [
                    "Check whether other sockets have power.",
                    "Test with a known-working appliance.",
                    "Check the breaker only if it is safe.",
                    "Do not open the socket.",
                    "Contact a qualified electrician."
                ]
            },

            "power": {
                title: "There may be a wider power issue",
                description:
                    "The issue could be with your building's supply, breaker or electrical installation.",
                steps: [
                    "Check whether neighbouring buildings have power.",
                    "Check your main power source.",
                    "Check the breaker only if safe.",
                    "Disconnect sensitive equipment if power is unstable.",
                    "Contact a qualified electrician."
                ]
            }

        },


        software: {

            "website": {
                title: "The website may have a browser or connection issue",
                description:
                    "Browser cache, internet connection or the website server can prevent a page from loading.",
                steps: [
                    "Refresh the page.",
                    "Check your internet connection.",
                    "Try another browser.",
                    "Clear browser cache.",
                    "Try the website again later."
                ]
            },

            "installation": {
                title: "The software may not be installing correctly",
                description:
                    "Insufficient storage, permissions or an incompatible version can cause installation problems.",
                steps: [
                    "Check available storage.",
                    "Make sure the software supports your device.",
                    "Download from the official source.",
                    "Restart the device.",
                    "Try the installation again."
                ]
            },

            "error": {
                title: "The software has encountered an error",
                description:
                    "The error may be caused by corrupted files, outdated software or incorrect configuration.",
                steps: [
                    "Restart the application.",
                    "Restart your device.",
                    "Check for software updates.",
                    "Look for the exact error message.",
                    "Contact support if the problem continues."
                ]
            }

        },


        home: {

            "water": {
                title: "There may be a plumbing problem",
                description:
                    "Low pressure, a blocked pipe or a leaking connection may be responsible.",
                steps: [
                    "Check where the water problem is occurring.",
                    "Look for visible leaks.",
                    "Check whether the main supply is available.",
                    "Turn off the water supply if there is a serious leak.",
                    "Contact a qualified plumber."
                ]
            },

            "appliance": {
                title: "The appliance may have a power or hardware issue",
                description:
                    "The socket, cable, appliance controls or internal components may be responsible.",
                steps: [
                    "Check whether the appliance is receiving power.",
                    "Try another safe socket.",
                    "Check the power cable.",
                    "Check the appliance settings.",
                    "Contact a qualified technician."
                ]
            }

        }

    };


    /* =====================================================
       PROBLEM SELECT OPTIONS
    ===================================================== */

    const problemOptions = {

        computer: [
            ["slow", "Laptop is very slow"],
            ["no-power", "Laptop won't turn on"],
            ["overheating", "Laptop is overheating"],
            ["display", "Laptop has no display"]
        ],

        phone: [
            ["battery", "Battery drains quickly"],
            ["storage", "Phone storage is full"],
            ["charging", "Phone won't charge properly"]
        ],

        network: [
            ["disconnecting", "Wi-Fi keeps disconnecting"],
            ["slow", "Internet is very slow"],
            ["no-internet", "Wi-Fi connected but no internet"]
        ],

        electrical: [
            ["lights", "Lights are not working"],
            ["socket", "Socket is not working"],
            ["power", "Power problem"]
        ],

        software: [
            ["website", "Website isn't loading"],
            ["installation", "Software won't install"],
            ["error", "Software keeps showing an error"]
        ],

        home: [
            ["water", "Water / plumbing problem"],
            ["appliance", "Home appliance problem"]
        ]

    };


    if (problemCategory) {

        problemCategory.addEventListener("change", () => {

            const category = problemCategory.value;

            problemSelect.innerHTML =
                `<option value="">Choose a problem</option>`;

            if (!category) {

                problemSelect.disabled = true;
                return;

            }

            problemOptions[category].forEach(option => {

                const optionElement =
                    document.createElement("option");

                optionElement.value = option[0];
                optionElement.textContent = option[1];

                problemSelect.appendChild(optionElement);

            });

            problemSelect.disabled = false;

        });

    }


    /* =====================================================
       SOLVE PROBLEM
    ===================================================== */

    if (solveProblem) {

        solveProblem.addEventListener("click", () => {

            const category = problemCategory.value;
            const problem = problemSelect.value;

            if (!category || !problem) {

                showToast("Please select a category and problem.");

                return;

            }

            const data = problemDatabase[category][problem];

            if (!data) {
                return;
            }

            solutionResult.innerHTML = `

                <h3>
                    <i class="fa-solid fa-lightbulb"></i>
                    ${data.title}
                </h3>

                <p>
                    ${data.description}
                </p>

                <ul>
                    ${data.steps.map(step => `<li>${step}</li>`).join("")}
                </ul>

                <button
                    class="btn btn-primary full-width"
                    id="solutionRequest"
                >
                    <i class="fa-brands fa-whatsapp"></i>
                    I Still Need Help
                </button>

            `;

            solutionResult.classList.add("show");

            document
                .getElementById("solutionRequest")
                .addEventListener("click", () => {

                    document.getElementById("requestCategory").value =
                        getCategoryName(category);

                    document.getElementById("problemDescription").value =
                        `${problemSelect.options[problemSelect.selectedIndex].text}. ${data.description}`;

                    document
                        .getElementById("request")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                });

        });

    }


    /* =====================================================
       SEARCH SYSTEM
    ===================================================== */

    const searchableProblems = [

        {
            keywords: [
                "laptop",
                "computer",
                "slow",
                "pc"
            ],
            title: "Computer / Laptop Problems",
            description:
                "Try the Smart Problem Solver for slow computers, overheating, display problems and startup issues.",
            category: "computer"
        },

        {
            keywords: [
                "phone",
                "mobile",
                "battery",
                "charging",
                "storage"
            ],
            title: "Phone Problems",
            description:
                "FixHub can help with battery, charging and storage problems.",
            category: "phone"
        },

        {
            keywords: [
                "wifi",
                "wi-fi",
                "internet",
                "network",
                "router"
            ],
            title: "Wi-Fi & Network Problems",
            description:
                "Try troubleshooting for slow internet, disconnections and no-internet problems.",
            category: "network"
        },

        {
            keywords: [
                "light",
                "electric",
                "electricity",
                "socket",
                "power"
            ],
            title: "Electrical Problems",
            description:
                "For electrical faults, only perform safe basic checks and contact a qualified electrician for dangerous problems.",
            category: "electrical"
        },

        {
            keywords: [
                "website",
                "software",
                "code",
                "program",
                "error"
            ],
            title: "Software & Website Problems",
            description:
                "Try checking your browser, software version, connection and exact error message.",
            category: "software"
        }

    ];


    function performSearch() {

        const query = globalSearch.value
            .toLowerCase()
            .trim();

        searchResults.innerHTML = "";

        if (!query) {
            return;
        }

        const results = searchableProblems.filter(item => {

            return item.keywords.some(keyword =>
                query.includes(keyword)
            );

        });


        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="search-result">
                    <h4>No exact guide found.</h4>
                    <p>
                        Try words like "laptop slow",
                        "Wi-Fi", "phone battery", "socket"
                        or "website error".
                    </p>
                </div>
            `;

            return;
        }


        results.forEach(item => {

            const result = document.createElement("div");

            result.className = "search-result";

            result.innerHTML = `
                <h4>${item.title}</h4>

                <p>
                    ${item.description}
                </p>

                <button
                    class="btn btn-primary"
                    style="margin-top:12px;"
                >
                    Open Problem Solver
                </button>
            `;

            result
                .querySelector("button")
                .addEventListener("click", () => {

                    document
                        .getElementById("solver")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                    setTimeout(() => {

                        problemCategory.value =
                            item.category;

                        problemCategory.dispatchEvent(
                            new Event("change")
                        );

                    }, 600);

                });

            searchResults.appendChild(result);

        });

    }


    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }


    if (globalSearch) {

        globalSearch.addEventListener("keydown", event => {

            if (event.key === "Enter") {
                performSearch();
            }

        });

    }


    /* =====================================================
       HERO MINI PROBLEMS
    ===================================================== */

    document.querySelectorAll(".mini-problem").forEach(button => {

        button.addEventListener("click", () => {

            globalSearch.value =
                button.dataset.problem;

            performSearch();

            document
                .querySelector(".search-section")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* =====================================================
       SERVICE BUTTONS
    ===================================================== */

    document.querySelectorAll(".service-link").forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;

            const categoryMap = {
                technology: "Technology",
                electrical: "Electrical",
                network: "Network",
                software: "Software",
                home: "Home"
            };

            document.getElementById("requestCategory").value =
                categoryMap[category] || "";

            document
                .getElementById("request")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* =====================================================
       FIX IT YOURSELF GUIDES
    ===================================================== */

    guideButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".guide-card");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {

                button.innerHTML = `
                    Hide Fix
                    <i class="fa-solid fa-chevron-up"></i>
                `;

            } else {

                button.innerHTML = `
                    View Fix
                    <i class="fa-solid fa-arrow-right"></i>
                `;

            }

        });

    });


    /* =====================================================
       FAQ
    ===================================================== */

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const item = question.closest(".faq-item");
            const answer = item.querySelector(".faq-answer");

            const wasOpen = item.classList.contains("open");


            document.querySelectorAll(".faq-item").forEach(
                otherItem => {

                    otherItem.classList.remove("open");

                    const otherAnswer =
                        otherItem.querySelector(".faq-answer");

                    otherAnswer.style.maxHeight = null;

                }
            );


            if (!wasOpen) {

                item.classList.add("open");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =====================================================
       REQUEST FORM → WHATSAPP
    ===================================================== */

    if (problemForm) {

        problemForm.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("userName").value.trim();

            const phone =
                document.getElementById("userPhone").value.trim();

            const category =
                document.getElementById("requestCategory").value;

            const location =
                document.getElementById("userLocation").value.trim();

            const urgency =
                document.getElementById("urgency").value;

            const description =
                document
                    .getElementById("problemDescription")
                    .value.trim();


            if (
                !name ||
                !phone ||
                !category ||
                !location ||
                !description
            ) {

                showToast("Please complete all required fields.");

                return;

            }


            const message =

`Hello FixHub 👋

I need help with a problem.

Name: ${name}
Phone: ${phone}
Category: ${category}
Location: ${location}
Urgency: ${urgency}

Problem:
${description}

Please let me know how FixHub can help. Thank you.`;


            const whatsappNumber = "2349154480532";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            showToast("Opening WhatsApp...");

            setTimeout(() => {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 700);

        });

    }


    /* =====================================================
       SOCIAL LINKS
    ===================================================== */

    document.querySelectorAll("[data-social]").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            showToast(
                `${link.dataset.social} link coming soon.`
            );

        });

    });


    /* =====================================================
       TESTIMONIAL SLIDER
    ===================================================== */

    const testimonialTrack =
        document.getElementById("testimonialTrack");

    const testimonials =
        document.querySelectorAll(".testimonial");

    const sliderDots =
        document.getElementById("sliderDots");

    const prevTestimonial =
        document.getElementById("prevTestimonial");

    const nextTestimonial =
        document.getElementById("nextTestimonial");

    let currentSlide = 0;


    if (testimonials.length > 0) {

        testimonials.forEach((_, index) => {

            const dot =
                document.createElement("button");

            dot.className = "slider-dot";

            if (index === 0) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {

                currentSlide = index;
                updateSlider();

            });

            sliderDots.appendChild(dot);

        });


        function updateSlider() {

            testimonialTrack.style.transform =
                `translateX(-${currentSlide * 100}%)`;

            document
                .querySelectorAll(".slider-dot")
                .forEach((dot, index) => {

                    dot.classList.toggle(
                        "active",
                        index === currentSlide
                    );

                });

        }


        nextTestimonial.addEventListener("click", () => {

            currentSlide++;

            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }

            updateSlider();

        });


        prevTestimonial.addEventListener("click", () => {

            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = testimonials.length - 1;
            }

            updateSlider();

        });


        setInterval(() => {

            currentSlide++;

            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }

            updateSlider();

        }, 6000);

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer;


    function showToast(message) {

        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }


    /* =====================================================
       CATEGORY NAME
    ===================================================== */

    function getCategoryName(category) {

        const names = {
            computer: "Technology",
            phone: "Technology",
            network: "Network",
            electrical: "Electrical",
            software: "Software",
            home: "Home"
        };

        return names[category] || "";

    }


    console.log(
        "%cFixHub is running successfully!",
        "font-weight:bold;font-size:16px;"
    );

});