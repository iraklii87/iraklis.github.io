
// <div class="protfolio-card">
//     <img src="assets/img/work/1work.png" alt="" />
//     <div class="p-3">
//         <h4>WEB APP PAGE FOR TREVEL COMPANY</h4>
//             <p>Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits ...</p>
//         <a href="https://www.superapp.com/">www.superapp.com</a>
//     </div>
// </div>

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
