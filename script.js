let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let secondCount = document.getElementById('secondCount')


// Delate Button

const delateBtn1 = document.getElementById('delate-btn1')
delateBtn1.addEventListener('click', function () {
    delateBtn1.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn2 = document.getElementById('delate-btn2')
delateBtn2.addEventListener('click', function () {
    delateBtn2.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn3 = document.getElementById('delate-btn3')
delateBtn3.addEventListener('click', function () {
    delateBtn3.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn4 = document.getElementById('delate-btn4')
delateBtn4.addEventListener('click', function () {
    delateBtn4.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn5 = document.getElementById('delate-btn5')
delateBtn5.addEventListener('click', function () {
    delateBtn5.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn6 = document.getElementById('delate-btn6')
delateBtn6.addEventListener('click', function () {
    delateBtn6.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn7 = document.getElementById('delate-btn7')
delateBtn7.addEventListener('click', function () {
    delateBtn7.parentNode.parentNode.remove();
    calculateCount();
})
const delateBtn8 = document.getElementById('delate-btn8')
delateBtn8.addEventListener('click', function () {
    delateBtn8.parentNode.parentNode.remove();
    calculateCount();
})

// const delateBtn = document.getElementsByClassName('delate-btn');
// delateBtn.addEventListener("click", function (event) {
//     const delate = this.parentNode.parentNode.classList.add('hidden');
// calculateCount();
// delate.remove();
//})




const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


let allJobsSection = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filteredSection')


function calculateCount() {
    total.innerText = allJobsSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
    //secondCount
    secondCount.innerText = allJobsSection.children.length;

    if (allJobsSection.children.length === 0 && currentStatus === 'all-filter-btn') {
        allJobsSection.innerHTML = `
        <div class="text-center flex flex-col justify-center align-middle py-60">
        <div class="flex justify-center">
        <img class="" src="./img/jobs.png">
        </div>
        <p class="text-2xl text-[#002C5C]">No jobs available</p>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;
    }
}

calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')


    // After Click
    const selected = document.getElementById(id)
    currentStatus = id

    selected.classList.add('bg-[#1A77F2]', 'text-white')

    if (id == 'interview-filter-btn') {
        allJobsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allJobsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allJobsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderReject();
    }

}


mainContainer.addEventListener('click', function (event) {

    console.log(event.target.classList.contains('interview-btn'))



    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const cardTitle = parentNode.querySelector('.cardTitle').innerText
        const positionName = parentNode.querySelector('.positionName').innerText
        const jobDes = parentNode.querySelector('.jobDes').innerText
        const staTus = parentNode.querySelector('.staTus').innerText
        const nodes = parentNode.querySelector('.nodes').innerText

        // Status: INTERVIEW
        parentNode.querySelector('.staTus').innerText = "INTERVIEW"
        parentNode.querySelector('.staTus').classList.add('badge-accent')
        parentNode.querySelector('.staTus').classList.add('text-white')
        parentNode.querySelector('.staTus').classList.remove('bg-gray-300')
        parentNode.querySelector('.staTus').classList.remove('badge-error')

        const cardInfo = {
            cardTitle,
            positionName,
            jobDes,
            staTus: 'INTERVIEW',
            nodes

        }

        const CardExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle)


        if (!CardExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.cardTitle != cardInfo.cardTitle)

        if (currentStatus == 'rejected-filter-btn') {
            renderReject()
        }

        // renderInterview()
        calculateCount()
    } else if (event.target.classList.contains('reject-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const cardTitle = parentNode.querySelector('.cardTitle').innerText
        const positionName = parentNode.querySelector('.positionName').innerText
        const jobDes = parentNode.querySelector('.jobDes').innerText
        const staTus = parentNode.querySelector('.staTus').innerText
        const nodes = parentNode.querySelector('.nodes').innerText

        // Status: REJECTED
        parentNode.querySelector('.staTus').innerText = "REJECTED"
        parentNode.querySelector('.staTus').classList.add('badge-error')
        parentNode.querySelector('.staTus').classList.add('text-white')
        parentNode.querySelector('.staTus').classList.remove('bg-gray-300')

        const cardInfo = {
            cardTitle,
            positionName,
            jobDes,
            staTus: 'REJECTED',
            nodes

        }

        const CardExist = rejectedList.find(item => item.cardTitle == cardInfo.cardTitle)


        if (!CardExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.cardTitle != cardInfo.cardTitle)

        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }

        calculateCount()
    }

})


function renderInterview() {

    if (interviewList.length === 0) {
        filteredSection.innerHTML = `
        <div class="text-center flex flex-col justify-center align-middle py-60">
        <div class="flex justify-center">
        <img class="" src="./img/jobs.png">
        </div>
        <p class="text-2xl text-[#002C5C]">No jobs available</p>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;
        return;
    }

    filteredSection.innerHTML = ''


    for (let interview of interviewList) {
        console.log(interview)

        let div = document.createElement('div')
        div.className = 'bg-white flex justify-between p-3 rounded-2xl'

        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <h1 class="cardTitle text-xl text-[#002C5C] font-semibold">${interview.cardTitle}</h1>
                        <p class="positionName">${interview.positionName}</p>
                        <p class="jobDes">${interview.jobDes}}</p>
                    </div>
                    <!-- part 2 -->
                    <div>
                        <p class="staTus badge badge-accent text-white">${interview.staTus}</p>
                        <p class="nodes">${interview.nodes}</p>
                    </div>
                    <div class=" flex gap-3">
                        <button class="interview-btn btn btn-outline btn-accent py-4">INTERVIEW</button><button
                            class="reject-btn btn btn-outline btn-error py-4">REJECTED</button>
                    </div>

                </div>
                <!-- main part-2 -->
                <div>
                    <button id="delate-btn" class="btn rounded-full btn-outline"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}

function renderReject() {

    if (rejectedList.length === 0) {
        filteredSection.innerHTML = `
        <div class="text-center flex flex-col justify-center align-middle py-60">
        <div class="flex justify-center">
        <img class="" src="./img/jobs.png">
        </div>
        <p class="text-2xl text-[#002C5C]">No jobs available</p>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;
        return;
    }

    filteredSection.innerHTML = ''


    for (let reject of rejectedList) {
        console.log(interview)

        let div = document.createElement('div')
        div.className = 'bg-white flex justify-between p-3 rounded-2xl'

        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <h1 class="cardTitle text-xl text-[#002C5C] font-semibold">${reject.cardTitle}</h1>
                        <p class="positionName">${reject.positionName}</p>
                        <p class="jobDes">${reject.jobDes}</p>
                    </div>
                    <!-- part 2 -->
                    <div>
                        <p class="staTus badge badge-error text-white">${reject.staTus}</p>
                        <p class="nodes">${reject.nodes}</p>
                    </div>
                    <div class=" flex gap-3">
                        <button class="interview-btn btn btn-outline btn-accent py-4">INTERVIEW</button><button
                            class="reject-btn btn btn btn-outline btn-error py-4">REJECTED</button>
                    </div>

                </div>
                <!-- main part-2 -->
                <div>
                    <button id="delate-btn" class="btn rounded-full btn-outline"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}