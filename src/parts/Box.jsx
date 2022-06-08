
const Box = (props) => {
   const closeBox = (e) => {
      e.preventDefault();
      props.setOpenBox(false)
   }


   return (
      <div class="box">
         <div class="box__body">
            <div class="box__content">
               <ul class="box__list">
                  {props.tracklist.map(item => ( 
                     <a href="/" class="box__link">
                        <li key={item.id} class='box__item'>{item.name}</li>
                     </a>
                  ))}
               </ul>
               <a href="" class="box__close"
                  onClick={(e) => { closeBox(e) }}>Закрыть</a>
            </div>
         </div>
      </div>
   )
}

export default Box;