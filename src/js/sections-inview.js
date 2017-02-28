import $ from 'jquery'
import inView from 'in-view'

export function sectionsInView() {
    let sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'more']
    let $links = $("header .nav a");

    _.each(sections, section => {
        inView.threshold(0.2);
        
        inView.offset({
            top: 20,
            bottom: 150,
        });
        inView(`#${section}`).on('enter', el => {
            console.log("view > ", section);
            $links.removeClass('active')
            .filter(`[href$=${section}]`).addClass('active');

            if (section=='vidSlider') {
                // Restart video animation slider.
                var event = new Event('inview');
                var el = document.getElementById('vidSlider');
                console.log("trigger inview event from > ", el);
                el.dispatchEvent(event)
            }
        })
    })
}