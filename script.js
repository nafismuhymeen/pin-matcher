
function codeGenerator() {
    document.getElementById('generated-code').value = Math.floor(1000 + Math. random() * 9000);
    const code = document.getElementById('generated-code').value;
    return code
}

function writePin(buttonNumValue) {
    document.getElementById('my-code').value = document.getElementById('my-code').value + buttonNumValue;
    const inputPin = document.getElementById('my-code').value;
    const inputPinNum = parseInt(inputPin); 
}

function matchIt() {
    const checkPlaceholder = document.getElementById('generated-code');
    const submitButton = document.getElementById('submitBtn');
    if (checkPlaceholder.getAttribute('placeholder') && checkPlaceholder.value === '') {
        alert('Please Click On The "Generate Pin" Button')
        return
    }
    
    else if (document.getElementById('generated-code').value !== document.getElementById('my-code').value) {
        
        document.getElementById('try-left').innerText = parseInt(document.getElementById('try-left').innerText) - 1;
        if (parseInt(document.getElementById('try-left').innerText)>0) {
            document.getElementById('code-not-matched').style.display ="block";
        function autoHide() {
            document.getElementById('code-not-matched').style.display ="none";
        }
        setTimeout(autoHide, 2000);
            
        }

       else if (parseInt(document.getElementById('try-left').innerText)===0) {
            submitButton.setAttribute('disabled', 'disabled');
            document.getElementById('code-not-matched').style.display ="block";
        }
         
    }
    else if (document.getElementById('generated-code').value === document.getElementById('my-code').value) {
        document.getElementById('code-matched').style.display = "block";
        document.getElementById('actions-left').style.display = "none";
        document.getElementById('code-not-matched').style.display = "none";
    } 
}

function allClear() {
    document.getElementById('my-code').value = null;
}
function lastCharacterClear() {
    document.getElementById('my-code').value = document.getElementById('my-code').value.slice(0, -1);
}
