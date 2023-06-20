const price=document.getElementById('price');
const name=document.getElementById('name');
const form=document.getElementById('frm');
const destination=document.getElementById('dest');
const totalValueDest=document.getElementById('totalValue');
var totalValue=0;

//displaying all the products on load
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000')
    .then(res=>{
        res.data.forEach(obj=>{
            display(obj);
        })
        //showing total value
        totalValueDest.innerText="Rs "+totalValue;
    })
})
function display(product){
    //creating text 
    var text=product.price+' - '+product.name;
    var textnode=document.createTextNode(text);
    var newEle=document.createElement('li');
    newEle.appendChild(textnode);
    
    //creating delete button
    var delBut=document.createElement('button');
    delBut.className='delete';
    delBut.setAttribute('data-id',product.id);
    delBut.appendChild(document.createTextNode('Delete Product'))
    newEle.appendChild(delBut);
    console.log(newEle);
    destination.appendChild(newEle);

    //calculating totalValue
    totalValue+=parseInt(product.price);
}

//adding product
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const obj={
        price:price.value,
        name:name.value
    }
    axios.post('http://localhost:3000/add-product',obj)
    .then(result=>{
        console.log(result);
        obj.id=result.data._id;
        display(obj);
        //price updated in display funciton
        totalValueDest.innerText="Rs"+totalValue;
        form.reset();
    })
    .catch(err=>console.log(err));
})

//deleting product
destination.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.dataset.id;
        axios.delete('http://localhost:3000/delete-product/'+id)
        .then(result=>{
            console.log(result);
            e.target.parentElement.remove();
            //decrese price
            totalValue-=result.data.price;
            totalValueDest.innerText="Rs "+totalValue;
        })
        .catch(err=>console.log(err));
    }
})


