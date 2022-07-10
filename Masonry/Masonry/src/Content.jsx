import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'

const Content = () => {
    return (
        <>
            <div className='short'>
                <h3>A note about style</h3>
                <p>Lorem ipsum dolor sit, amet consectetur amet consectetur  amet consectetur </p>
                <a href="">Read More</a>
            </div>
            <div className='tall'>
                <img src={img1} alt="" />
            </div>
            <div className='short'>
                <h3>A note about style</h3>
                <p>Lorem ipsum dolor sit amet</p>
                <a href="">Read More</a>
            </div>
            <div className='tall'>
                <img src={img2} alt="" />
            </div>
            <div className='tall'>
                <img src={img3} alt="" />
            </div>
            <div className='tall'>
                <h3>A note about style</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing elit</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing elit</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing elit</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing elit</p>
                <a href="">Read More</a>
            </div>
            <div className='tall'>
                <img src={img1} alt="" />
            </div>
            <div className='short'>
                <h3>A note about style</h3>
                <p>Lorem ipsum dolor sit, amet consectetur amet consectetur  amet consectetur </p>
                <a href="">Read More</a>
            </div>
            <div className='short'>
                <h3>A note about style</h3>
                <p>Lorem ipsum dolor sit, amet consectetur amet consectetur  amet consectetur amet consectetur amet consectetur</p>
                <a href="">Read More</a>
            </div>
        </>
    );
}

export default Content;