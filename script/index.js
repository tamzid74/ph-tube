const handleLoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    console.log(categories);
}
handleLoadData()