let form = document.forms.add
let formTwo = document.forms.addTwo
let tBody = document.querySelector('.tBody')
let inpAge = document.querySelector('#age')
let inpName = document.querySelector('#name')
let inpAgeTwo = document.querySelector('#age-2')
let inpNameTwo = document.querySelector('#name-2')
let bg = document.querySelector('.bg')
let modul = document.querySelector('.modul')
let iconClose = document.querySelector('.img-close')


let rowNumber = 1

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
    no.innerHTML = rowNumber
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



btnSecond.onclick = () => {
    tr.remove()
    user = []
    console.log(user);
    rowNumber--
}

btnOne.onclick = () => {
    modul.style.display = 'block';
    bg.style.display = 'block';
    setTimeout(() => {
        modul.classList.add('show');
    }, 100);
}

bg.onclick = () => {
    modul.style.display = 'none'
    bg.style.display = 'none'
    setTimeout(() => {
        modul.classList.remove('show');
    }, 100);
}

iconClose.onclick = () => {
    modul.style.display = 'none'
    bg.style.display = 'none'
    setTimeout(() => {
        modul.classList.remove('show');
    }, 100);
}

formTwo.onsubmit = (eventTwo) => {
    eventTwo.preventDefault()
    
    user = {}

    if(inpNameTwo.value.length < 4) {
        inpNameTwo.classList.add('error')
        return
    } else {
        inpNameTwo.classList.remove('error')
    }

    if(inpAgeTwo.value < 7) {
        inpAgeTwo.classList.add('error')
        return
    } else {
        inpAgeTwo.classList.remove('error')
    }

    let fmTwo = new FormData(formTwo)

    fmTwo.forEach((value, key) => {
        user[key] = value
    }) 

    formTwo.reset()

    console.log(user);

    nameTd.innerHTML = user.name
    yearTd.innerHTML = 2023 - user.age

    modul.style.display = 'none'
    bg.style.display = 'none'
}

    form.reset()

    console.log(user);
    rowNumber++

}

