/* eslint-disable jsx-a11y/anchor-is-valid */
const Box = (props) => {
   const closeBox = (e) => {
      e.preventDefault();
      props.setOpenBox(false)
   }


   return (
      <div className="box">
         <div className="box__body">
            <div className="box__content">
               <ul className="box__list">
                  {props.tracklist.map(item => ( 
                     <a href="/" className="box__link">
                        <li key={item.id} className='box__item'>{item.name}</li>
                     </a>
                  ))}
               </ul>
               <a href="#" className="box__close"
                  onClick={(e) => { closeBox(e) }}>Закрыть</a>
            </div>
         </div>
      </div>
   )
}

export default Box;