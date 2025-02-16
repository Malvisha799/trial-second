//  Dynamically shw data
document.querySelectorAll(".tabNameWrapperStyle").forEach((tab) => {
  tab.addEventListener("click", function () {
    const dropDownId = this.getAttribute("data-dropdown");
    console.log("Clicked Tab Text:", dropDownId);

    // const tabId = tabText
    // ?.toLowerCase()
    // .replace(/[^a-z0-9&]/g, '') // Sanitize text to match dropdown IDs
    // .replace(/\s+/g, '');
    // console.log('Sanitized Tab ID:', tabId);

    const dropDown = document.getElementById(dropDownId);
    if (!dropDown) {
      console.error("Dropdown not found for ID:", dropDownId);
      return;
    }

    // Check if the clicked tab is already active
    const isAlreadyActive = dropDown.classList.contains("active");
    console.log("Is Dropdown Already Active:", isAlreadyActive);

    // Close all dropdowns first
    document.querySelectorAll(".dropDownContainer").forEach((container) => {
      container.classList.add("hidden");
      container.classList.remove("active");
    });

    // Remove active class from all tabs
    document.querySelectorAll(".tabNameWrapperStyle").forEach((tabItem) => {
      tabItem.classList.remove("active");
    });

    // Toggle the current tab and dropdown
    if (!isAlreadyActive) {
      this.classList.add("active");
      dropDown.classList.remove("hidden");
      dropDown.classList.add("active");
    }
  });
});
// Set up event listener for menu items in dropdowns
document
  .querySelectorAll(".dropDownContainer")
  .forEach((dropDownContainer, index) => {
    const menuItems = dropDownContainer.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) => {
      const infoType = menuItem.getAttribute("data-info");
      menuItem.addEventListener("mouseover", () => {
        displayInfo(infoType, index);
      });
    });
  });
