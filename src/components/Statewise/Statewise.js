import React, { useEffect } from 'react'
import { useState } from 'react';
import './Statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);


    //fetching data from api and awaiting json response
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise);
    }

    //funtion will run on page load
    useEffect(() => {
        getCovidData();
    }, [])
    console.clear()


    //tried checkbox and date functionality below ⬇️

    /**data.forEach((o, i) => o.id = (i-1) + 1);
      console.log(data);

    const [isChecked, setIsChecked] = useState(false);

      const handleOnChange = () => {
        setIsChecked(!isChecked);
        console.log("unchecked")
      };

      var checkbox = document.getElementsByClassName('states-checkbox');
      checkbox = [];
      checkbox.forEach((o, i) => o.name = (i-1) + 1);
      console.log(checkbox[2]);

      function change_css(){
        var elems = document.getElementsByClassName('number');
        for (var i=0;i<elems.length;i+=1){
            if (checkbox.name === data.id) {
            elems[i].style.visibility = 'visible';
            }
            console.log(checkbox.id)
            }}
    **/

    return (
        <div>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th> State </th>
                            <th> Confirmed </th>
                            <th> Recovered </th>
                            <th> Deaths </th>
                            <th> Active </th>
                            <th> Last Updated </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((curElem, ind) => {
                                return (
                                    //displayin data statewize
                                    <>
                                    <tr key={ind} >
                                        <th className="state states-checkbox"> {curElem.state} </th>
                                        <td className="number confirmed" id="value"> {curElem.confirmed} </td>
                                        <td className="number recovered" id="value"> {curElem.recovered} </td>
                                        <td className="number deaths" id="value"> {curElem.deaths} </td>
                                        <td className="number active" id="value"> {curElem.active} </td>
                                        <td className="number updates" id="value"> {curElem.lastupdatedtime} </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statewise
