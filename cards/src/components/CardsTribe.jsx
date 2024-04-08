import "./CardsStyle.scss"
import  {useState} from 'react';
import RatingReview from "./RatingReview";

function CardsTribe() {
    const [rating, setRating] = useState(0)

    return (
        <>
            <div id='container'>
                <img src='https://nfts.wtf/wp-content/uploads/2021/07/Album-Cover-Image-from-A-Tribe-Called-Quests-The-Low-End-Theory-a3d5162466de8444e8edb86584435287.png' alt='a tribe called quest' />
                <div className='information'><h1 id='title'>A Tribe Called Quest<RatingReview rating={rating} setRating={setRating}
                
                /></h1>
                </div>
                <h2 id="music-title">The Low End Theory</h2>
                <p id="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque, debitis iure tempore deserunt suscipit nisi modi perferendis ipsa tenetur recusandae praesentium nulla vel optio illum natus officia. Nemo, impedit?</p>
                
            </div>
        </>
    )
}
export default CardsTribe;