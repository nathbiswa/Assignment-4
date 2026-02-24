
let interview = [];
let rejected = [];
let currentStatus = 'all';
let rejectedStatus = 'all';

// if(interview.length == 0){

// }

let total = document.getElementById('total');
let rejectedCount = document.getElementById('rejectedCount');
let interviewCount = document.getElementById('interviewCount');
let allCart = document.getElementById('allCards');
let jobs = document.getElementById('job');
let interviewUpDown = document.getElementById('interview-upDown');


function toggleStyle(id) {
    // Catch the all button
    const allFilterBtn = document.getElementById('all-filter-btn');
    const interviewFilterBtn = document.getElementById('interview-filter-btn');
    const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

    // adding gray bg for all
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');
    // if any button has black then remove
    allFilterBtn.classList.remove('bg-black', 'text-white');
    interviewFilterBtn.classList.remove('bg-black', 'text-white');
    rejectedFilterBtn.classList.remove('bg-black', 'text-white');

    // selected button add black bg and white text
    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-black', 'text-white');

    if (id == 'interview-filter-btn') {
        allCart.classList.add('hidden');
        // filterSection.classList.remove('hidden');
        renderInterview();

    } else if (id == 'all-filter-btn') {
        allCart.classList.remove('hidden');
        filterSection.innerHTML = '';
    } else if (id == 'rejected-filter-btn') {
        allCart.classList.add('hidden');
        // filterSection.classList.remove('hidden');
        renderRejected();

    }
};



// Total count function
function tolalCount() {
    total.innerText = allCart.children.length;
    jobs.innerText = allCart.children.length;
    interviewUpDown.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
    interviewCount.innerText = interview.length;
}


tolalCount();

// let jobs = document.querySelectorAll('.card');

// function deleteJob(id) {
//     const card = document.getElementById(id);
//     if (card) {
//         card.remove();
//     }
// }


// main container click event delegation

const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const subject = parentNode.querySelector('.subject').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const interviewStatus = parentNode.querySelector('.hidden-btn');
        interviewStatus.innerText = 'Interviewed';
        interviewStatus.classList.remove('hidden');
        const cardInfo = {
            companyName,
            position,
            subject,
            type,
            salary,
            interviewStatus: 'Interviewed'
        };
        const existingInterview = interview.find(item => item.companyName == cardInfo.companyName);

        if (!existingInterview) {
            interview.push(cardInfo);
        }



        rejected = rejected.filter(item => item.companyName !== cardInfo.companyName);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        tolalCount();

    } else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const subject = parentNode.querySelector('.subject').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const rejectedStatus = parentNode.querySelector('.hidden-btn-2');
        // rejectedStatus.innerText = 'Rejected';
        rejectedStatus.classList.remove('hidden');

        const cardInfo = {
            companyName,
            position,
            subject,
            type,
            salary

        };
        const existingRejected = rejected.find(item => item.companyName == cardInfo.companyName);
        if (!existingRejected) {
            rejected.push(cardInfo);

        }

        interview = interview.filter(item => item.companyName !== cardInfo.companyName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        tolalCount();

    }
});



// filter scection render function
const filterSection = document.getElementById('filtered-section');

function renderInterview() {
    filterSection.innerHTML = '';
    if (interview.length == 0) {
        filterSection.className = 'w-full bg-white shadow mx-auto rounded py-10 px-6';
        filterSection.innerHTML = ` <img src="./jobs.png" alt="" class="w-[100px] mx-auto">
                <div class="hidden-text text-center my-4 space-y-2">
                    <h2 class="text-3xl">No jobs available</h2>
                    <p class="text-gray-500">Check back soon for new job opportunities</p>
                </div>`;
        return;
    }
    


    for (let interviewMan of interview) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between shadow p-8';
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="company text-4xl">${interviewMan.companyName}</p>
                        <p class="position"> ${interviewMan.position}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="subject ">${interviewMan.subject}</p>
                        <p class="type ">${interviewMan.type}</p>
                        <p class="salary ">${interviewMan.salary}</p>
                    </div>
                    <!-- part 3 -->
                    <div class="change-btn">
                        <button id="hidden-btn" class=" bg-green-100  text-green-700  rounded  px-4 py-2">Interviewed</button>
                        <p class="para">Build cross-platform mobile applications using React Native. Work on products
                            used by millions of users worldwide.</p>
                    </div>


                    <div class="flex gap-5">
                        <button  id="interview-btn" class="interview-btn text-green-500 rounded border px-4 py-2">Interview</button>
                        <button  class="rejected-btn text-red-500 rounded border px-4 py-2">Rejected</button>
                    </div>
                     <!-- main part 2 -->
               
                </div>
          <div>
                    <button class="btn-delete text-red-600 border rounded-full px-2 py-2 inline-block"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>`
        filterSection.appendChild(div);
    }
};
function renderRejected() {

    filterSection.innerHTML = '';
    if (rejected.length == 0) {
        filterSection.className = 'w-full bg-white shadow mx-auto rounded py-10 px-6';
        filterSection.innerHTML = ` <img src="./jobs.png" alt="" class="w-[100px] mx-auto">
                <div class="hidden-text text-center my-4 space-y-2">
                    <h2 class="text-3xl">No jobs available</h2>
                    <p class="text-gray-500">Check back soon for new job opportunities</p>
                </div>`;
        return;
    
    
    }
    

    for (let rejectedMan of rejected) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between shadow p-8';
        div.innerHTML = `
        <div class="space-y-6 "> 
                    <!-- part 1 -->
                    <div>
                        <p class="company text-4xl">${rejectedMan.companyName}</p>
                        <p class="position"> ${rejectedMan.position}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="subject ">${rejectedMan.subject}</p>
                        <p class="type ">${rejectedMan.type}</p>
                        <p class="salary ">${rejectedMan.salary}</p>
                    </div>
                    <!-- part 3 -->

                    <div class="change-btn">
                        <button id="hidden-btn-2" class=" hidden-btn-2 bg-red-100  text-red-700  rounded  px-4 py-2">Rejected</button>
                        <p class="para">Build cross-platform mobile applications using React Native. Work on products
                            used by millions of users worldwide.</p>
                    </div>

                    <div class="flex gap-5">
                        <button onclick="toggleStyle('interview-filter-btn')" id="interview-btn" class="interview-btn text-green-500 rounded border px-4 py-2">Interview</button>
                        <button onclick="toggleStyle('rejected-filter-btn')" class="rejected-btn text-red-500 rounded border px-4 py-2">Rejected</button>
                    </div>
            </div>

            </div>
        
           <!-- main part 2 -->
                <div>
                    <button class="btn-delete text-red-600 border rounded-full px-2 py-2 inline-block"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div> 

                </div> 
                
                `
        filterSection.appendChild(div);
    }
};



// delete button event delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-delete') || event.target.parentNode.classList.contains('btn-delete')) {
        const card = event.target.closest('.card');
        card.remove();

    }
    tolalCount();
});