// Centralized content for all menu items
const rightSideContent = {
  businessRegistration: {
    title: "Business Registration",
    items: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "One Person Company",
      "Sole Proprietorship",
      "Nidhi Company",
      "Producer Company",
      "Partnership Firm",
      "Startup India Registration",
    ],
  },
  internationalBusiness: {
    title: "International Business Setup",
    items: [
      "US Incorporation",
      "Singapore Incorporation",
      "UK Incorporation",
      "Netherlands Incorporation",
      "Hong Kong Company Incorporation",
      "Dubai Company Incorporation",
    ],
  },
  companynamesearch: {
    title: "Company Name Search",
    items: ["Company Name Search", "Change Company Name"],
  },
  licensesandRegistrations: {
    title: "Licenses & Registrations",
    items: [
      "Digital Signature Certificate",
      "Udyam Registration",
      "MSME Registration",
      "ISO Certification",
      "FSSAI [Food License]",
      "IEC [Import/Export Code]",
      "Apeda RCMC",
      "Spice Board Registration",
      "FIEO Registration",
      "Legal Metrology",
      "Hallmark Registration",
      "BIS Registration",
      "Liquor License",
      "CLRA Registration & Licensing",
      "AD Code Registration",
      "IRDAI Registration",
      "Drug & Cosmetic License",
      "Customs Clearance",
    ],
  },
  webDevelopment: {
    title: "Web Development",
    items: ["Web/E-Commerce Website Development"],
  },
  gstandotherindirecttax: {
    title: "GST and Other Indirect Tax",
    items: [
      "GST Registration",
      "GST Filing",
      "GST Login Portal",
      "HSN Code Finder",
      "GST Cancellation and Revocation",
      "Indirect Tax",
      "RoDTEP",
    ],
  },
  changesinpvtltdcompany: {
    title: "Changes in Pvt Ltd Company",
    items: [
      "Add a Director",
      "Remove a Director",
      "Increase Authorized Capital",
      "Close the Pvt Ltd Company",
      "Strike off Company",
      "Change Objective/Activity",
      "Change Address",
    ],
  },
  changesinlimitedliabilitypartnership: {
    title: "Changes In Limited Liability Partnership",
    items: [
      "Add Designated Partner",
      "Changes to LLP Agreement",
      "Close to LLP",
    ],
  },
  mandatoryannualfilings: {
    title: "Mandatory Annual Filings",
    items: [
      "Annual Compliance Services",
      "LLP Annual Filings",
      "Secretarial Audit",
    ],
  },
  labourcompliance: {
    title: "Labour Compliance",
    items: [
      "Provident Fund (PF) Registration",
      "ESI Registration",
      "Professional Tax Registration",
      "Shops and Establishments License",
      "Employee Stock Option Plan [ESOP]",
      "POSH Compliance",
      "Labor Law Advisor",
    ],
  },
  accountingandtax: {
    title: "Accounting & Tax",
    items: [
      "Accounting and Book-keeping",
      "TDS Return Filing",
      "Individual Income Tax Filing",
      "Proprietorship Tax Return Filing",
      "ITR for LLP",
      "Corporate Tax",
      "Income Tax Assessment",
      "Income Tax Notice",
      "Virtual CFO",
    ],
  },
  convertyourbusiness: {
    title: "Convert Your Business",
    items: [
      "Proprietorship to Pvt Ltd Company",
      "Compliance Check - Secretarial Audit",
      "Due Diligence",
      "RBI Compliance",
      "Convert Partnership into LLP Company",
      "Convert Private into Public Limited Company",
      "Convert Private into OPC Company",
    ],
  },
  trademark: {
    title: "Trademark",
    items: [
      "Trademark Registration",
      "Trademark Search",
      "Respond to TM Objection",
      "Well Known Trademark",
      "Trademark Watch",
      "Trademark Renewal",
      "Trademark Assignment",
      "USA Trademark",
      "International Trademark",
      "Trademark Class Finder",
    ],
  },
  copyright: {
    title: "Copyright",
    items: ["Copyright Registration", "Copyright Music"],
  },
  patent: {
    title: "Patent",
    items: [
      "Indian Patent Search",
      "Provisional Patent Application",
      "Patent Registration",
    ],
  },
  infringement: {
    title: "Infringement",
    items: [
      "Copyright Infringement",
      "Patent Infringement",
      "Trademark Infringement",
    ],
  },
  designregistration: {
    title: "Design Registration",
    items: ["Logo Design", "Design Registration"],
  },
  businesscontracts: {
    title: "Business Contracts",
    items: [
      "Non Disclosure Agreement NDA",
      "Service Level Agreement",
      "Franchise Agreement",
      "Master Service Agreement",
      "Shareholders Agreement",
      "Joint Venture Agreement",
      "Founders Agreement",
      "Vendor Agreement",
      "Consultancy Agreement",
      "Memorandum of Understanding",
      "Succession Certificate",
      "Scope of Work Agreement",
      "Share Purchase Agreement",
      "Relinquishment Deed",
      "Legal Heir Certificate",
      "Trade Licence",
      "Noncompete Agreement",
      "Finance Agreement",
      "GDPR",
    ],
  },
  personalandfamily: {
    title: "Personal & Family",
    items: ["Will Registration", "Probate of Will", "Power of Attorney"],
  },
  realestate: {
    title: "Real Estate",
    items: [
      "Rental Agreement",
      "Sale Deed",
      "Gift Deed",
      "Rental Tenant Notice",
    ],
  },
  notices: {
    title: "Notices",
    items: [
      "Legal Notice",
      "Legal Notice for Money Recovery",
      "Legal Notice for recovery of dues",
      "Cheque Bounce Notice",
      "Legal Notice Under Consumer Protection Act",
    ],
  },
  hrpolicies: {
    title: "HR Policies",
    items: ["Employment Agreement", "ESOP", "Payroll Maintenance"],
  },
  fundraising: {
    title: "Fundraising",
    items: ["Fundraising", "Pitch-Deck", "Business Loan", "DPR Service"],
  },
  patent: {
    title: "Patent",
    items: [
      "Indian Patent Search",
      "Provisional Patent Application",
      "Patent Registration",
    ],
  },
  ngo: {
    title: "NGO",
    items: [
      "NGO",
      "Section 8 Company",
      "Trust Registration",
      "Society Registration",
      "NGO Compliances",
      "NGO Compliance",
      "Section 8 Compliance",
      "CSR-1 Filing",
      "Sec.80G & Sec. 12A",
      "Darpan Registration",
      "FCRA Registration",
    ],
  },
  propertyandpersonal: {
    title: "Property & Personal",
    items: [
      "Property Title Verification",
      "Property Registration",
      "Rera Complaint",
      "Licenses & Registration",
      "Gun License",
      "Name Change & Other Conditions",
      "Name Change",
      "Religion Change",
      "Gender Change",
      "File an e-FIR",
      "Online Police Complaint",
      "Marriage",
      "Marriage Registration",
      "Court Marriage",
      "Mutual Divorce",
      "Divorce Alimony",
      "Restitution of Conjugal Rights",
      "Immigration",
      "Corporate immigration",
      "Family immigration",
      "College immigration",
      "File a Consumer Complaint",
      "Online Consumer Complaint",
      "E-Commerce Consumer Complaint",
      "Insurance Consumer Complaint",
    ],
  },
  lawyersandexperts: {
    title: "Lawyers & Experts",
    items: [
      "Labour Law Advisor",
      "Criminal Lawyer",
      "Labour Lawyer",
      "Consumer Court Lawyer",
      "Divorce Lawyer",
      "Banking Lawyer",
      "Immigration Lawyer",
      "Family Lawyer",
      "Litigation Lawyer",
      "Intellectual Property Lawyer",
      "Trademark Lawyer",
      "Reply to ITR Notice",
      "Expert Services",
      "Technolgy, Media and, Telecom (TMT)",
      "Risk Management and Regulatory Risk",
    ],
  },
};

