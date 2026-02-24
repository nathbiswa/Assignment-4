let interview = [];
let rejected = [];
let currentStatus = "all-filter-btn";

const total = document.getElementById("total");
const rejectedCount = document.getElementById("rejectedCount");
const interviewCount = document.getElementById("interviewCount");

const allCart = document.getElementById("allCards");
const jobs = document.getElementById("job");
const interviewUpDown = document.getElementById("interview-upDown");

const filterSection = document.getElementById("filtered-section");
const mainContainer = document.querySelector("main");

function toggleStyle(id) {
  const allFilterBtn = document.getElementById("all-filter-btn");
  const interviewFilterBtn = document.getElementById("interview-filter-btn");
  const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

  // reset all to gray
  [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach((btn) => {
    btn.classList.add("bg-gray-300", "text-black");
    btn.classList.remove("bg-black", "text-white");
  });

  // set selected to black
  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");

  if (id === "all-filter-btn") {
    allCart.classList.remove("hidden");
    filterSection.innerHTML = "";
    filterSection.className = "";
  } else if (id === "interview-filter-btn") {
    allCart.classList.add("hidden");
    renderInterview();
  } else if (id === "rejected-filter-btn") {
    allCart.classList.add("hidden");
    renderRejected();
  }

  totalCount();
}

function totalCount() {
  const totalJobs = allCart.children.length;
  total.innerText = totalJobs;
  jobs.innerText = totalJobs;

  interviewUpDown.innerText = interview.length;
  rejectedCount.innerText = rejected.length;
  interviewCount.innerText = interview.length;
}

totalCount();

function getCardInfo(card) {
  return {
    companyName: card.querySelector(".company")?.innerText.trim() || "",
    position: card.querySelector(".position")?.innerText.trim() || "",
    subject: card.querySelector(".subject")?.innerText.trim() || "",
    type: card.querySelector(".type")?.innerText.trim() || "",
    salary: card.querySelector(".salary")?.innerText.trim() || "",
  };
}

function markInterviewUI(card) {
  const interviewStatus = card.querySelector(".hidden-btn");
  const rejectedStatus = card.querySelector(".hidden-btn-2");

  if (interviewStatus) {
    interviewStatus.innerText = "Interviewed";
    interviewStatus.classList.remove("hidden");
  }
  if (rejectedStatus) rejectedStatus.classList.add("hidden");
}

function markRejectedUI(card) {
  const interviewStatus = card.querySelector(".hidden-btn");
  const rejectedStatus = card.querySelector(".hidden-btn-2");

  if (rejectedStatus) rejectedStatus.classList.remove("hidden");
  if (interviewStatus) interviewStatus.classList.add("hidden");
}

// one click handler for everything
mainContainer.addEventListener("click", function (event) {
  const interviewBtn = event.target.closest(".interview-btn");
  const rejectedBtn = event.target.closest(".rejected-btn");
  const deleteBtn = event.target.closest(".btn-delete");

  // delete
  if (deleteBtn) {
    const card = deleteBtn.closest(".card");
    if (!card) return;

    const info = getCardInfo(card);
    interview = interview.filter((i) => i.companyName !== info.companyName);
    rejected = rejected.filter((r) => r.companyName !== info.companyName);

    card.remove();

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
    totalCount();
    return;
  }

  // interview
  if (interviewBtn) {
    const card = interviewBtn.closest(".card");
    if (!card) return;

    const info = getCardInfo(card);
    markInterviewUI(card);

    if (!interview.find((i) => i.companyName === info.companyName)) {
      interview.push({ ...info, interviewStatus: "Interviewed" });
    }
    rejected = rejected.filter((r) => r.companyName !== info.companyName);

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();

    totalCount();
    return;
  }

  // rejected
  if (rejectedBtn) {
    const card = rejectedBtn.closest(".card");
    if (!card) return;

    const info = getCardInfo(card);
    markRejectedUI(card);

    if (!rejected.find((r) => r.companyName === info.companyName)) {
      rejected.push({ ...info, rejectedStatus: "Rejected" });
    }
    interview = interview.filter((i) => i.companyName !== info.companyName);

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();

    totalCount();
    return;
  }
});

function renderEmpty() {
  filterSection.className = "w-full bg-white shadow mx-auto rounded py-10 px-6";
  filterSection.innerHTML = `
    <img src="./jobs.png" alt="" class="w-[100px] mx-auto">
    <div class="text-center my-4 space-y-2">
      <h2 class="text-3xl">No jobs available</h2>
      <p class="text-gray-500">Check back soon for new job opportunities</p>
    </div>
  `;
}

function renderInterview() {
  filterSection.innerHTML = "";
  filterSection.className = "";

  if (interview.length === 0) {
    renderEmpty();
    return;
  }

  interview.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card flex justify-between shadow p-8";

    div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="company md:text-4xl text-xl">${item.companyName}</p>
          <p class="position">${item.position}</p>
        </div>

        <div class="flex gap-2 md:text-2xl text-[12px]">
          <p class="subject">${item.subject}</p>
          <p class="type">${item.type}</p>
          <p class="salary">${item.salary}</p>
        </div>

        <div class="change-btn">
          <button class="hidden-btn bg-green-100 text-green-700 rounded px-4 py-2">Interviewed</button>
          <button class="hidden-btn-2 bg-red-100 text-red-700 rounded px-4 py-2 hidden">Rejected</button>
          <p class="para">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        </div>

        <div class="flex gap-5">
          <button class="interview-btn text-green-500 rounded border px-4 py-2">Interview</button>
          <button class="rejected-btn text-red-500 rounded border px-4 py-2">Rejected</button>
        </div>
      </div>

      <div>
        <button class="btn-delete text-red-600 border rounded-full px-2 py-2 inline-flex items-center justify-center">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

function renderRejected() {
  filterSection.innerHTML = "";
  filterSection.className = "";

  if (rejected.length === 0) {
    renderEmpty();
    return;
  }

  rejected.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card flex justify-between shadow p-8";

    div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="company md:text-4xl text-xl">${item.companyName}</p>
          <p class="position">${item.position}</p>
        </div>

        <div class="flex gap-2 md:text-2xl text-[12px]">
          <p class="subject">${item.subject}</p>
          <p class="type">${item.type}</p>
          <p class="salary">${item.salary}</p>
        </div>

        <div class="change-btn">
          <button class="hidden-btn bg-green-100 text-green-700 rounded px-4 py-2 hidden">Interviewed</button>
          <button class="hidden-btn-2 bg-red-100 text-red-700 rounded px-4 py-2">Rejected</button>
          <p class="para">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        </div>

        <div class="flex gap-5">
          <button class="interview-btn text-green-500 rounded border px-4 py-2">Interview</button>
          <button class="rejected-btn text-red-500 rounded border px-4 py-2">Rejected</button>
        </div>
      </div>

      <div>
        <button class="btn-delete text-red-600 border rounded-full px-2 py-2 inline-flex items-center justify-center">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    filterSection.appendChild(div);
  });
}