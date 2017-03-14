import $ from 'jquery'
import inView from 'in-view'
import { pinupMap, mapHasBeenPinned } from './google-map'
import { hideHotSpot, showHotSpot } from './intro-animation'
export function sectionsInView() {
    let sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'gmap', 'more']
    let $links = $("header .nav a");

    _.each(sections, section => {
        // inView.threshold(0.2);
        
        inView.offset({
            top: 120,
            bottom: 150,
        });
        inView(`#${section}`).on('enter', el => {
            console.log("view > ", section, " :: ", $(`#${section}`).height());
            if (section!='top' && $(window).width()>1024) {
                showHotSpot();
            }
            if (section!='vidSlider') {
                if (section=='gmap') {
                    console.log('google map in view');
                    if (!mapHasBeenPinned) {
                        pinupMap();
                    }
                } else {
                    $links.removeClass('active')
                    $links.filter(`[href$=${section}]`).addClass('active');
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