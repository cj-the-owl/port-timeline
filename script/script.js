// array of objects

let education = [
    {
        id: 1,
        year: 2023,
        des: "Programming and Web Developement",
        place: "Life Choices Academy", 
    },
    {
        id: 2,
        year: 2019,
        des: "BA in English and Psychology",
        place: "Pearson Institute",
    },
    {
        id: 3,
        year: 2018,
        des: "Bachelors Pass Matric",
        place: "South Peninsula Highschool",
    },
];

let displayEducation = document.querySelector(".education");
education.forEach((data) => {
    displayEducation.innerHTML += `
    <div class="card">
    <h4 class="display-4">${data.year}</h4>
    <div class="card-body">
    <p class="text-black">${data.des} @ <span>${data.place}</span>
    </p>
    </div>
    </div>`;
});
    
   