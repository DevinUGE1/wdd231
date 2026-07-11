const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    }
];

const courseContainer = document.querySelector("#course-cards");
const totalCreditsElement = document.querySelector("#total-credits");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `;

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    totalCreditsElement.textContent =
        `The total credits for courses listed above is ${totalCredits}`;
}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        if (filter === "all") {
            displayCourses(courses);
        }
        else {
            const filteredCourses =
                courses.filter(course =>
                    course.subject === filter);

            displayCourses(filteredCourses);
        }

    });

});

displayCourses(courses);