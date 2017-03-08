import $ from 'jquery'
import inView from 'in-view'
import { pinupMap, mapHasBeenPinned } from './google-map'
export function sectionsInView() {
    let sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'gmap', 'more']
    let $links = $("header .nav a");

    _.each(sections, section => {
        inView.threshold(0.2);
        
        inView.offset({
            top: 20,
            bottom: 150,
        });
        inView(`#${section}`).on('enter', el => {
            console.log("view > ", section);

            if (section!='vidSlider') {
                $links.removeClass('active')
                $links.filter(`[href$=${section}]`).addClass('active');

                if (section=='gmap') {
                    console.log('google map in view');
                    if (!mapHasBeenPinned) {
                        pinupMap();
                    }
                }
            }
            else {
                // Restart video animation slider.
                var event = new CustomEvent('inview');
                var el = document.getElementById('vidSlider');
                el.dispatchEvent(event)
            }
        })
    })
}