
let rosace = document.querySelector("body .rosace")
let harlemShake =document.querySelector("body .harlem-shake")
// let body= document.querySelectorAll("body") 
let positionZList= document.querySelectorAll("body .rosace .positionZ")
let itemList= document.querySelectorAll("body .rosace .positionZ div")
let lvl=0;


/* SELECT */

function select()
{
    window.addEventListener('keydown', function(event)
    { 
        
        
        if(event.keyCode===38)
        {
            lvl++
            for ( var i=0;i < itemList.length; i++)
            {
                itemList[lvl].style.boxShadow=" 0 0 20px #08F8F8"
            }
            for( let item of itemList)
            {   
                if( item != itemList[lvl]) 
                    {
                        item.style.boxShadow="none"
                    }
            }
        }
        if(event.keyCode===40)
        {
            lvl--
            for ( var i=0;i < itemList.length; i++)
            {
                itemList[lvl].style.boxShadow=" 0 0 20px #08F8F8"
            }
            for( let item of itemList)
            {   
                if( item != itemList[lvl])
                    {
                        item.style.boxShadow="none "
                    }   
            }
        }
       
    })
    return lvl
}

select()

/* CHANGE COLOR AZERT*/
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===65)
    {
        itemList[lvl].style.borderColor="#EF4AD6"
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===90)
    {
        itemList[lvl].style.borderColor="#87EAF7"
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===69)
    {
        itemList[lvl].style.borderColor="#EAE386"
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===82)
    {
        itemList[lvl].style.borderColor="#8FD470"
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===84)
    {
        itemList[lvl].style.borderColor="#08F8F8"
    }
})

window.addEventListener('keydown', function(event)
{

    if( event.keyCode===83)
        { 
            for ( var i=0;i < itemList.length; i++)
            {
                itemList[lvl].style.boxShadow=" 0 0 20px #08F8F8"
            }
        }
})
window.addEventListener('keydown', function(event)
{

    if( event.keyCode===70)
        { 
            for ( var i=0;i < itemList.length; i++)
            {
                itemList[lvl].style.boxShadow= "none"
            }
        }
})

/* CHANGE ALL COLORS */

window.addEventListener('keydown', function(event)
{
    if( event.keyCode===89 )
    {
        for(const item of itemList)
        {
            item.style.borderColor = "#ffda03";
        }

    }
})
/* Harlem Shake */

/* CIRCLE */
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===67)
    {
        itemList[lvl].style.borderRadius= 200+"px"
    }
})
/* ROTATION */
// window.addEventListener('keydown', function(event)
// {
//     if(event.keyCode===72)
//     {
//         itemList[lvl].style.WebkitTransform = rotateX(360);
//     }
// })
/* POURQUOI ESTCE QUE CA NE MARCHE PAS ??? PEUT ETRE PAS DE TRANSFORM POSSIBLE PENDANT LANIMATION */
/* FULL ROTATION */
window.addEventListener('keydown', function(event)
{
    if( event.keyCode===72 )
    {
            harlemShake.style.WebkitTransform = "rotateX(360deg)";
    }
})



/* CHANGE WIDTH AND HEIGHT */
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===49)
    {
            itemList[lvl].style.width = itemList[lvl].offsetWidth + 10 + 'px'
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===50)
    {
        itemList[lvl].style.width = itemList[lvl].offsetWidth - 10 + 'px'
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===51)
    {
        itemList[lvl].style.height = itemList[lvl].offsetHeight + 10 + 'px'
    }
})
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===52)
    {
        itemList[lvl].style.height = itemList[lvl].offsetHeight - 10 + 'px'
    }
})

/* LAUNCH ANIMATION */

window.addEventListener('keydown', function(event)
{
    if(event.keyCode===13)
    {
        rosace.classList.add('rosaceAnim')
    }
   
})

window.addEventListener('keydown', function(event)
{
    if( event.keyCode===32 )
    {
        for( const positionZ of positionZList)
        {
            positionZ.classList.remove("animate")
        }
        for (const item of itemList)
        {
            item.classList.add('animate')
        }

    }

})
// window.addEventListener('keydown', function(event)
// {
//     if( event.keyCode===84 )
//     {
//         for( const positionZ of positionZList)
//         {
//             positionZ.classList.remove("shape")
//         }
//         for (const positionZ of positionZList)
//         {
//             positionZ.classList.add('triangle')
//         }

//     }

// })







/* ADD ELEMENT */
function addElement () 
{
    // crée un nouvel élément div
    var newpositionZ = document.createElement("div");
    newpositionZ.className= "positionZ itemNewTranslate";
    rosace.appendChild(newpositionZ);
    var newItem = document.createElement("div");
    newItem.className=" itemNew animate";
    newpositionZ.appendChild(newItem);
}
window.addEventListener('keydown', function(event)
{
    if(event.keyCode===187)
    {
        addElement()
    }
})



