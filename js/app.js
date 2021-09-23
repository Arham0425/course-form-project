// selection the elements
const customerForm = document.getElementById('customer-form')
const feedback = document.querySelector('.feedback')
const name = document.getElementById('name')
const course = document.getElementById('course')
const author = document.getElementById('author')
const loading = document.querySelector('.loading')
const customerList = document.querySelector('.customer-list')
let items = [
    {
        id: 0,
        img: './img/cust-0.jpg',
        name: 'john anderson',
        course: 'css basics',
        author: 'john anderson'
    }
]

customerForm.addEventListener('submit', event => {
    // prevent the default action
    event.preventDefault()

    if (name.value === '' || course.value === '' || author.value === '') {
        event.target.lastElementChild.disabled = true
    } else {
        loading.classList.add('showItem')
        feedback.classList.add('showItem', 'alert', 'alert-success')
        // setTimeout(() => {
            createElements(event)
        // }, 3000)
        
    }

    // clear input field
    name.value = ''
    course.value = ''
    author.value = ''
    // remove class
    removeClass()
    // disable submit button
    event.target.lastElementChild.disabled = true
})

// create elements function
function createElements(event) {
    const randomNum = Math.floor(Math.random() * 6)
    let item = {}
    item.id = items.length
    item.img = `./img/cust-${randomNum}.jpg`
    item.name = name.value
    item.course = course.value
    item.author = author.value
    items.push(item)

    const mapItem = items.map(item => {
        const {id, img, name, course, author} = item
        return `<div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
                  <div class="card text-left">
                    <img src=${img} class="card-img-top" alt="" />
                    <div class="card-body">
                      <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${name} </span></h6>
                      <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course"> ${course} </span></h6>
                      <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${author} </span></h6>
                    </div>
                  </div>
                </div>`
    }).join('')
    customerList.innerHTML = mapItem
    loading.classList.remove('showItem')
    feedback.classList.remove('showItem')
}

// remove class on the input feild 
function removeClass() {
    name.classList.remove('complete')
    course.classList.remove('complete')
    author.classList.remove('complete')
}

// name handle blur
function nameHandleBlur(event) {
    // submit button false or true
    onBlurCondition()

    // add & remove classes
    const nameBtn = event.target
    if (nameBtn.value === '') {
        nameBtn.classList.remove('complete')
        nameBtn.classList.add('fail')
    } else {
        nameBtn.classList.remove('fail')
        nameBtn.classList.add('complete')
    }
}

// course handle blur
function courseHandleBlur(event) {
    // submit button false or true
    onBlurCondition()

    // add & remove classes
    const courseBtn = event.target
    if (courseBtn.value === '') {
        courseBtn.classList.remove('complete')
        courseBtn.classList.add('fail')
    } else {
        courseBtn.classList.remove('fail')
        courseBtn.classList.add('complete')
    }
}

// author handle blur
function authorHandleBlur(event) {
    // submit button false or true
    onBlurCondition()

    // add & remove classes
    const authorBtn = event.target
    if (authorBtn.value === '') {
        authorBtn.classList.remove('complete')
        authorBtn.classList.add('fail')
    } else {
        authorBtn.classList.remove('fail')
        authorBtn.classList.add('complete')
    }
}

// on blur condition
function onBlurCondition() {
    if (!(name.value === '') && !(course.value === '') && !(author.value === '')) {
        customerForm.lastElementChild.disabled = false
    } else {
        customerForm.lastElementChild.disabled = true
    }
}


