/**
 * Debouncing is a technique used to limit the number of times a function is called during a given period. It is commonly used in situations
 *  where events are generated at a high rate and processing each event can take some time.
 *  For example, if you have a search field on a web page and attach a "keyup" event to detect each time the user types a key, this can generate
 *  a large number of calls to your search function. If you have a large database or need to make network calls to retrieve data, this can 
 *  significantly slow down your application.
 * 
 * Debouncing solves this problem by limiting the number of times the search function is called. 
 * Instead of calling the function on every "keyup" event, debouncing allows multiple events to be grouped into a 
 * single function call. For example, if you set a 500ms delay, the search function will only be called 500ms 
 * after the user stops typing. If the user continues typing during this period, the delay will be reset, so the function 
 * will only be called once they have stopped typing for 500ms.
 * 
 * In summary, the debouncing technique limits the number of times a function is called during a given period, which can help improve 
 * performance and avoid latency issues in applications that handle events at a high rate.
 */

let debounceTriggered = false;

//Will check if button has been pressed less than 500ms ago
function debouncedAction(action){
    if(!debounceTriggered){
    	debounceTriggered = true;
        action();
        setTimeout(()=>{
        	debounceTriggered = false;
        },500);
    }
}

module.exports = debouncedAction;