export function globalCustomEventPoly() {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}


export function once(node, type, callback) {
    // create event
    node.addEventListener(type, function(e) {
        // remove event
        node.removeEventListener(type, arguments.callee);
        // call handler
        return callback(e);
    });

}