function displayInfo(infoType, index) {
  const sectionTitle = document.querySelectorAll("#sectionTitle")[index];
  const sectionList = document.querySelectorAll("#sectionList")[index];

  if (!sectionTitle || !sectionList) {
    console.error("Section elements not found!");
    return;
  }
  const content = rightSideContent[infoType];
  console.log("Content for Info Type:", content);
  if (content) {
    const boldItems = [
      "NGO Compliance",
      "Licenses & Registration",
      "Name Change & Other Conditions",
      "File an e-FIR",
      "Marriage",
      "Immigration",
      "File a Consumer Complaint",
      "Expert Services",
    ];
    sectionTitle.textContent = content.title;
    sectionList.innerHTML = content.items
      .map((item) => {
        // Check for "NGO Compliance" and add custom styles
        if (boldItems.includes(item)) {
          return `<li style="font-weight: bold; margin-top: 15px; font-size: 15px; text-dark">${item}</li>`;
        }
        return `<li>${item}</li>`;
      })
      .join("");
  } else {
    sectionTitle.textContent = "Not Found";
    sectionList.innerHTML = "<li>No items to display</li>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropbtns = document.querySelectorAll(".mobile-dropbtn");
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleContainer = document.querySelector(".toggle-container");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Handle mobile dropdown menus
  mobileDropbtns.forEach((btn) => {
    btn.addEventListener("clic.nek", function () {
      const dropdownContent = thisxtElementSibling;

      // Close all other dropdowns
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          if (content !== dropdownContent) {
            content.classList.remove("active");
          }
        });

      // Toggle current dropdown
      dropdownContent.classList.toggle("active");
    });
  });

  // Toggle button dropdown
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleContainer.classList.toggle("active");
  });

  // Close mobile menu and toggle dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      mobileMenu.classList.remove("active");
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          content.classList.remove("active");
        });
    }

    if (!event.target.closest(".toggle-container")) {
      toggleContainer.classList.remove("active");
    }
  });
});

//Message Box Scroll

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Handle button clicks
document.querySelector(".explore-btn").addEventListener("click", () => {
  console.log("Explore All clicked");
  // Add your explore functionality here
});

document.querySelector(".launch-btn").addEventListener("click", () => {
  console.log("Launch Now clicked");
  // Add your launch functionality here
});

