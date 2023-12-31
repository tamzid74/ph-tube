let currentID = '1000';
let sortStatus = false;
const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagories = data.data;
    const catagoriesContainer = document.getElementById('catagories-container');
    catagories.forEach(category => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML=`
        <button onclick="handleVideosLoader('${category.category_id}')" class="text-base text-[#252525B2] px-2 md:px-8 rounded-lg md:text-xl focus:bg-[#FF1F3D] hover:bg-[#FF1F3D] focus:text-white">
        ${category?.category}</button> 
        `
        catagoriesContainer.appendChild(div);

        
    });
    
};


 const handleVideosLoader = async (category_id,sortStatus) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await res.json();
    let videos = data.data;
    if(sortStatus){
        const viewCompare = (video1,video2)=>{
        const viewsA = parseInt(video1?.others?.views);
        const viewsB = parseInt(video2?.others?.views);
        return viewsB - viewsA; 

        }
          videos = videos.sort(viewCompare)
    }
    const imgDiv = document.getElementById('img-div');
    if(videos.length === 0){
        imgDiv.classList.remove('hidden');
    }else{
        imgDiv.classList.add('hidden');
    }
    const videosContainer = document.getElementById('videos-container');
    videosContainer.textContent = '';
    videos?.forEach(video => {
    
        let sec = video?.others?.posted_date;
        let hour = parseInt(sec/3600);
        let min = parseInt((sec%3600)/60);
        // console.log(video);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure class=" w-full md:h-48 lg:h-60 rounded-lg relative">
            <img class ="w-full h-auto md:48 md:h-72" src="${video?.thumbnail?video?.thumbnail:'no data available'}" alt="image loading" />
            ${video?.others?.posted_date?`<p class=" absolute bg-[#272727] text-white px-2 py-1 rounded-full bottom-2 right-2">${hour}hours ${min}minutes ago</p>`:"" }
        </figure>
        <div class="card-body flex flex-row gap-5">
            <div class="flex ">
                <img class="w-10 h-10 rounded-full" src="${video?.authors[0]?.profile_picture}" alt="image loading"/>
                
            </div>
            <div>
                <p class=" text-base font-bold">${video?.title}</p>
                <div class="flex items-center gap-3"> 
                <div class="mt-1">
                <p class=" text-[#171717B2] text-base font-bold">${video?.authors[0].profile_name}</p>
                </div>
                <div>
                    ${video?.authors[0]?.verified === true?'<img src="images/fi_10629607.png" alt="">':""}
                </div>
                </div>
                <p class=" py-4 text-[#171717B2] font-medium">${video?.others?.views} ${"views"}</p>
            </div>
        </div>
        
        </div>
        
          
      </div>
        
        `
        videosContainer.appendChild(div)

        
    });

     currentID = category_id;
 }


 document.getElementById('short-button').addEventListener('click', ()=>{
    sortStatus = true;
    handleVideosLoader(currentID , sortStatus);
 })



handleLoadData();
handleVideosLoader('1000');


// blog page function
function blogsPage(){
    window.location.href ='blog.html';
}


  













