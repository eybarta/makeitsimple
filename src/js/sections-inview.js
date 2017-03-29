import $ from 'jquery'
// import inView from 'in-view'
import { pinupMap } from './google-map'

let timer = 0, viewportMid, sectionInView, sections, $links;
export function sectionsInView() {
    
    sectionInView = 'top';
    viewportMid = $(window).height()/2;

    sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'gmap', 'more']
    $links = $("header .nav a");
    
    window.removeEventListener('scroll', checker); 
    window.addEventListener('scroll', checker); 
    checker();
}

function checker() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        sectionInView = _.findLast(sections, section => {
            let elementbox = document.getElementById(`${section}`).getBoundingClientRect();
            return elementbox.bottom > viewportMid && elementbox.top < viewportMid
        })
        sectionInView = sectionInView || _.last(sections);
        console.log(" sectionInView >> ", sectionInView );
        
        if (sectionInView!='vidSlider') {
            if (sectionInView=='gmap') {
                    pinupMap();
            } else {
                $links.removeClass('active')
                $links.filter(`[href$=${sectionInView}]`).addClass('active');
            }
        }
        else {
            // Restart video animation slider.
            var event = new CustomEvent('inview');
            var el = document.getElementById('vidSlider');
            el.dispatchEvent(event)
        }
    },200)
}