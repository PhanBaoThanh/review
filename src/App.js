import './App.scss';
import {useState} from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'

function App() {
  const data = [
    {
      id: 1,
      name: 'Susan Smith',
      img: img1,
      position: 'WEB DEVELOPER',
      description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
      id: 2,
      name: 'Anna Johnson',
      img: img2,
      position: 'WEB DESIGNER',
      description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
      id: 3,
      name: 'Peter Jones',
      img: img3,
      position: 'INTERN',
      description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
      id: 4,
      name: 'Bill Anderson',
      img: img4,
      position: 'THE BOSS',
      description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
  ]

  const handleClickLeftBtn = () => {
    if(id === 0)
      setId(data.length - 1)
    else setId(prev => prev - 1)
  }

  const handleClickRightBtn = () => {
    if(id >= data.length - 1)
      setId(0)
    else setId(prev => prev + 1)
  }


  const [id,setId] = useState(1)
  return (
    <div className="App">
      <div className='header'>
        <h2>Our Reviews</h2>
        <div className='line'></div>
      </div>

      <div className='box'>
        <div className='img'>
          <img className='imgItem' src={data[id].img} alt='ptc'/>
          <div className='circle'></div>
          <div className='icon'>"
          </div>
        </div>

        <p className='name'>{data[id].name}</p>
        <p className='position'>{data[id].position}</p>
        <p className='description'>{data[id].description}</p>
        <div className='btns'>
          <div className='btn' onClick={handleClickLeftBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="20px" viewBox="0 0 11 20" version="1.1">
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Rounded" transform="translate(-548.000000, -3434.000000)">
                      <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                          <g id="-Round-/-Navigation-/-arrow_back_ios" transform="translate(442.000000, 54.000000)">
                              <g>
                                  <polygon id="Path" opacity="0.87" points="0 0 24 0 24 24 0 24"/>
                                  <path fill="#49a6e9" stroke="#49a6e9" d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z" id="????-Icon-Color"/>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
            </svg>
          </div>
          <div className='btn' onClick={handleClickRightBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" stroke='#49a6e9' fill='#49a6e9' width="11px" height="20px" viewBox="0 0 11 20" version="1.1">
                <g id="Icons" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Rounded" transform="translate(-345.000000, -3434.000000)">
                        <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                            <g id="-Round-/-Navigation-/-arrow_forward_ios" transform="translate(238.000000, 54.000000)">
                                <g>
                                    <polygon id="Path" opacity="0.87" points="24 24 0 24 0 0 24 0"/>
                                    <path stroke="#49a6e9" d="M7.38,21.01 C7.87,21.5 8.66,21.5 9.15,21.01 L17.46,12.7 C17.85,12.31 17.85,11.68 17.46,11.29 L9.15,2.98 C8.66,2.49 7.87,2.49 7.38,2.98 C6.89,3.47 6.89,4.26 7.38,4.75 L14.62,12 L7.37,19.25 C6.89,19.73 6.89,20.53 7.38,21.01 Z" id="????-Icon-Color" fill="#49a6e9"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>

        <div className='surpriseBtn' onClick={handleClickRightBtn}>
          Surprise Me
        </div>
      </div>
    </div>
  );
}

export default App;
