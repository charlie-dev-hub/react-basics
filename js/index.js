let colors = ['red','blue','yellow','organe','brown','green','purple','teal','black','indigo']

function makeRow(){
    for(let index=0; index < colors.length; index++){
     let newBox = document.createElement('div')
     newBox.style.width='20%'
     newBox.style.height='100%'
     newBox.style.backgroundColor= colors[index]
     document.querySelector('.row').appendChild(newBox)
     
    }

}

makeRow()
makeRow()