import Juego1 from './Juego1';
import Tecno1 from './Tecno1';
import Juego2 from './Juego2';
import Ads from './Ads';

function Main(){
  return(
    <div className="main">
      <main>
        <div>
          <div>
            <Ads />
          </div>
            <div>
              <Juego1 />
              <Tecno1 />
              <Juego2 />
            </div>
        </div>
      </main>
    </div>
  )
}
export default Main;
