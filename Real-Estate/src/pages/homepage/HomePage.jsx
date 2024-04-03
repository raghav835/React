import SearchBar from '../searchbar/SearchBar';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
        <div className="textcontainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam impedit dolores earum qui pariatur ipsum aspernatur similique culpa possimus, facilis odio, doloremque repudiandae optio dignissimos non necessitatibus recusandae! Autem.</p>

                <SearchBar/>

                <div className="boxes">
                    <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgcontainer">
            <img src="./bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage