import $ from 'jquery'
// import inView from 'in-view'
import { pinupMap } from './google-map'

let timer = 0, viewport, sectionInView, sections, $links, sectionsData;
export function sectionsInView() {
    
    sectionInView = 'top';
    viewport = {
        height:$(window).height(),
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height(),
        mid: $(window).scrollTop() + ($(window).height()/2)
    };

    sections = ['top', 'why', 'make', 'vidSlider', 'faq', 'gmap', 'more']
    $links = $("header .nav a");
    sectionsData = _.map(sections, section => {
        return {
            name: section,
            top: $(`#${section}`).offset().top,
            bottom: $(`#${section}`).offset().top+$(`#${section}`).outerHeight(true)
        }
    })
   
    window.addEventListener('scroll', checker); 
    checker();
}

function checker() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + viewport.height;
        viewport.mid = viewport.top + (viewport.height/2);
        
        sectionInView = _.find(sectionsData, section => {
            return section.bottom>viewport.mid && section.top<viewport.mid
        })
        sectionInView = sectionInView || _.last(sectionsData);
        if (sectionInView.name!='vidSlider') {
            if (sectionInView.name=='gmap') {
                    pinupMap();
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
    },300)
}