let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let secondCount = document.getElementById('secondCount')


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
}

calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#1A77F2]', 'text-white')


    // After Click
    const selected = document.getElementById(id)
    selected.classList.add('bg-[#1A77F2]', 'text-white')

    if (id == 'interview-filter-btn') {
        allJobsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    } else if (id == 'all-filter-btn') {
        allJobsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
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
        renderInterview()
    }

})


function renderInterview() {
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
                        <p class="positionName">React Native Developer</p>
                        <p class="jobDes">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <!-- part 2 -->
                    <div>
                        <p class="staTus">${interview.staTus}</p>
                        <p class="nodes">Build cross-platform mobile applications using React Native. Work on products
                            used by
                            millions of users worldwide.</p>
                    </div>
                    <div class=" flex gap-3">
                        <button class="btn btn-outline btn-accent">INTERVIEW</button><button
                            class="btn btn-outline btn-error">REJECTED</button>
                    </div>

                </div>
                <!-- main part-2 -->
                <div>
                    <button class="btn rounded-full btn-outline"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}