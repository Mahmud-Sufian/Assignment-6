const loadPhones = () => {
    const inputText = document.getElementById('input-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;

    // reset input field
    document.getElementById('input-field').value = "";

    // fetching data
    fetch(url)
    .then(res => res.json())
    .then(data => viewPhone(data.data))

}
const viewPhone = (phones) => {


    // console.log(phones)
    const phonesContainer = document.getElementById('phones-container');
    document.getElementById('phones-container').textContent = '';
    document.getElementById('singlePhone-details').textContent = '';

    for(const phone of phones){
        // console.log(phone.slug)
        const div = document.createElement('div');
        // div.classList.add('card')
        // div.classList.add('w-25')
        div.classList.add('col-md-4')
        div.innerHTML = ` 
        <div onclick="singlePhone('${phone.slug}')" class="card mt-2" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top"  alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.slug}</p>
                </div>
        </div> 
            `
           
        phonesContainer.appendChild(div);
    }

}

// single phone details
const singlePhone = (id) => { 
    const singleUrl = `https://openapi.programming-hero.com/api/phone/${id}`;
     
    fetch(singleUrl)
    .then(res => res.json())
    .then(data => detailsPhone(data.data))
}

const detailsPhone = (detail) => {
    console.log(detail)
    const singlePhoneContainer = document.getElementById('singlePhone-details');
    document.getElementById('singlePhone-details').textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
                    <div class="card mt-2" style="width: 18rem;">
                            <img src="${detail.image}" class="card-img-top"  alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Brand: ${detail.brand}</h5>
                            <h5 class="card-title">Name: ${detail.name}</h5> 
                            <p class="card-text">Release: ${detail.releaseDate}</p>
                            <p class="card-text">storage: ${detail.mainFeatures.storage}</p>
                        </div>
                    </div> 
    `
    singlePhoneContainer.appendChild(div); 

}

// const spinner = (isLoading) => {
//     if(!isLoading){
//         document.getElementById('spinner-loading').style.classList.add('d-block');
//     }
//     else{
//         // document.getElementById('spinner-loading').style.classList.remove('d-none');
//     }
// }
// spinner(false)