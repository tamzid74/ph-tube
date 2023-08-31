const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagories = data.data;
    const catagoriesContainer = document.getElementById('catagories-container');
    catagories.forEach(category => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML=`
            <button onclick="handleVideosLoader('${category.category_id}')" class="text-base text-[#252525B2] px-2 md:px-8 rounded-lg md:text-2xl focus:bg-[#FF1F3D] focus:text-white">${category?.category}</button> 
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
    videos.forEach(video => {
        console.log(video);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure class=" w-full h-52 mx-auto"><img src="${video?.thumbnail?video?.thumbnail:'no data available'}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
        
          </div>
        </div>
      </div>
        
        `
        videosContainer.appendChild(div)


    });
 }

handleLoadData()

