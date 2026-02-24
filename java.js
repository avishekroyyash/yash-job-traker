

// catch navber button 
const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')
const navJobCount = document.getElementById('nav-job-count')
//catch all navber button
const allBtn = document.getElementById('all-nav-btn')
const interviewBtn = document.getElementById('interview-nav-btn')
const rejectedBtn = document.getElementById('rejected-nav-btn')
//catch all card parent
const allCardHeader = document.getElementById('all-card-section');
const mainContainer = document.querySelector('main')
//catch empty section where interview and rejected will be add
const filterSection = document.getElementById('filter-section')
const noJobContent = document.getElementById('no-job-content')

//make 2 arry where i will add interview and rejected list 
let interviewList = [];
let rejectedList =[];
let currentStatus = 'all-nav-btn'
//add length of all navber which is show dinamically work-1
navJobCount.innerText=allCardHeader.children.length
totalCount.innerText=allCardHeader.children.length
interviewCount.innerText= interviewList.length
rejectedCount.innerText=rejectedList.length

//button toggle and select function
function toggle(id){
    currentStatus = id;
    
     allBtn.classList.remove('text-white','bg-blue-500')
    interviewBtn.classList.remove('text-white','bg-blue-500')
    rejectedBtn.classList.remove('text-white','bg-blue-500')

    allBtn.classList.add('text-[#64748B]','bg-white')
    interviewBtn.classList.add('text-[#64748B]','bg-white')
    rejectedBtn.classList.add('text-[#64748B]','bg-white')

     
    // now if id match it will be select and below fuction run
    const select = document.getElementById(id)
    select.classList.add('text-white','bg-blue-500')
     select.classList.remove('text-[#64748B]','bg-white')
    // select.classList.remove('hidden')
  console.log(id)
     if(id == 'interview-nav-btn'){
        console.log('1')
        filterSection.classList.remove('hidden')
        allCardHeader.classList.add('hidden')
        addInterviewCard()   
     }
     else if(id == 'all-nav-btn'){
        filterSection.classList.add('hidden')
        allCardHeader.classList.remove('hidden')
     }
     else if(id == 'rejected-nav-btn'){
        allCardHeader.classList.add('hidden')
         filterSection.classList.remove('hidden')
          addRejectedCard()
            
     }
}

mainContainer.addEventListener('click',function(event){
    //console.log( event.target.classList.contains('interview-btn'))

   
   if(event.target.classList.contains('interview-btn')){
    const parent = event.target.parentNode.parentNode;
    const jobTitle = parent.querySelector('.job-title').innerText
     const work = parent.querySelector('.work').innerText 
     const salary = parent.querySelector('.salary').innerText
     const showStatus = parent.querySelector('.show').innerText = 'INTERVIEW'
     const jobDescription = parent.querySelector('.jobdescription').innerText
    //  console.log(showStatus)
    //    showStatus.className = 'btn text-[#10B981] border-[#10B981]'
    
     const trakingData = {
        jobTitle,
        work,
        salary,
        showStatus,
        jobDescription,
     }

     const cheackJob = interviewList.find(itm=> itm.jobTitle == trakingData.jobTitle);
     if(!cheackJob){
        interviewList.push(trakingData);
     }
     //console.log(interviewList)
     rejectedList = rejectedList.filter(item => item.jobTitle != trakingData.jobTitle)
     // console.log(rejectedList)
       interviewCount.innerText= interviewList.length
    //   console.log(currentStatus)
     if(currentStatus=="rejected-nav-btn"){
       addRejectedCard()
     }
    //    interviewCount.innerText = interviewList.length;
     //rejectedCount.innerText = rejectedList.length;

    // /
    // if(currentStatus === 'interview-nav-btn'){
    //     addInterviewCard();
    // }
    // else if(currentStatus === 'rejected-nav-btn'){
    //     addRejectedCard();
    // }
    //addInterviewCard()
    }
 else if(event.target.classList.contains('rejected-btn')){
    const parent = event.target.parentNode.parentNode;
    const jobTitle = parent.querySelector('.job-title').innerText
     const work = parent.querySelector('.work').innerText 
     const salary = parent.querySelector('.salary').innerText
     const showStatus = parent.querySelector('.show').innerText = 'REJECTED'
     const jobDescription = parent.querySelector('.jobdescription').innerText
    //  console.log(showStatus)
    //    showStatus.className = 'btn text-[#10B981] border-[#10B981]'
    
     const trakingData = {
        jobTitle,
        work,
        salary,
        showStatus,
        jobDescription,
     }

     const cheackJob = rejectedList.find(itm=> itm.jobTitle == trakingData.jobTitle);
     if(!cheackJob){
        rejectedList.push(trakingData);
     }
     console.log(rejectedList)
      interviewList = interviewList.filter(item => item.jobTitle != trakingData.jobTitle)
      console.log(interviewList)
       rejectedCount.innerText= rejectedList.length
     if(currentStatus == "interview-nav-btn"){
        addInterviewCard()
     }
     

    // interviewCount.innerText = interviewList.length;
    // rejectedCount.innerText = rejectedList.length;

    // // 🔥 ALWAYS refresh current tab
    // if(currentStatus === 'interview-nav-btn'){
    //     addInterviewCard();
    // }
    // else if(currentStatus === 'rejected-nav-btn'){
    //     addRejectedCard();
    // }
      //addRejectedCard()
    }
});


function addInterviewCard(){
    filterSection.innerHTML="";
     if(interviewList.length === 0){
        noJobContent.classList.remove('hidden');
    }else{
        noJobContent.classList.add('hidden');
    }
    for(let job of interviewList ){
        console.log(job)
        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl p-6 border-1 border-gray-200 w-[1110px] m-auto mb-5'
        div.innerHTML = `
         <h1 class=" job-title text-[#002C5C] text-[18px] font-semibold">${job.jobTitle}</h1>
                <p class="work text-[#64748B] mb-5">${job.work}</p>
                <p class="salary text-[#64748B] mb-5">${job.salary}</p>
                <div class=" w-[120px] mb-2">
                    <p>${job.showStatus}</p>
                </div>
                <p class="jobdescription mb-5">${job.jobDescription}</p>
                <div class="flex gap-3">
                    <button class="btn text-[#10B981] border-[#10B981]">interview</button>
                    <button class="btn text-[#EF4444] border-[#EF4444]">Rejected</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function addRejectedCard(){
    filterSection.innerHTML="";
    if(rejectedList.length === 0){
        noJobContent.classList.remove('hidden');
    }else{
        noJobContent.classList.add('hidden');
    }
    for(let job of rejectedList ){
        console.log(job)
        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl p-6 border-1 border-gray-200 w-[1110px] m-auto mb-5'
        div.innerHTML = `
         <h1 class=" job-title text-[#002C5C] text-[18px] font-semibold">${job.jobTitle}</h1>
                <p class="work text-[#64748B] mb-5">${job.work}</p>
                <p class="salary text-[#64748B] mb-5">${job.salary}</p>
                <div class=" w-[120px] mb-2">
                    <p>${job.showStatus}</p>
                </div>
                <p class="jobdescription mb-5">${job.jobDescription}</p>
                <div class="flex gap-3">
                    <button class="btn text-[#10B981] border-[#10B981]">interview</button>
                    <button class="btn text-[#EF4444] border-[#EF4444]">Rejected</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}