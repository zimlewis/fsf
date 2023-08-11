//Check if user is logged in
if (localStorage.getItem('current_user') == null){
    location.href = 'AccountForm.html'
}