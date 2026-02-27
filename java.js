const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')
const navJobCount = document.getElementById('nav-job-count')

const allBtn = document.getElementById('all-nav-btn')
const interviewBtn = document.getElementById('interview-nav-btn')
const rejectedBtn = document.getElementById('rejected-nav-btn')

const allCardHeader = document.getElementById('all-card-section');
const mainContainer = document.querySelector('main')

const filterSection = document.getElementById('filter-section')
const noJobContent = document.getElementById('no-job-section')

let interviewList = [];
let rejectedList =[];
let currentStatus = 'all-nav-btn'
navJobCount.innerText = allCardHeader.children.length
totalCount.innerText = allCardHeader.children.length
interviewCount.innerText = interviewList.length
rejectedCount.innerText = rejectedList.length

function toggle(id){
    currentStatus = id;
    
    allBtn.classList.remove('text-white','bg-blue-500')
    interviewBtn.classList.remove('text-white','bg-blue-500')
    rejectedBtn.classList.remove('text-white','bg-blue-500')

    allBtn.classList.add('text-[#64748B]','bg-white')
    interviewBtn.classList.add('text-[#64748B]','bg-white')
    rejectedBtn.classList.add('text-[#64748B]','bg-white')

    const select = document.getElementById(id)
    select.classList.add('text-white','bg-blue-500')
    select.classList.remove('text-[#64748B]','bg-white')

    if(id == 'interview-nav-btn'){
        filterSection.classList.remove('hidden')
        allCardHeader.classList.add('hidden')
        addInterviewCard()
        
        if(interviewList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
        
    }
    else if(id == 'all-nav-btn'){
        filterSection.classList.add('hidden')
        allCardHeader.classList.remove('hidden')
        noJobContent.classList.add('hidden')
        navJobCount.innerText=allCardHeader.children.length;
    }
    else if(id == 'rejected-nav-btn'){
        allCardHeader.classList.add('hidden')
        filterSection.classList.remove('hidden')
         
        addRejectedCard()

        if(rejectedList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
    }
}

mainContainer.addEventListener('click',function(event){

   if(event.target.classList.contains('interview-btn')){
     const parent = event.target.closest('.card');

     const jobTitle = parent.querySelector('.job-title').innerText
     const work = parent.querySelector('.work').innerText 
     const salary = parent.querySelector('.salary').innerText
     const showStatus = parent.querySelector('.show').innerText = 'INTERVIEW'
     const jobDescription = parent.querySelector('.jobdescription').innerText
   
     parent.querySelector('.show').classList.remove('border','border-red-500','bg-red-500')
     parent.querySelector('.show').classList.add('border','border-green-500','bg-green-500')

     const trakingData = { jobTitle, work, salary, showStatus, jobDescription }

     const checkJob = interviewList.find(itm => itm.jobTitle == trakingData.jobTitle);
     if(!checkJob){
        interviewList.push(trakingData);
     }
    
     rejectedList = rejectedList.filter(item => item.jobTitle != trakingData.jobTitle)

     interviewCount.innerText = interviewList.length
     rejectedCount.innerText = rejectedList.length

     if(currentStatus == "interview-nav-btn"){
        addInterviewCard()
        if(interviewList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
     }

     if(currentStatus == "rejected-nav-btn"){
        addRejectedCard()
        if(rejectedList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
     }
   }

   else if(event.target.classList.contains('rejected-btn')){
     const parent = event.target.closest('.card');

     const jobTitle = parent.querySelector('.job-title').innerText
     const work = parent.querySelector('.work').innerText 
     const salary = parent.querySelector('.salary').innerText
     const showStatus = parent.querySelector('.show').innerText = 'REJECTED'
     const jobDescription = parent.querySelector('.jobdescription').innerText

     parent.querySelector('.show').classList.remove('border','border-green-500','bg-green-500')
     parent.querySelector('.show').classList.add('border','border-red-500','bg-red-500')

     const trakingData = { jobTitle, work, salary, showStatus, jobDescription }

     const checkJob = rejectedList.find(itm => itm.jobTitle == trakingData.jobTitle);
     if(!checkJob){
        rejectedList.push(trakingData);
     }

     interviewList = interviewList.filter(item => item.jobTitle != trakingData.jobTitle)

     interviewCount.innerText = interviewList.length
     rejectedCount.innerText = rejectedList.length

     if(currentStatus == "interview-nav-btn"){
        addInterviewCard()
        if(interviewList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
     }

     if(currentStatus == "rejected-nav-btn"){
        addRejectedCard()
        if(rejectedList.length === 0){
            noJobContent.classList.remove('hidden')
        }else{
            noJobContent.classList.add('hidden')
        }
     }
   }

   else if(event.target.classList.contains('delet-btn')){
        const parent = event.target.closest('.card');
        parent.remove()

        totalCount.innerText = allCardHeader.children.length
        navJobCount.innerText = allCardHeader.children.length
        interviewCount.innerText = interviewList.length
        rejectedCount.innerText = rejectedList.length
   }
});

function addInterviewCard(){
    filterSection.innerHTML=""
    filterSection.appendChild(noJobContent);
    
    navJobCount.innerHTML=` <p class="text-[#64748B] text-[16px]"> <span id=" "> ${interviewList.length} </span> of 8 </p>`
    for(let job of interviewList){
        let div = document.createElement('div');
        div.className = 'card bg-white rounded-xl p-6 border-1 border-gray-200 w-[1110px] m-auto mb-5'
        div.innerHTML = `
         <h1 class="job-title text-[#002C5C] text-[18px] font-semibold">${job.jobTitle}</h1>
         <p class="work text-[#64748B] mb-5">${job.work}</p>
         <p class="salary text-[#64748B] mb-5">${job.salary}</p>
         <div class="w-[120px] mb-2">
            <p class='show'>${job.showStatus}</p>
         </div>
         <p class="jobdescription mb-5">${job.jobDescription}</p>
         <div class="flex gap-3">
            <button class="interview-btn btn text-[#10B981] border-[#10B981] hover:bg-green-500 hover:text-white">interview</button>
            <button class="rejected-btn btn text-[#EF4444] border-[#EF4444] hover:bg-red-500 hover:text-white">Rejected</button>
         </div>
         <div class="absolute top-4 right-5">
            <button class="delet-btn btn btn-primary">delet</button>
         </div>
        `
        filterSection.appendChild(div)
    }
}

function addRejectedCard(){
    filterSection.innerHTML=""
     filterSection.appendChild(noJobContent)
 
     navJobCount.innerHTML=` <p id="nav-counter" class="text-[#64748B] text-[16px]"> <span id=" ">${rejectedList.length}</span> of 8 </p>` 
    for(let job of rejectedList){
        let div = document.createElement('div');
        div.className = 'card bg-white rounded-xl p-6 border-1 border-gray-200 w-[1110px] m-auto mb-5'
        div.innerHTML = `
         <h1 class="job-title text-[#002C5C] text-[18px] font-semibold">${job.jobTitle}</h1>
         <p class="work text-[#64748B] mb-5">${job.work}</p>
         <p class="salary text-[#64748B] mb-5">${job.salary}</p>
         <div class="w-[120px] mb-2">
            <p class='show'>${job.showStatus}</p>
         </div>
         <p class="jobdescription mb-5">${job.jobDescription}</p>
         <div class="flex gap-3">
            <button class="interview-btn btn text-[#10B981] border-[#10B981] hover:bg-green-500 hover:text-white">interview</button>
            <button class="rejected-btn btn text-[#EF4444] border-[#EF4444] hover:bg-red-500 hover:text-white">Rejected</button>
         </div>
         <div class="absolute top-4 right-5">
            <button class="delet-btn btn btn-primary">delet</button>
         </div>
        `
        filterSection.appendChild(div)
    }
}