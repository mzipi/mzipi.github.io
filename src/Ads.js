import { Adsense } from '@ctrl/react-adsense';

function Ads(){
    return(
            <Adsense
                client="ca-pub-7640562161899788"
                slot="7259870550"
                style={{ display: 'block' }}
                layout="in-article"
                format="fluid"
            />
    )
}
export default Ads;