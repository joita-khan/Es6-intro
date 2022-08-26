document.getElementById('bg-btn').addEventListener("click" , function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('3rd-btn').addEventListener('click',function(){
     // console.log('centaring')
    const thied = document.getElementById('third-frnd');
    thied.style.textAlign = 'center';
   
});

document.getElementById('add-btn').addEventListener('click', function(){
    //   console.log('adding')
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
    <h3 class="friend-name">New-Friend</h3>
                <p>Similique rerum molestias in ad!</p>
    `
    friendContainer.appendChild(friend);
})