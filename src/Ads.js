import React from 'react';

export default class Ads extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-format="auto"
          data-ad-client="ca-pub-1276989055234826"
          data-ad-slot="3586502935" />
    );
  }
}
