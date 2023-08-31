const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const videos = data.data;
    const catagoriesContainer = document.getElementById('catagories-container');
    videos.forEach(video => {
        console.log(video);
        const div = document.createElement('div');
        div.innerHTML=`
            <button class="text-base text-[#252525B2] px-2 md:px-8 rounded-lg md:text-2xl focus:bg-[#FF1F3D] focus:text-white">${video?.category}</button> 
        `
        catagoriesContainer.appendChild(div);
    });
    
};
handleLoadData()

