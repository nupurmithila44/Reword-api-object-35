localStorage.setItem('userId', 8735456)

const addtoLocalStorage = () => {
    const iDInput = document.getElementById('storage-id');
    const id = iDInput.value ;
    const valueInput =document.getElementById('storage-value');
    const value = valueInput.value;
    iDInput.value=''
    valueInput.value =''
    if(id && value){
        localStorage.setItem(id, value)
    }
    
}