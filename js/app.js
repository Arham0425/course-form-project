// selection the elements
const customerForm = document.getElementById('customer-form')
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

// keyup addEventListener
// name.addEventListener('blur', onBlur())
// course.addEventListener('blur', onBlur())
// author.addEventListener('blur', onBlur())

customerForm.addEventListener('submit', event => {
    // prevent the default action
    event.preventDefault()

    if (name.value === '' || course.value === '' || author.value === '') {
        
    } else {
        createElements()
    }

    // clear input field
    name.value = ''
    course.value = ''
    author.value = ''
    event.lastElementChild.disabled = true
})

// create elements function
function createElements() {
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
}

// input keyup function
function onBlur() {
    if (!(name.value === '') && !(course.value === '') && !(author.value === '')) {
        customerForm.lastElementChild.disabled = false
    } else {
        customerForm.lastElementChild.disabled = true
    }
    // alert(name.value)
}
