const accessKey ="p5rZTff2dPDHp3fkk25M-zYdkIx-nM2na0NSIcSkHYQ "
const serachForm = document.getElementById("search-form");
const serachBox = document.getElementById("search-box");
const serachResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");



let keyword= '';
let page=1;

async function searchImages(){
    keyword = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    if(page ===1){
        serachResult.innerHTML = ''; 
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const ImageLink = document.createElement('a');
        ImageLink.href = result.links.html;
        ImageLink.target ="_blank";
        ImageLink.appendChild(image);
        serachResult.appendChild(ImageLink);
    })
  showMore.style.display="block"
}
serachForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1
    searchImages();
})

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})