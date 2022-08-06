development.forEach(function(value){
    $('.development-carousel').append(`
    <div class="protfolio-card">
        <img src="${value.img}" alt="" />
        <div class="p-3">
            <h4>${value.title}</h4>
                <p>${value.desc}</p>
            <a href="${value.url}">${value.urltext}</a>
        </div>
    </div>
    `)
 });

design.forEach(function(value){
    $('.design-carousel').append(`
    <div class="protfolio-card">
        <img src="${value.img}" alt="" />
        <div class="p-3">
            <h4>${value.title}</h4>
                <p>${value.desc}</p>
            <a href="${value.url}">${value.urltext}</a>
        </div>
    </div>
    `)
});

$('.owl-carousel').owlCarousel({
    center: true,
    items:1.2,
    loop:true,
    margin:16,
    
})
