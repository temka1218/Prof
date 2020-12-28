import React from 'react';
import { Button } from './pages/Button';
import './Choose.css';
import { GiMuscleUp , GiBrain, GiPsychicWaves} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

export function Choose() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='choose__section'>
        <div className='choose__wrapper'>
          <h1 className='choose__heading'>Таны аль чадвар илүү хөгжсөн бэ?</h1>
          <div className='choose__container'>
            <Link to='/signup' className='choose__container-card'>
              <div className='choose__container-cardInfo'>
                <div className='icon'>
                  <GiBrain />
                </div>
                <h3>Тооцоолол болон Сэтгэн бодох чадвар</h3>
                <div>
            
             <Button buttonSize='btn--wide' >
                Сонгох
                </Button>
         </div>
              
              </div>
            </Link>
            <Link to='/signup' className='choose__container-card'>
              <div className='choose__container-cardInfo'>
                <div className='icon'>
                  <GiPsychicWaves />
                </div>
                <h3>Ойлгох, илтгэх мөн сонсох чадвар</h3>
                <ul className='choose__container-features'>    
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Сонгох
                </Button>
              </div>
            </Link>
            <Link to='/signup' className='choose__container-card'>
              <div className='choose__container-cardInfo'>
                <div className='icon'>
                  <GiMuscleUp />
                </div>
                <h3>Биеийн хүч</h3>
                <Button buttonSize='btn--wide'>
                Сонгох
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Choose;