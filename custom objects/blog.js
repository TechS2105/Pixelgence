const date = new Date();

const formattedData = date.toLocaleString(`default`, {

    month: 'long',
    day: 'numeric',
    year: 'numeric'

})

const blog = [

    {

        id: 1, 
        image: "/images/blog images/img1.jpeg",
        title: "Pixels & Purpose: Crafting Impactful Digital Experiences",
        date: `${ formattedData }`,
        category: 'Creative Design / UI-UX / Branding'

    },

    {

        id: 2, 
        image: "/images/blog images/img2.jpeg",
        title: "The Creative Code: Where Innovation Meets Design",
        date: `${ formattedData }`,
        category: "Web Development / Full Stack / Frontend-Backend"

    }, 

    {

        id: 3, 
        image: "/images/blog images/img3.jpeg",
        title: "Beyond Digital: Future-Driven Strategies for Brands",
        date: `${ formattedData }`,
        category: "Digital Marketing / Strategy / Innovation"

    },

    {

        id: 4,
        image: "/images/blog images/img4.jpeg",
        title: "Inside Pixelgence: Stories of Design, Tech & Transformation",
        date: `${ formattedData }`, 
        category: "Company Culture / Case Studies / Agency Insights"

    }

]

export default blog;