// document.querySelector(".continue-btn").addEventListener("click", () => {
//   console.log("Continue With Company clicked");
//   // Add your continue functionality here
// });

// Handle service card clicks
document.addEventListener("DOMContentLoaded", function () {
  // Toggle switch functionality
  const toggleSwitch = document.querySelector(".switch input");
  const companyCard = document.querySelector(".service-card.company");
  const individualCard = document.querySelector(".service-card.individual");
  const companyServices = document.querySelector(".company-services");
  const individualServices = document.querySelector(".individual-services");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      companyCard.style.opacity = "0.5";
      individualCard.style.opacity = "1";
      companyServices.classList.remove("active");
      individualServices.classList.add("active");
    } else {
      companyCard.style.opacity = "1";
      individualCard.style.opacity = "0.5";
      companyServices.classList.add("active");
      individualServices.classList.remove("active");
    }
  });

  // Initialize cards opacity
  companyCard.style.opacity = "1";
  individualCard.style.opacity = "0.5";

  // Service buttons hover effect
  const serviceButtons = document.querySelectorAll(".service-btn");
  serviceButtons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Launch button click animation
  const launchBtn = document.querySelector(".launch-btn");
  launchBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 200);
  });
});

// Counter Animation for Statistics
const statsSection = document.querySelector(".stats-section");
const numbers = document.querySelectorAll(".stat-number");
let hasAnimated = false;

// Enhanced counter animation
function animateCounter(element, target) {
  let current = 0;
  const duration = 2500;
  const steps = duration / 16;
  const increment = target / steps;
  let step = 0;

  const easeOutQuart = (t) => 1 - --t * t * t * t;

  const timer = setInterval(() => {
    step++;
    const progress = easeOutQuart(step / steps);
    current = Math.min(target * progress, target);

    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + "+";
    } else {
      element.textContent = Math.floor(current) + "+";
    }

    if (step >= steps) {
      clearInterval(timer);
    }
  }, duration / steps);
}

// Add parallax effect to stats cards
const cards = document.querySelectorAll(".stat-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

// Intersection Observer for triggering animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        numbers.forEach((number) => {
          const target = parseInt(number.getAttribute("data-target"));
          animateCounter(number, target);
        });
      }
    });
  },
  { threshold: 0.5 }
);

// Start observing the stats section
observer.observe(statsSection);

// Statistics Section Scroll
const statsContainer = document.querySelector(".stats-container");
const scrollLeftBtn = document.querySelector(".scroll-btn.left");
const scrollRightBtn = document.querySelector(".scroll-btn.right");
const cardWidth = 300; // Width of card + gap
let autoScrollInterval;

// Manual scroll with buttons
scrollLeftBtn.addEventListener("click", () => {
  statsContainer.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  statsContainer.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});

// Auto scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (
      statsContainer.scrollLeft + statsContainer.clientWidth >=
      statsContainer.scrollWidth
    ) {
      // If reached the end, scroll back to start
      statsContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      statsContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  }, 5000); // Auto scroll every 5 seconds
}

// Stop auto scroll on user interaction
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Restart auto scroll after user interaction
function restartAutoScroll() {
  stopAutoScroll();
  startAutoScroll();
}

// Event listeners for user interaction
statsContainer.addEventListener("mouseenter", stopAutoScroll);
statsContainer.addEventListener("mouseleave", startAutoScroll);
scrollLeftBtn.addEventListener("click", restartAutoScroll);
scrollRightBtn.addEventListener("click", restartAutoScroll);

// Start auto scroll when the page loads
startAutoScroll();

