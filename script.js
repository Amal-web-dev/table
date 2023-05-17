let form = document.forms.add
let tBody = document.querySelector('.tBody')
let inpAge = document.querySelector('#age')
let inpName = document.querySelector('#name')

form.onsubmit = (event) => {
    event.preventDefault()
    let user = {}

    if(inpName.value.length < 4) {
        inpName.classList.add('error')
        return
    } else {
        inpName.classList.remove('error')
    }

    if(inpAge.value < 7) {
        inpAge.classList.add('error')
        return
    } else {
        inpAge.classList.remove('error')
    }

   

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    let tr = document.createElement('tr')
    let nameTd = document.createElement('td')
    let yearTd = document.createElement('td')
    let no = document.createElement('td')
    let btnTd = document.createElement('td')
    let btnOne = document.createElement('button')
    let btnSecond = document.createElement('button')
    let imgOne = document.createElement('img')
    let imgSecond = document.createElement('img')

    nameTd.innerHTML = user.name
    yearTd.innerHTML = 2023 - user.age 
    no.innerHTML = 1
    imgOne.src = './icon/2931178_change_edit_pencil_creative_design_icon.svg'
    imgSecond.src = './icon/7518699_dustbin_bin_trush_icon.svg'
    btnOne.classList.add('btn')
    btnSecond.classList.add('btn')
    imgSecond.classList.add('trush')

    btnOne.append(imgOne)
    btnSecond.append(imgSecond)
    btnTd.append(btnOne, btnSecond)
    tr.append(no, nameTd, yearTd, btnTd)
    tBody.append(tr)

    form.reset()

    console.log(user);
}

