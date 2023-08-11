var toast_box
if (document.querySelector('#toast-box')){
    toast_box = document.querySelector('#toast-box');
}else{
    toast_box = document.createElement('div');
    toast_box.id = 'toast-box';

    document.querySelector('body').appendChild(toast_box);
}

function show_toast(type , msg){
    var toast = document.createElement('div');
    toast.classList.add('toast');
    if (type == 'success'){
        toast.innerHTML = `<i class='bx bx-check-circle'></i>`
        toast.classList.add('success');
    }
    else if (type == 'error'){
        toast.innerHTML = `<i class='bx bx-x-circle'></i>`
        toast.classList.add('error');
    }
    else if (type == 'warning'){
        toast.innerHTML = `<i class='bx bx-error-circle'></i>`
        toast.classList.add('warning');
    }
    toast.innerHTML += msg;
    const close_toast = document.createElement('i');
    close_toast.classList.add('bx' , 'bx-x')
    close_toast.onclick = () => {
        toast.remove();
    }
    toast.appendChild(close_toast);
    toast_box.insertBefore(toast , toast_box.firstChild);

    setTimeout(() => {
        toast.remove();
    } , 2000)
}
