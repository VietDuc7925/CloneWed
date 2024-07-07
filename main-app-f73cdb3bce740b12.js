(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[744], {
    8391: function(e, n, t) {
        Promise.resolve().then(t.t.bind(t, 5751, 23)),
        Promise.resolve().then(t.t.bind(t, 6513, 23)),
        Promise.resolve().then(t.t.bind(t, 6130, 23)),
        Promise.resolve().then(t.t.bind(t, 9275, 23)),
        Promise.resolve().then(t.t.bind(t, 5324, 23)),
        Promise.resolve().then(t.t.bind(t, 1343, 23))
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n)
    };
    e.O(0, [971, 23], function() {
        return n(1028),
        n(8391)
    }),
    _N_E = e.O()
}
]);
document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let textElement = document.querySelector('.text-section');
    let imageElement = document.querySelector('.image-section');

    // Scroll right element to the left (make it slower by dividing by a larger number)
    textElement.style.transform = `translateX(${-scrollPosition / 8}px)`;

    // Scroll left element to the right (make it slower by dividing by a larger number)
    imageElement.style.transform = `translateX(${scrollPosition / 8}px)`;
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.querySelector('.scrolling-text');
    scrollingText.addEventListener('mouseover', function() {
        scrollingText.style.animationPlayState = 'paused';
    });
    scrollingText.addEventListener('mouseout', function() {
        scrollingText.style.animationPlayState = 'running';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const valuesContainer = document.querySelector('.values-container');
    const descriptions = document.querySelectorAll('.description-container p');
    const buttons = document.querySelectorAll('.values-container button');
    const valueDescriptions = {
        straightforward: 'Nhi always speaks her mind, not afraid to say things that others may hesitate to say.',
        confidence: 'Nhi\'s demeanor and way of speaking exude confidence and determination, helping her shine.',
        sincerity: 'Nhi is always sincere and genuine, respecting others and never being deceitful for personal gain.',
        strength: 'Nhi derives strength from perseverance, leadership abilities, and guiding large teams. She bravely faces challenges and shares her vulnerabilities.',
        professionalism: 'Nhi\'s knowledge and professional approach to problem-solving are highly systematic, logical, and based on scientific principles.',
    };

    let currentIndex = 2; // Starting with SINCERITY

    function updateContent(index) {
        descriptions.forEach((desc, i) => {
            if (i === index) {
                desc.style.opacity = '1';
                desc.classList.remove('hidden');
            } else {
                desc.style.opacity = '0';
                setTimeout(() => {
                    desc.classList.add('hidden');
                }, 500); // Wait for the opacity transition to finish
            }
        });
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        // Determine the scroll percentage
        const scrollPercentage = scrollPosition / maxScroll;

        // Calculate the new index based on the scroll percentage
        const newIndex = Math.round(scrollPercentage * (buttons.length - 1));

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;

            // Update the transform property to shift the values container
            valuesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update the description content
            updateContent(currentIndex);
        }
    });

    // Initialize the content
    updateContent(currentIndex);
});
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight - windowHeight;
    const scrollPercent = scrollPosition / totalHeight;

    const imageContainer = document.querySelector('.flex.gap-6.items-center.col-span-3');
    const totalScrollWidth = imageContainer.scrollWidth - window.innerWidth;
    const scrollTo = totalScrollWidth * scrollPercent;

    imageContainer.style.transform = `translateX(-${scrollTo}px)`;
});
window.addEventListener('scroll', () => {
    const scrollingImages = document.getElementById('scrolling-images');
    const scrollAmount = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Calculate the percentage scrolled
    const scrollPercent = scrollAmount / maxScroll;

    // Calculate the translation amount
    const translateX = -scrollPercent * 100; // Adjust this factor as needed

    scrollingImages.style.transform = `translateX(${translateX}%) translateZ(0)`;
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.transform = `translateY(${window.scrollY / 10}px)`;
        }
    });
});