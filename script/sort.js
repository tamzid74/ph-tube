const sort = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const data1 = data.data;

    data1.forEach(categories => {
    console.log(categories)
    });


}

sort()