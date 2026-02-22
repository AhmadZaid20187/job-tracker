let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let secondCount = document.getElementById('secondCount')

let allJobsSection = document.getElementById('allJobs')

const mainContainer = document.querySelector('main')
console.log(mainContainer)


function calculateCount() {
    total.innerText = allJobsSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
    //secondCount
    secondCount.innerText = allJobsSection.children.length;
}

calculateCount();

function toggleStyle(id) {
    console.log("click", id)
}