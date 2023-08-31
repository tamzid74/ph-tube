const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagories = data.data;
    const catagoriesContainer = document.getElementById('catagories-container');
    catagories.forEach(category => {
        console.log(category);
        const div = document.createElement('div');
        div.innerHTML=`
            <button onclick="handleVideosLoader('${category.category_id}')" class="text-base text-[#252525B2] px-2 md:px-8 rounded-lg md:text-2xl focus:bg-[#FF1F3D] focus:text-white">${category?.category?category?.category:'<img src="images/Logo.png" alt="">'}</button> 
        `
        catagoriesContainer.appendChild(div);
    });
    
};
 const handleVideosLoader = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const videos = data.data;
    const videosContainer = document.getElementById('videos-container');
    videosContainer.textContent = '';
    videos?.forEach(video => {
        // console.log(video);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure class=" w-full h-52 mx-auto"><img class ="w-full" src="${video?.thumbnail?video?.thumbnail:'no data available'}" alt="image loading" /></figure>
        <div class="card-body flex flex-row items-center gap-5">
            <div class="">
                <img class="w-10 h-10 rounded-full" src="${video?.authors[0]?.profile_picture}" alt="image loading"/>
                
            </div>
            <div>
                <p class=" text-base font-bold">${video?.title}</p>
                <div class="flex items-center gap-3"> 
                <div class="mt-1">
                <p class=" text-[#171717B2] text-base font-bold">${video?.authors[0].profile_name}</p>
                </div>
                <div>
                    ${video?.authors[0]?.verified?'<img src="images/fi_10629607.png" alt="">':""}
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
handleVideosLoader("1000")
handleLoadData()

// blog page function
function blogsPage(){
    window.location.href ='blog.html';
}
