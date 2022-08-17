



function checkPasswords()
{
    let password = document.querySelector("#password");
    let confirm = document.querySelector("#confirm");
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', () => {
        
        let pValue = password.value;
        let cValue = confirm.value;
    
        if(pValue !== cValue || pValue ==="")
        {
            alert("passwords do not match");
            return;
        }
        alert("Form submitted");
    });
}


checkPasswords();

