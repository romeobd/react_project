import React from 'react';
//import '../../App.css';

import Cards from './Cards/Cards';
import Chart from '../../components/pages/Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import styles from '../../components/App.module.css';
import ReactDOM from 'react-dom';
import {fetchData} from '../../api/';
import coronaImage from '../../images/image-covid.png'



class Query extends React.Component{
  state = {
    data:{},
    country: '',
  }

async componentDidMount() {
  const fetchedData=await fetchData();
  this.setState({data: fetchedData});
}

handleCountryChange = async(country)=>{
  const fetchedData = await fetchData(country);

  this.setState({data: fetchedData, country: country });
 
}

render(){
  const{data, country}= this.state;
  
  return (
      <div className= {styles.container}>
        <img className= {styles.image} src={coronaImage} alt='COVID-19' />

        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
         <Chart data={data} country = {country}/>
       
       </div>
    
  )  ;
}
}


export default Query