//Container2//
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  lucide.createIcons();

  // Auto-scroll for logos (Left & Right)
  const logosScroll = document.querySelector(".logos-scroll");
  let scrollPosition = 0;
  let scrollDirection = -1; // 1 = Right, -1 = Left
  const scrollSpeed = 0.5;
  let isHovered = false;
  let lastTimestamp = 0;

  logosScroll.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  logosScroll.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  function smoothScroll(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;

    if (!isHovered) {
      scrollPosition += scrollSpeed * (delta / 16) * scrollDirection;

      // Reverse direction at edges
      if (scrollPosition >= logosScroll.scrollWidth - logosScroll.clientWidth) {
        scrollDirection = -1; // Move Left
      } else if (scrollPosition <= 0) {
        scrollDirection = 1; // Move Right
      }

      logosScroll.scrollLeft = scrollPosition;
    }

    lastTimestamp = timestamp;
    requestAnimationFrame(smoothScroll);
  }

  requestAnimationFrame(smoothScroll);

  // Smooth scroll for services with momentum
  const servicesContainer = document.querySelector(".services-container1");
  let isScrolling = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let momentumID;

  function applyMomentum() {
    if (Math.abs(velocity) > 0.1) {
      servicesContainer.scrollLeft += velocity;
      velocity *= 0.95; // Friction
      momentumID = requestAnimationFrame(applyMomentum);
    }
  }

  servicesContainer.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - servicesContainer.offsetLeft;
    scrollLeft = servicesContainer.scrollLeft;
    cancelAnimationFrame(momentumID);

    // Store the last few positions for velocity calculation
    const positions = [];
    let lastTime = Date.now();

    function trackMovement(e) {
      if (isScrolling) {
        const now = Date.now();
        positions.push({
          x: e.pageX,
          time: now,
        });

        // Keep only the last 5 positions
        if (positions.length > 5) positions.shift();

        const x = e.pageX - servicesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        servicesContainer.scrollLeft = scrollLeft - walk;
      }
    }

    function stopScrolling() {
      if (positions.length > 1) {
        const last = positions[positions.length - 1];
        const first = positions[0];
        const deltaX = last.x - first.x;
        const deltaTime = last.time - first.time;
        velocity = (deltaX / deltaTime) * 16; // Convert to pixels per frame
        applyMomentum();
      }
      isScrolling = false;
      positions.length = 0;
    }

    document.addEventListener("mousemove", trackMovement);
    document.addEventListener("mouseup", function cleanup() {
      document.removeEventListener("mousemove", trackMovement);
      document.removeEventListener("mouseup", cleanup);
      stopScrolling();
    });
  });

  // Parallax effect for service cards
  const cards = document.querySelectorAll(".service-card1");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
        `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});

// Add hover effect to feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-2px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Play button click handler
document.querySelector(".play-button").addEventListener("click", () => {
  // Add your video play functionality here
  console.log("Play video clicked");
});

// Youtube Video Section
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("videoCarousel");
  // const prevButton = document.getElementById("prevButton");
  // const nextButton = document.getElementById("nextButton");
  const cards = Array.from(carousel.children);
  let currentIndex = 2; // Start with middle card
  let autoScrollInterval;

  function updateCarousel() {
    // Handle infinite scroll by adjusting the index
    if (currentIndex < 0) {
      currentIndex = cards.length - 1;
    } else if (currentIndex >= cards.length) {
      currentIndex = 0;
    }

    cards.forEach((card, index) => {
      card.style.transition = "all 0.5s ease";

      // Calculate relative position considering the circular nature
      let relativeIndex = index - currentIndex;
      if (relativeIndex < -2) relativeIndex += cards.length;
      if (relativeIndex > 2) relativeIndex -= cards.length;

      if (relativeIndex === 0) {
        card.style.transform = "translateX(0) scale(1)";
        card.style.opacity = "1";
        card.style.zIndex = "3";
      } else if (relativeIndex === -1 || relativeIndex === cards.length - 1) {
        card.style.transform = "translateX(-70%) scale(0.9)";
        card.style.opacity = "0.7";
        card.style.zIndex = "2";
      } else if (relativeIndex === -2 || relativeIndex === cards.length - 2) {
        card.style.transform = "translateX(-140%) scale(0.8)";
        card.style.opacity = "0.7";
        card.style.zIndex = "1";
      } else if (relativeIndex === 1) {
        card.style.transform = "translateX(70%) scale(0.9)";
        card.style.opacity = "0.7";
        card.style.zIndex = "2";
      } else if (relativeIndex === 2) {
        card.style.transform = "translateX(140%) scale(0.8)";
        card.style.opacity = "0.7";
        card.style.zIndex = "1";
      } else {
        card.style.transform = "translateX(200%) scale(0.7)";
        card.style.opacity = "0";
        card.style.zIndex = "0";
      }
    });
  }

  function startAutoScroll() {
    stopAutoScroll(); // Clear any existing interval
    autoScrollInterval = setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 2000); // Auto scroll every 2 seconds
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
  }

  // prevButton.addEventListener("click", () => {
  //   currentIndex--;
  //   updateCarousel();
  //   // Restart auto-scroll after manual navigation
  //   startAutoScroll();
  // });

  // nextButton.addEventListener("click", () => {
  //   currentIndex++;
  //   updateCarousel();
  //   // Restart auto-scroll after manual navigation
  //   startAutoScroll();
  // });

  // Pause auto-scroll when hovering over the carousel
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  // Initial setup
  updateCarousel();
  startAutoScroll();
});

//Testimonial Section
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".testimonials-container");
  let scrollPosition = 0;
  const scrollSpeed = 1;
  let isHovered = false;
  let lastTimestamp = 0;
  let animationFrameId;

  // Clone the testimonial cards for infinite scroll
  const cards = document.querySelectorAll(".testimonial-card");
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
  });

  container.addEventListener("mouseenter", () => {
    isHovered = true;
    cancelAnimationFrame(animationFrameId);
  });

  container.addEventListener("mouseleave", () => {
    isHovered = false;
    lastTimestamp = 0;
    animationFrameId = requestAnimationFrame(smoothScroll);
  });

  function smoothScroll(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;

    if (!isHovered) {
      scrollPosition += scrollSpeed * (delta / 16);

      // Reset scroll position when reaching the end
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
    }

    lastTimestamp = timestamp;
    animationFrameId = requestAnimationFrame(smoothScroll);
  }

  // Start the animation
  animationFrameId = requestAnimationFrame(smoothScroll);

  // Touch and mouse drag scrolling
  let isScrolling = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    cancelAnimationFrame(animationFrameId);
  });

  container.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("mouseup", () => {
    isScrolling = false;
    lastTimestamp = 0;
    animationFrameId = requestAnimationFrame(smoothScroll);
  });

  container.addEventListener("mouseleave", () => {
    isScrolling = false;
  });

  // Touch events
  container.addEventListener("touchstart", (e) => {
    isScrolling = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    cancelAnimationFrame(animationFrameId);
  });

  container.addEventListener("touchmove", (e) => {
    if (!isScrolling) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("touchend", () => {
    isScrolling = false;
    lastTimestamp = 0;
    animationFrameId = requestAnimationFrame(smoothScroll);
  });
});

// PLANS FUNCTIONALITY SECTION
// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const plansModal = document.getElementById("plansModal");
  const demoModal = document.getElementById("demoModal");
  const explorePlansBtn = document.querySelector(".explore-plans");
  const requestDemoBtn = document.querySelector(".request-demo");
  const closeBtns = document.querySelectorAll(".close");

  explorePlansBtn.addEventListener("click", () => {
    plansModal.style.display = "block";
  });

  requestDemoBtn.addEventListener("click", () => {
    demoModal.style.display = "block";
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      plansModal.style.display = "none";
      demoModal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === plansModal) {
      plansModal.style.display = "none";
    }
    if (e.target === demoModal) {
      demoModal.style.display = "none";
    }
  });

  // Demo form submission
  const demoForm = document.getElementById("demoForm");
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    demoModal.style.display = "none";
    demoForm.reset();
  });

  // Tabs functionality with dynamic content
  const tabBtns = document.querySelectorAll(".tab-btn");
  const contentArea = document.querySelector(".services1-grid");

  const tabContents = {
    resumes: {
      title: "Other Services Than Offered By India Certify",
      tags: [
        "GeM Registration",
        "Food Registration",
        "Udyam Registration",
        "ISO Registration",
        "PF Registration",
        "Barcode Registration",
        "Darpan Registration",
        "ZED Certification",
        "DSC Registration",
        "GST Registration",
        "Gumasta Registration",
        "ESI Registration",
        "RCMC Registration",
        "APEDA Registration",
        "BIS Registration",
        "FCRA Registration",
        "DDT DSP ISP LICENSE",
        "Startup India Registration",
        "12A And 80G Registration",
        "Only 80G Registration",
      ],
    },
    "cover-letters": {
      title: "Professional Cover Letter Templates",
      tags: [
        "Entry Level Cover Letter",
        "Professional Cover Letter",
        "Creative Cover Letter",
        "Career Change Cover Letter",
        "Internal Position Cover Letter",
        "Academic Cover Letter",
        "Executive Cover Letter",
        "Modern Cover Letter",
        "Federal Cover Letter",
        "Internship Cover Letter",
        "Teaching Cover Letter",
        "Nursing Cover Letter",
        "IT Cover Letter",
        "Sales Cover Letter",
        "Engineering Cover Letter",
        "Legal Cover Letter",
      ],
    },
    "cv-samples": {
      title: "CV Samples By Industry",
      tags: [
        "Academic CV",
        "Research CV",
        "Medical CV",
        "Scientific CV",
        "Professor CV",
        "Graduate CV",
        "International CV",
        "Postdoctoral CV",
        "Fellowship CV",
        "PhD CV",
        "Lecturer CV",
        "Researcher CV",
        "Scholarship CV",
        "Student CV",
        "Technical CV",
        "Industry CV",
        "Professional CV",
        "Executive CV",
      ],
    },
  };

  function updateContent(tabName) {
    const content = tabContents[tabName];
    contentArea.innerHTML = `
    <h3>${content.title}</h3>
    <div class="service-tags">
      ${content.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;

    // Reattach click handlers to new tags
    document.querySelectorAll(".tag").forEach((tag) => {
      tag.addEventListener("click", () => {
        console.log(`Selected: ${tag.textContent}`);
      });
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      // Update content based on selected tab
      const tabName = btn.dataset.tab;
      updateContent(tabName);
    });
  });
});

