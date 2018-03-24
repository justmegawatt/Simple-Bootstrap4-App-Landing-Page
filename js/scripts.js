function expandSections() {
    let windowHeight = $(window).height();
    let sectionHeight = windowHeight + 'px';
    $('.section').css('min-height', sectionHeight);
}
expandSections();

function moveDownloadSectionDown() {
    let windowHeight = $(window).height() / 4;
    $('#download-content').css('paddingTop', windowHeight);
}
moveDownloadSectionDown();

// function moveHomeContainerDown() {
//     let headerHeight = $('nav').height();
//     $('#home-container').css('paddingTop', headerHeight + 30);
// }
// moveHomeContainerDown();