/**
 * Created by adrijaned on 24.4.17.
 */
var current = 0;
var img_sources = ['img/0.jpg', 'img/0.jpg', 'img/1.jpg', 'img/2.png', 'img/3.png', 'img/4.jpeg'];
var paragraph_sources = [
    '<b>Dennis Ritchie</b>',

    '<b>Youth</b> <br />' +
    '- born in Bronxville, NY<br />' +
    '- moved to Summit, New Jersey<br />' +
    '- Harvard University degree from physics and applied mathematics',

    '<b>Bell Labs</b><br />' +
    '- in 1967 Dennis Ritchie started working in Bell Labs<br />' +
    '- coworkers: Ken Thompson and Brian Kernighan<br />' +
    '- until cancellation in 1969 developed Multics - Unix predecessor<br />' +
    '- then started developing Unix on minicomputer PDP-7',

    '<b>Unix</b><br>' +
    '- for Unix, Ritchie with Thompson created programming language "B"<br>' +
    '- "B" was later replaced by "C" completely from Ritchie<br>' +
    '- later, Ritchie himself ported Unix on a lot of different platforms',

    '<b>Later life I</b><br>' +
    '- during 1970s, Ritchie together with James Reeds and Robert Morris created ciphertext-only attack<br>' +
    '- involved in development of "Plan 9" and "Inferno" operating systems<br/>' +
    '- developed programming language Limbo',

    '<b>Later life II</b><br>' +
    '- Dennis Ritchie retired in 2007<br>' +
    '- he died in October 2011<br>' +
    '- he was awarded several awards, including Turing Award and National Medal of Technology'];
function next() {
    if (current < 5) {
        current++;
    }else if (current === 5){
        if (window.confirm('Redirect to Wikipedia?')){
            window.location.href = 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
        }
        else {
            window.alert('You came to the end, dumbass :)')
        }
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