// footer
// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Newsletter form submission
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log("Subscribed:", email);
    this.reset();
    alert("Thank you for subscribing!");
  });


  // FAQ Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          const isActive = question.classList.contains('active');

          // Close all other answers
          faqQuestions.forEach(q => {
              q.classList.remove('active');
              q.nextElementSibling.classList.remove('active');
          });

          // Toggle current answer
          if (!isActive) {
              question.classList.add('active');
              answer.classList.add('active');
          }
      });
  });

  // Email Form Submission
  const emailForm = document.querySelector('.email-signup');
  emailForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailForm.querySelector('input[type="email"]').value;
      // Handle email submission
      console.log('Email submitted:', email);
      // Here you would typically send this to your backend
      window.location.href = '/newsletter'; // Redirect to newsletter page
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Handle form submission
      console.log('Form submitted:', data);
      // Here you would typically send this to your backend
      window.location.href = '/newsletter'; // Redirect to newsletter page
  });

  // Dropdown functionality for business and revenue type
  const typeSelect = document.querySelector('.type-select');
  const businessTypeDropdown = document.querySelector('.business-type-dropdown');
  const revenueTypeDropdown = document.querySelector('.revenue-type-dropdown');
  const selectedBusinessType = document.querySelector('.selected-business-type');
  const selectedRevenueType = document.querySelector('.selected-revenue-type');

  // Toggle dropdowns
  typeSelect?.addEventListener('click', (e) => {
      const clickedElement = e.target;
      const isBusinessType = clickedElement.closest('.selected-business-type');
      const isRevenueType = clickedElement.closest('.selected-revenue-type');

      if (isBusinessType) {
          businessTypeDropdown?.classList.toggle('active');
          revenueTypeDropdown?.classList.remove('active');
      } else if (isRevenueType) {
          revenueTypeDropdown?.classList.toggle('active');
          businessTypeDropdown?.classList.remove('active');
      }

      typeSelect.classList.toggle('active');
  });

  // Handle business type selection
  document.querySelectorAll('.business-type-dropdown .dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
          const value = item.getAttribute('data-value');
          if (selectedBusinessType && value) {
              selectedBusinessType.textContent = value;
              businessTypeDropdown?.classList.remove('active');
              typeSelect?.classList.remove('active');
          }
      });
  });

  // Handle revenue type selection
  document.querySelectorAll('.revenue-type-dropdown .dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
          const value = item.getAttribute('data-value');
          if (selectedRevenueType && value) {
              selectedRevenueType.textContent = value;
              revenueTypeDropdown?.classList.remove('active');
              typeSelect?.classList.remove('active');
          }
      });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest('.type-select-container')) {
          businessTypeDropdown?.classList.remove('active');
          revenueTypeDropdown?.classList.remove('active');
          typeSelect?.classList.remove('active');
      }
});

