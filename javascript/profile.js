const fileInput = document.getElementById("choose-file")
const profileNavBar = document.getElementById('profile-navbar')
const deleteProfile = document.getElementById('delete-user-profile')
const tbordSpan = document.querySelector('.tbord-span');


tbordSpan.addEventListener('click', ()=> {
    window.location = 'dashboard.html'
})

function notification (element, titre, message) {
    element.classList.remove('hidden');
    element.innerHTML = `
    <div class="card-header">
        <h3 class="text-header">${titre}</h3>
    </div>
    <div class="card-body">
        <h5 class="text-body">${message}</h5>
    </div>
    `;
    setTimeout(() => {
        element.classList.add('hidden')
    }, 2000);
}

function addProfile() {
    const reader = new FileReader();

    reader.addEventListener('load', ()=> {
    localStorage.setItem('user-profile', reader.result)
   })
       const file = fileInput.files[0]
       if (file) {
         const src = URL.createObjectURL(file)
         document.getElementById('user-profile').setAttribute('src', src)
       profileNavBar.setAttribute('src', src)
       notification(cardNotification, "Modification de l'avatar", "Votre photo a été ajouté avec sucess")
       }
     
   reader.readAsDataURL(fileInput.files[0])
}

fileInput.addEventListener('change', () => {
  addProfile()
})


function DOMContentLoaded() {
    document.addEventListener('DOMContentLoaded', ()=> {
        const imageUrl = localStorage.getItem('user-profile');
        if (imageUrl) {
            document.getElementById('user-profile').setAttribute('src', imageUrl)
            profileNavBar.setAttribute('src', imageUrl)
        }
    })
    
}

DOMContentLoaded()

function deleteUserProfile() {
    localStorage.removeItem('user-profile');
    location.reload();    
}

deleteProfile.addEventListener('click', ()=> {
  deleteUserProfile()
  notification(cardNotification, "Suppression de l'avatar", "Votre photo a été supprimée avec success")
})


