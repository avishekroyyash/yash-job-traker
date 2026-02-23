

// catch navber button 
const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')
//catch all navber button
const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')
//catch all card parent
const allCardHeader = document.getElementById('all-card-section');
//catch empty section where interview and rejected will be add
const filter = document.getElementById('filter-section')

//make 2 arry where i will add interview and rejected list 
let interviewList = [];
let rejectedList =[];
//add length of all navber which is show dinamically work-1
totalCount.innerText=allCardHeader.children.length
interviewCount.innerText= interviewList.length
rejectedCount.innerText=rejectedList.length

//button toggle and select function
function toggle(id){
    allBtn.classList.add('text-[#64748B]','bg-white')
    interviewBtn.classList.add('text-[#64748B]','bg-white')
    rejectedBtn.classList.add('text-[#64748B]','bg-white')

     allBtn.classList.remove('text-white','bg-blue-500')
    interviewBtn.classList.remove('text-white','bg-blue-500')
    rejectedBtn.classList.remove('text-white','bg-blue-500')
     
    // now if id match it will be select and below fuction run
    const select = document.getElementById(id)
    select.classList.add('text-white','bg-blue-500')
     select.classList.remove('text-[#64748B]','bg-white')

     if(id =='interview-btn'){
        filter.classList.remove('hidden')
        allCardHeader.classList.add('hidden')
     }
     else if(id == 'all-btn'){
        filter.classList.add('hidden')
        allCardHeader.classList.remove('hidden')
     }
}

allCardHeader.addEventListener('click',function(event){
    //console.log( event.target.classList.contains('interview-btn'))
   
   if(event.target.classList.contains('interview-btn')){
    const parent = event.target.parentNode.parentNode;
    const jobTitle = parent.querySelector('.job-title').innerText
     const work = parent.querySelector('.work').innerText 
     const salary = parent.querySelector('.salary').innerText
     const jobDescription = parent.querySelector('.jobdescription').innerText

     const trakingData = {
        jobTitle,
        work,
        salary,
        jobDescription,
     }

     const cheackJob = interviewList.find(itm=> itm.jobTitle == trakingData.jobTitle);
     if(!cheackJob){
        interviewList.push(trakingData);
     }
     console.log(interviewList)
     addInterviewCard();
    }
});


function addInterviewCard(){
    filter.innerHTML="";
    for(let job of interviewList ){
        console.log(job)
        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl p-6 border-1 border-gray-200'
        div.innerHTML = `
         <h1 class=" job-title text-[#002C5C] text-[18px] font-semibold">Mobile First Corp </h1>
                <p class="work text-[#64748B] mb-5">React Native Developer</p>
                <p class="salary text-[#64748B] mb-5">Remote • Full-time • $130,000 - $175,000</p>
                <div class=" bg-[#EEF4FF] p-4 w-[120px] mb-2">
                    <p>Not Applied</p>
                </div>
                <p class="jobdescription mb-5">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="flex gap-3">
                    <button class="btn text-[#10B981] border-[#10B981]">interview</button>
                    <button class="btn text-[#EF4444] border-[#EF4444]">Rejected</button>
                </div>
        `
        filter.appendChild(div)
    }
}