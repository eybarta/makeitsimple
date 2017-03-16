import $ from 'jquery'
// import inView from 'in-view'
import { pinupMap, mapHasBeenPinned } from './google-map'
import { hideHotSpot, showHotSpot } from './intro-animation'
export function sectionsInView() {
    let interval = 0,
        sectionInView = 'top',
        viewport = {
            height:$(window).height(),
            top: $(window).scrollTop(),
            bottom: $(window).scrollTop() + $(window).height(),
            mid: $(window).scrollTop() + ($(window).height()/2)
        };

    let sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'gmap', 'more']
    let $links = $("header .nav a");
    let sectionsData = _.map(sections, section => {
        return {
            name: section,
            top: $(`#${section}`).offset().top,
            bottom: $(`#${section}`).offset().top+$(`#${section}`).outerHeight(true)
        }
    })
    interval = setInterval(function() {
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + viewport.height;
        viewport.mid = viewport.top + (viewport.height/2);
        
        sectionInView = _.find(sectionsData, section => {
            return section.bottom>viewport.mid && section.top<viewport.mid
        })
        sectionInView = sectionInView || _.last(sectionsData);
         if (sectionInView.name!='top' && $(window).width()>1024) {
            showHotSpot();
        }
        if (sectionInView.name!='vidSlider') {
            if (sectionInView.name=='gmap') {
                if (!mapHasBeenPinned) {
                    pinupMap();
                }
            } else {
                $links.removeClass('active')
                $links.filter(`[href$=${sectionInView.name}]`).addClass('active');
            }
        }
        else {
            // Restart video animation slider.
            var event = new CustomEvent('inview');
            var el = document.getElementById('vidSlider');
            el.dispatchEvent(event)
        }
    }, 400)
}