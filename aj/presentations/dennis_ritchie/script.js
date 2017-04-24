/**
 * Created by adrijaned on 24.4.17.
 */
var current = 0;
var img_sources = ['img/0.jpg', 'img/0.jpg'];
var paragraph_sources = [
    '<b>Dennis Ritchie</b>',

    '<b>Youth</b> <br />' +
    '- born in Bronxville, NY<br />' +
    '- moved to Summit, New Jersey<br />' +
    '- Harvard University degree from physics and applied mathematics',

    '<b>Bell Labs</b><br />' +
    '- in 1967 Dennis Ritchie started working in Bell Labs<br />' +
    '- coworkers: Ben Thompson and Brian Kernighan<br />' +
    '- until cancellation in 1969 developed Multics - Unix predecessor<br />' +
    '- then started developing Unix on minicomputer PDP-7',

    '<b>Unix</b><br>' +
    '- for Unix, Ritchie with Thompson created programming language "B"<br>'];
function next() {
    if (current < 15) {
        current++;
    }
    document.getElementById('my_aWeSoMe_image').src = img_sources[current];
    document.getElementById('text_paragraph').innerHTML = paragraph_sources[current];
}
function previous() {
    if (current > 0) {
        current--;
    }
    document.getElementById('my_aWeSoMe_image').src = img_sources[current];
    document.getElementById('text_paragraph').innerHTML = paragraph_sources[current]
}