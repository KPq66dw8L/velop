// create a new Intersection Observer
let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            console.log(entry.isIntersecting);

            // do this when the element enters the viewport
            loadElement(entry.target);
            // stop watching
            observer.unobserve(entry.target);
        }
    });
});
      
function loadElement(element) {
    const src = element.getAttribute('data-src');
    element.src = src;
}

// the element that you want to watch
const ytb_video = document.getElementById('lazy-load');
const g_map = document.getElementById('map-lazy');

// register the element with the observe method
observer.observe(ytb_video);
observer.observe(g_map);
