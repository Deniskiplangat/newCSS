const floater = document.querySelector('.floater')

document.addEventListener('mousemove',(e)=>{
    const floaterHeight = e.pageY
    const floaterWidth = e.pageX

    floater.style.top = `${floaterHeight}px`
    floater.style.left = `${floaterWidth}px`
})
let items = document.querySelectorAll('ul li').forEach(
    item =>{
        item.addEventListener('mousemove',(e)=>{
           const x = e.offsetX
           const y = e.offsetY

           let itemWidth = item.clientWidth
           let itemHeight = item.clientHeight

           let transX = (x - itemWidth)
           let transy = (y - itemHeight)

           item.style.transform = `translateX(${transX}px) 
           translateY(${transy}px)`
        })
        item.addEventListener('mouseout',(e)=>{
            item.style.transform = ``
        })
    }
)