// DOM Elements
const helpButton = document.getElementById('helpButton');
const helpMenu = document.getElementById('helpMenu');
const closeHelp = document.getElementById('closeHelp');
const chatWidget = document.getElementById('chatWidget');
const startChat = document.getElementById('startChat');
const closeChat = document.getElementById('closeChat');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');
const faqsModal = document.getElementById('faqsModal');
const showFaqs = document.getElementById('showFaqs');
const closeFaqs = document.getElementById('closeFaqs');
const knowledgeModal = document.getElementById('knowledgeModal');
const showKnowledge = document.getElementById('showKnowledge');
const closeKnowledge = document.getElementById('closeKnowledge');

// Help Menu Toggle
helpButton.addEventListener('click', () => {
    helpMenu.classList.toggle('active');
    // Close other widgets if open
    chatWidget.classList.remove('active');
    faqsModal.classList.remove('active');
    knowledgeModal.classList.remove('active');
});

closeHelp.addEventListener('click', () => {
    helpMenu.classList.remove('active');
});

// Chat Widget
startChat.addEventListener('click', () => {
    chatWidget.classList.add('active');
    helpMenu.classList.remove('active');
});

closeChat.addEventListener('click', () => {
    chatWidget.classList.remove('active');
});

// Chat Functionality
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'support'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendMessage.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        
        // Simulate support response
        setTimeout(() => {
            addMessage("Thank you for your message. Our support team will respond shortly.");
        }, 1000);
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// FAQs Modal
showFaqs.addEventListener('click', () => {
    faqsModal.classList.add('active');
    helpMenu.classList.remove('active');
});

