const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagories = data.data;
    const catagoriesContainer = document.getElementById('catagories-container');
    catagories.forEach(category => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML=`
        <button onclick="handleVideosLoader('${category.category_id}')" class="text-base text-[#252525B2] px-2 md:px-8 rounded-lg md:text-2xl focus:bg-[#FF1F3D] hover:bg-[#FF1F3D] focus:text-white">
        ${category?.category}</button> 
        `
        catagoriesContainer.appendChild(div);

        
    });
    
};
 const handleVideosLoader = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const videos = data.data;
    const imgDiv = document.getElementById('img-div');
    // console.log(videos);
    if(videos.length === 0){
        imgDiv.classList.remove('hidden');
    }else{
        imgDiv.classList.add('hidden');
    }
    const videosContainer = document.getElementById('videos-container');
    videosContainer.textContent = '';
    videos?.forEach(video => {
        if(video?.others?.views !== null){
            
        }
        let sec = video?.others?.posted_date;
        let hour = parseInt(sec/3600);
        let min = parseInt((sec%3600)/60);
        // console.log(video);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure class=" w-full h-52 mx-auto relative">
            <img class ="w-full" src="${video?.thumbnail?video?.thumbnail:'no data available'}" alt="image loading" />
            ${video?.others?.posted_date?`<div class=" absolute badge badge-neutral bottom-2 right-2">${hour}hours ${min}minutes ago</div>`:"" }
            </span>
        </figure>
        <div class="card-body flex flex-row items-center gap-5">
            <div>
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
            </div>
        </div>
        <p class="mx-20 py-4 text-[#171717B2] font-medium">${video?.others?.views} ${"views"}</p>
        </div>
        
          
      </div>
        
        `
        videosContainer.appendChild(div)

        
    });
 }
handleVideosLoader("1000");
handleLoadData();
const handleSort = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos = data.data;

    const viewCompare = (videos1,videos2)=>{
        const viewsA = parseInt(videos1?.others?.views);
        const viewsB = parseInt(videos2?.others?.views);
        return viewsB - viewsA;
    }
    videos.sort(viewCompare)
      const videosContainer =document.getElementById('videos-container');
      videosContainer.textContent =" ";
   
    videos.forEach(video=>{
        let sec = video?.others?.posted_date;
        let hour = parseInt(sec/3600);
        let min = parseInt((sec%3600)/60);
        // const viewsData= parseFloat(video?.others?.views);

        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card bg-base-100 shadow-xl">
        <figure class=" w-full h-52 mx-auto relative">
            <img class ="w-full" src="${video?.thumbnail?video?.thumbnail:'no data available'}" alt="image loading" />
            ${video?.others?.posted_date?`<div class=" absolute badge badge-neutral bottom-2 right-2">${hour}hours ${min}minutes ago</div>`:""}
            </span>
        </figure>
        <div class="card-body flex flex-row items-center gap-5">
            <div>
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
            </div>
        </div>
        <p class="mx-20 py-4 text-[#171717B2] font-medium">${video?.others?.views} ${"views"}</p>
        </div>
        
          
      </div>
        `
        videosContainer.appendChild(div);
    })

};


    

// blog page function
function blogsPage(){
    window.location.href ='blog.html';
}


  













