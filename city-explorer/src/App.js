import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      locationResult: {},
      seacrhQuery: '',

      showDetails: false

    }
  }

  getlocfun = async (e) => {

    e.preventDefault();
    // let cityName = e.target.city.value;
    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=pk.ba36a331f9eab6fca379d35672ec3837

&q=${this.state.seacrhQuery}&format=json`;


    await this.setState({

      seacrhQuery: e.target.city.value
    })
    let locResult = await axios.get(reqUrl);
    console.log('a', locResult)
    console.log('b', locResult.data)
    console.log('c', locResult.data[0])


    this.setState({

      locationResult: locResult.data[0],

      showDetails: true
    })

  }


  render() {
    return (
      <div>
        <h3>city Explorer app</h3>
        {/* <button onClick={this.getlocfun}>Get location</button> */}
        <form onSubmit={this.getlocfun}>
          <input type="text" name='city' />
          <input type="submit" value='city information' />


        </form>

        {
        this.state.showDetails &&
        <>
 
        <p>City name: {this.state.seacrhQuery}</p>
        <p>latitude {this.state.locationResult.lat} </p>
        <p>longitude {this.state.locationResult.lon} </p>


<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`}  alt="" />
</>
        }
      </div>
    )
  }
}

export default App