closeFaqs.addEventListener('click', () => {
    faqsModal.classList.remove('active');
});

// Knowledge Base Modal
showKnowledge.addEventListener('click', () => {
    knowledgeModal.classList.add('active');
    helpMenu.classList.remove('active');
});

closeKnowledge.addEventListener('click', () => {
    knowledgeModal.classList.remove('active');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === faqsModal) {
        faqsModal.classList.remove('active');
    }
    if (e.target === knowledgeModal) {
        knowledgeModal.classList.remove('active');
    }
});

// Prevent closing when clicking inside modal content
document.querySelectorAll('.modal-content').forEach(modal => {
    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
      window.addEventListener("scroll", function () {
        let navbar = document.querySelector("#navbar_top");
        if (window.scrollY > 50) {
          // Adjust 50px as needed
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for navigation
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            const section = document.getElementById(sectionId);

            if (section) {
              const navHeight =
                document.querySelector(".sticky-nav").offsetHeight;
              const sectionTop = section.offsetTop - navHeight;

              window.scrollTo({
                top: sectionTop,
                behavior: "smooth",
              });
            }
          });
        });

        // Active section highlighting
        const sections = document.querySelectorAll(".content-section");
        const navHeight = document.querySelector(".sticky-nav").offsetHeight;

        function setActiveSection() {
          const scrollPosition = window.scrollY + navHeight + 100;

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("data-section") === sectionId) {
                  link.classList.add("active");
                }
              });
            }
          });
        }

        // Update active section on scroll
        window.addEventListener("scroll", setActiveSection);

        // Set initial active section
        setActiveSection();
      });

