
let interview = [];
let rejected = [];


let total = document.getElementById('total');
let rejectedCount = document.getElementById('rejectedCount');
let interviewCount = document.getElementById('interviewCount');
let allCart = document.getElementById('allCards');



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

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-black', 'text-white');
     if (id == 'interview-filter-btn') {
         allCart.classList.add('hidden');
         document.getElementById('filtered-section').classList.remove('hidden');
        
     } else if (id == 'all-filter-btn') {
         allCart.classList.remove('hidden');
         document.getElementById('filtered-section').classList.add('hidden');
     } else if (id == 'rejected-filter-btn') {
         allCart.classList.add('hidden');
         document.getElementById('filtered-section').classList.remove('hidden');
      
     }
};

// Total count function
function tolalCount() {
   total.innerText = allCart.children.length;
   rejectedCount.innerText = rejected.length;
   interviewCount.innerText = interview.length;
}       

tolalCount();


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
const cardInfo = {
    companyName,
    position,       
    subject,
    type,
    salary
};
const existingInterview = interview.find(item => item.companyName == cardInfo.companyName);
if (!existingInterview) {
    interview.push(cardInfo);
}
renderInterview();
}

});

// filter scection render function
const filterSection = document.getElementById('filtered-section');
function renderInterview() {
    filterSection.innerHTML = '';   

    for (let interviewMan of interview) {
        console.log(interviewMan);
        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8';
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="company text-4xl">${interviewMan.companyName}</p>
                        <p class="position"> ${interviewMan.position}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="subject ">Remote</p>
                        <p class="type ">Full-time </p>
                        <p class="salary ">$130,000 - $175,000</p>
                    </div>
                    <!-- part 3 -->
                    <div class="change-btn">
                        <button id="hidden-btn" class=" bg-green-100  text-green-700  rounded  px-4 py-2 hidden">Not Applied</button>
                        <p class="para">Build cross-platform mobile applications using React Native. Work on products
                            used by millions of users worldwide.</p>
                    </div>


                    <div class="flex gap-5">
                        <button onclick="addInterview()" id="interview-btn" class="interview-btn text-green-500 rounded border px-4 py-2">Interview</button>
                        <button  class="rejected-btn text-red-500 rounded border px-4 py-2">Rejected</button>
                    </div>
                </div>
         `         
    }};




// Interview button click event
    // let interviewCountS = 0;
    // function addInterview() {
    //    interviewCountS++;
    //     document.getElementById('interviewCount').innerText = interviewCountS;
    // }
   

    // intervier button click  and inteview button add

    const interviewBtn = document.getElementById('interview-btn');

    interviewBtn.addEventListener('click', function (event) {

       if (event.target.classList.contains('interview-btn')) {
       const parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
       const hiddenBtn = parentNode.querySelector('#hidden-btn');
       hiddenBtn.classList.remove('hidden');

       }});















// let interviewList = [];
// let rejectedList = []
// let currentStatus = 'all';

// let total = document.getElementById('total');
// let interviewCount = document.getElementById('interviewCount')
// let rejCount = document.getElementById('rejectedCount');

// const allFilterBtn = document.getElementById('all-filter-btn')
// const interviewFilterBtn = document.getElementById('interview-filter-btn')
// const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

// const allCardSection = document.getElementById('allCards');
// const mainContainer = document.querySelector('main')
// const filterSection = document.getElementById('filtered-section')


// function calculateCount() {
//     total.innerText = allCardSection.children.length //3
//     interviewCount.innerText = interviewList.length
//     rejCount.innerText = rejectedList.length
// }

// calculateCount()

// // step 1;
// function toggleStyle(id) {
//     // adding gray bg for all
//     allFilterBtn.classList.add('bg-gray-300', 'text-black')
//     interviewFilterBtn.classList.add('bg-gray-300', 'text-black')
//     rejectedFilterBtn.classList.add('bg-gray-300', 'text-black')

//     // if any button has black then remove
//     allFilterBtn.classList.remove('bg-black', 'text-white')
//     interviewFilterBtn.classList.remove('bg-black', 'text-white')
//     rejectedFilterBtn.classList.remove('bg-black', 'text-white')

//     // console.log(id);
//     const selected = document.getElementById(id)//this is the button that clicked for filter

//     currentStatus = id
//     console.log(currentStatus);
//     // console.log(selected);

//     // adding black bg for current button
//     selected.classList.remove('bg-gray-300', 'text-black')
//     selected.classList.add('bg-black', 'text-white')
//     // step 1 finish

//     // show and hidden particular section
//     // step 4 start
//     // filtering while clicking the filter button (All, Interview, Rejected)
//     if (id == 'interview-filter-btn') {
//         allCardSection.classList.add('hidden');
//         filterSection.classList.remove('hidden')
//         renderInterview()
//     } else if (id == 'all-filter-btn') {
//         allCardSection.classList.remove('hidden');
//         filterSection.classList.add('hidden')
//     } else if (id == 'rejected-filter-btn') {
//         allCardSection.classList.add('hidden');
//         filterSection.classList.remove('hidden')
//         renderRejected()
//     }
// }


// // step 2 delegation
// mainContainer.addEventListener('click', function (event) {
//     if (event.target.classList.contains('interview-btn')) {
//         const parenNode = event.target.parentNode.parentNode;

//         const companyName = parenNode.querySelector('.company').innerText
//         const position = parenNode.querySelector('.position').innerText
//         const subject = parenNode.querySelector('.subject').innerText
//         const type = parenNode.querySelector('.type').innerText
//         const salary = parenNode.querySelector('.salary').innerText

//         parenNode.querySelector('.status').innerText = 'Interview'

//         const cardInfo = {
//             companyName,
//             position,
//             subject,
//             type,
//             salary
//         }

//         const plantExist = interviewList.find(item => item.companyName == cardInfo.companyName)

//         if (!plantExist) {
//             interviewList.push(cardInfo)
//         }

//         // step 2 finish
//         // removing the plant from struggling list
//         interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

//         // after remove rerender the html
//         if (currentStatus == 'rejected-filter-btn') {
//             renderRejected()
//         }

//          calculateCount()


//     } else if (event.target.classList.contains('rejected-btn')) {
//         const parenNode = event.target.parentNode.parentNode;

//         const companyName = parenNode.querySelector('.company').innerText
//         const position = parenNode.querySelector('.position').innerText
//         const subject = parenNode.querySelector('.subject').innerText
//         const type = parenNode.querySelector('.type').innerText
//         const salary = parenNode.querySelector('.salary').innerText

//         parenNode.querySelector('.status').innerText = 'Rejected'

//         const cardInfo = {
//             companyName,
//             position,
//             subject,
//             type,
//             salary
//         }

//         const plantExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

//         if (!plantExist) {
//             rejectedList.push(cardInfo)
//         }

//         // removing the plant from interview list
//         interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

//         // console.log(thrivingList);

//         // after remove rerender the html
//         if (currentStatus == "interview-filter-btn") {
//             renderInterview();
//         }
//         calculateCount()

//     }

// })

// // step 3  html file create
// function renderInterview() {
//     // make the filterSection empty every time
//     filterSection.innerHTML = ''

//     // crating innerHtml
//     for (let interview of interviewList) {
//         console.log(interview);

//         let div = document.createElement('div');
//         div.className = 'card flex justify-between border p-8'
//         div.innerHTML = `
//          <div class="space-y-6">
//                     <!-- part 1 -->
//                     <div>
//                         <p class="plantName text-4xl">${interview.plantName}</p>
//                         <p class="latinName">Latin Name</p>
//                     </div>

//                     <!-- part 2 -->
//                     <div class="flex gap-2">
//                         <p class="light bg-gray-200 px-5">Bright Indicate</p>
//                         <p class="water bg-gray-200 px-5">weekly</p>
//                     </div>
//                     <!-- part 3 -->
//                      <p class="status">${interview.status}</p>
//                      <p class="notes">New leaf unfurling by the east window.</p>

//                      <div class="flex gap-5">
//                         <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
//                         <button class="rejected-btn bg-red-200 px-4 py-2">Reject</button>
//                      </div>
//                 </div>

//                 <!-- main part 2 -->
//                 <div>
//                     <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
//                 </div>
//         `
//         filterSection.appendChild(div)
//     }
// }

// function renderStruggling() {
//     // make the filterSection empty every time
//     filterSection.innerHTML = ''
//     // crating innerHtml
//     for (let reject of rejectedList) {

//         let div = document.createElement('div');
//         div.className = 'card flex justify-between border p-8'
//         div.innerHTML = `
//          <div class="space-y-6">
//                     <!-- part 1 -->
//                     <div>
//                         <p class="plantName text-4xl">${reject.plantName}</p>
//                         <p class="latinName">Latin Name</p>
//                     </div>

//                     <!-- part 2 -->
//                     <div class="flex gap-2">
//                         <p class="light bg-gray-200 px-5">Bright Indicate</p>
//                         <p class="water bg-gray-200 px-5">weekly</p>
//                     </div>
//                     <!-- part 3 -->
//                      <p class="status">${reject.status}</p>
//                      <p class="notes">New leaf unfurling by the east window.</p>

//                      <div class="flex gap-5">
//                         <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
//                         <button class="rejected-btn bg-red-200 px-4 py-2">Reject</button>
//                      </div>
//                 </div>

//                 <!-- main part 2 -->
//                 <div>
//                     <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
//                 </div>
//         `
//         filterSection.appendChild(div)
//     }
// }

