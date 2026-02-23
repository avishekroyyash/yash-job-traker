// catch navber button 
const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')
//catch all navber button
const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')
//catch all card parent
const cardHeader = document.getElementById('all-card-section');
console.log(cardHeader.children.length)

//make 2 arry where i will add interview and rejected list 
let interviewList = [];
let rejectedList =[];
//add length of all navber which is show dinamically work-1
totalCount.innerText=cardHeader.children.length
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
}
