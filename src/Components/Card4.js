function Card4 ({name,about,job}) {

    return (
       <div className='Card'>
           <div className='upper-container3'>
               <div className='image-container'>
<img src="https://i.imgur.com/mFWcVfB.jpg" alt='' height="100px"  width="100px" />
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

export default Card4