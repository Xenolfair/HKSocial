document.addEventListener('DOMContentLoaded', () => {
    const loggedInUserName = localStorage.getItem('loggedInUser');
    const myNameElement = document.getElementById('myName');
    
    myNameElement.textContent = loggedInUserName;
});
