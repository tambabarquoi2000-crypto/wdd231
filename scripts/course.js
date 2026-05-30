
function main() {

    const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
 // Declaring Variables to store filtered array from a bigger array //

const cseCourses = courses.filter(obj => obj.subject == "CSE");

const wddCourses = courses.filter(obj => obj.subject == "WDD");

const myModal = document.querySelector("#course-details");

// output of the array items //

const coursedisplay = document.querySelector("#course-info");
const totalCredits = document.querySelector("#total-credit");

// array navigation buttons //

const allCoursesBtt = document.querySelector("#all")
const cseBtt = document.querySelector("#cse");
const wddBtt = document.querySelector("#wdd");


const courseCardList = document.createElement("div");
courseCardList.classList.add("course-card");

courses.forEach(
    course => {
        const courseCard = createElement("button");
        courseCard.addEventListener("click", 
            () => {
                const courseCodeCont = document.createElement("div");
                const courseTitle = document.createElement("p");
                const credits = document.createElement("p");
                const degrees = document.createElement("p");
                const descrip = document.createElement("p");
                const tech = document.createElement("p");

                const courseCode = document.createElement("h2");
                const closeModalBtt = document.createElement("button");
                
                courseCode.textContent = `${course.subject}${course.number}`;
                closeModalBtt.textContent = "❌";
                closeModalBtt.addEventListener("click", () => myModal.close())
                courseCodeCont.appendChild(courseCode);
                courseCodeCont.appendChild(closeModalBtt);

                courseTitle.textContent = course.title;
                credits.textContent = `${course.credits} credits`;
                degrees.textContent = course.degrees;
                descrip.textContent = course.description;

                let techCoursesTxt = "";

                for(let i=0; i<course.technology.length; i++){

                    console.log(course.technology[i])

                    if(i + 1 < parseInt(course.technology.length)){
                        techCoursesTxt += course.technology[i] + ", "
                    }

                    else {
                        techCoursesTxt += course.technology[i]
                    }

                }

                tech.textContent = `Technology: ${techCoursesTxt}`;

                myModal.textContent = "";

                myModal.appendChild(courseCodeCont);
                myModal.appendChild(courseTitle);
                myModal.appendChild(credits);
                myModal.appendChild(degrees);
                myModal.appendChild(descrip);
                myModal.appendChild(tech);

                myModal.showModal();

                
                
            }
        )
        if (course.completed) {
            courseCard.classList.add("completed")
        }
        courseCard.innerHTML = `${course.subject} ${course.number}`;

        courseCardList.appendChild(courseCard)

        totalCredits.innerHTML = getCourseCredit(courses);
    }
) 

coursedisplay.appendChild(courseCardList);




allCoursesBtt.addEventListener("click", () =>
{
    const courseCardList = createElement("div");
    courseCardList.classList.add("course-card");

    courses.forEach(
        course => {
            const courseCard = createElement("button");
            if (course.completed) {
            courseCard.classList.add("completed")
        }
            courseCard.innerHTML = `${course.subject} ${course.number}`;
            courseCardList.appendChild(courseCard)
        }
    ) 
    
    coursedisplay.innerHTML = "";
    coursedisplay.appendChild(courseCardList);
    totalCredits.innerHTML = getCourseCredit(courses);
}

)


cseBtt.addEventListener("click", () => {
    const csecourseCardList = document.createElement("div");
    csecourseCardList.classList.add("course-card");

    cseCourses.forEach(
        course => {
            const courseCard = createElement("button");
            if (course.completed) {
            courseCard.classList.add("completed")
        }
            courseCard.innerHTML = `${course.subject} ${course.number}`;

            csecourseCardList.appendChild(courseCard);
            totalCredits.innerHTML = getCourseCredit(cseCourses);
        }

        
    )

    coursedisplay.innerHTML = "";
    coursedisplay.appendChild(csecourseCardList)
}
)

wddBtt.addEventListener("click", () => {
    const wddcourseCardList = createElement("div");
    wddcourseCardList.classList.add("course-card");

    wddCourses.forEach(
        course => {
            const courseCard = createElement("button");
            if (course.completed) {
            courseCard.classList.add("completed")
        }
            courseCard.innerHTML = `${course.subject} ${course.number}`;

            wddcourseCardList.appendChild(courseCard);
            totalCredits.innerHTML = getCourseCredit(wddCourses);
        }

        
    )

    coursedisplay.innerHTML = "";
    coursedisplay.appendChild(wddcourseCardList)
}
)





}



function createElement(element){
    return document.createElement(element)
}

function getCourseCredit(arr){
    
    const result = arr.reduce((acc, crr) => {
        return acc + crr.credits;
    }, 0)

    return result;
  
}



main();

