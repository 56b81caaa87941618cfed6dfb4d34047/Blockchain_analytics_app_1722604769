/* Summary: Contains a section with the following components:
1. Particles animation: A canvas element for displaying a particle animation in the background.
2. Illustration: An SVG illustration with a gradient background and various filters applied.
3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
*/

Vue.component("purple_hero_component_1722604772", {
    template: `
    <section id="hero-section-container" class="bg-gradient-to-br from-pink-400 to-purple-600">
    <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg">
        <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
            <!-- Hero content -->
            <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative; z-index: 1">
                <div id="announcement-text" class="mb-6" data-aos="fade-down">
                    <div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md before:bg-pink-300 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-full">
                        <a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow text-white hover:text-pink-200 before:bg-purple-500/50" 
                           href="#0" 
                           style="background: linear-gradient(theme(colors.pink.400), theme(colors.purple.600)) padding-box, linear-gradient(theme(colors.pink.300), theme(colors.purple.400) 75%, theme(colors.transparent) 100%) border-box;">
                            <span id="announcement-link-text" class="relative inline-flex items-center">
                                Introducing our cutting-edge blockchain analysis platform! 
                                <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-200">-&gt;</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="flex" id="hero-text-container">
                    <h1 id="hero-text" class="h1 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-white to-purple-200 pb-4" data-aos="fade-down">Gain Unparalleled Insights into Blockchain Data</h1>
                </div>
                <div class="flex" id="sub-hero-text-container">
                    <p id="sub-hero-text" class="flex-1 text-lg mb-8 text-white" data-aos="fade-down" data-aos-delay="200">Our powerful analytics engine uncovers valuable trends and patterns from the latest blockchain information, giving you a competitive edge.</p>
                </div>
                <div id="buttons-container" class="flex justify-center space-x-4 mt-8">
                    <div id="get-started-button-container">
                        <a id="get-started-button" 
                           class="flex items-center justify-center px-6 py-3 text-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-pink-500 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50" 
                           href="#0">
                            Get Started 
                            <span id="get-started-arrow" class="ml-2 transform transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">→</span>
                        </a>
                    </div>
                    <div id="docs-button-container">
                        <a id="docs-button" class="flex items-center justify-center px-6 py-3 text-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-purple-500 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50" href="#0">
                            <svg id="docs-icon" class="shrink-0 mr-3 text-pink-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                            </svg>
                            <span id="docs-button-text">Read the docs</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    data() {
        return {
            expanded: false,
            tab: null
        };
    },
});