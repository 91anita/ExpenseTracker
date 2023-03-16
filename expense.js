function savetolocalstore(event){
    event.preventDefault();
    const Amount=event.target.amount.value;
    const Description=event.target.description.value;
    const Category=event.target.category.value;
    localStorage.setItem('Amount',Amount);
    localStorage.setItem('Description',Description);
    localStorage.setItem('Category',Category);
    const obj={
        Amount,
        Description,
        Category
    }
    localStorage.setItem('userDetails',JSON.stringify(obj))
    showOnScreen(obj)
}
function showOnScreen(obj){
    const parentElement=document.getElementById('users')
    var childElement=document.createElement('li')
    childElement.textContent=obj.Amount+'-'+obj.Description+'-'+obj.Category
    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value='Delete'
    deleteButton.onclick=()=>{
        localStorage.removeItem('userDetails')
        parentElement.removeChild(childElement)
    }
    const editButton=document.createElement('input')
    editButton.type="button"
    editButton.value='Edit'
    editButton.onclick=() =>{
        localStorage.removeItem('userdetails')
        parentElement.removeChild(childElement)
        document.getElementById('amount').value=obj.Amount
        document.getElementById('description').value=obj.Description
        document.getElementById('category').value=obj.Category
    }
    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
}