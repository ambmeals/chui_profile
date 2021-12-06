function Card3 ({name,about,job}) {

    return (
       <div className='Card'>
           <div className='upper-container2'>
               <div className='image-container'>
<img src="https://i.imgur.com/EyOpg7J.jpg" alt='' height="100px"  width="100px" />
                   </div>
                   </div>
<div className="lower-container">
    <h3>{ name }</h3>
    <h4>{ job }</h4>
    <p>{ about }</p>
</div>
           </div>
         )
}

export default Card3