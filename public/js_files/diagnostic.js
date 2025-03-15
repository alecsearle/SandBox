document.addEventListener("DOMContentLoaded", function () {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        pages: [
          "Overview",
          "Documents",
          "Parts",
          "Youtube",
          "Forums",
          "Mechanics",
        ],
        currentPage: "Overview", // default active page
        rating: "★★★★★",
        description:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        potential_causes:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      };
    },
    methods: {
      setPage(page) {
        console.log("Switching to page:", page);
        this.currentPage = page;
        // Scroll to the section
        const section = document.getElementById(page);
        window.scrollTo({
          top: section.offsetTop - 100, // Adjust the 100px to the height of your navbar
          behavior: "smooth",
        });
      },
      checkActiveSection() {
        const sections = document.querySelectorAll(".content-section");
        const offset = window.scrollY + 100; // Offset to match top of the viewport
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.id;
          if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
            this.currentPage = sectionId;
          }
        });
      },
    },
    mounted() {
      window.addEventListener("scroll", this.checkActiveSection);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.checkActiveSection);
    },
  }).mount("#app");
});
