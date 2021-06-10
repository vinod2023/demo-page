import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountriesData } from './ApiCalls/countries/actions';

function FirstPage(props) {


    useEffect(async() => {
        if(props.countries.length === 0)
            await props.getData()
    }, [])

    const handleClick = () => {
        props.history.push("/login")
    }

    return (
        <React.Fragment>
            <div className="header">
            <div className="headerText">
                My<span style={{color: "#43afff"}}>Blog</span>
            </div>
            <button className="headerButton" onClick={handleClick}>Login</button>
            </div>
            {
            props.isLoaded ? 
            <div className="tableData">
                <p>Information About Each Country</p>
            <table className="tableData">
                        <thead className="thead">
                            <tr>
                                <th align="center">
                                    Name
                            </th>
                            <th align="center">
                                    Flag
                            </th>
                                <th align="center">
                                    Region
                            </th>
                                <th align="center">
                                    SubRegion
                            </th>
                                <th align="center">
                                    Population
                            </th>
                            <th align="center">
                                    Area
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.countries.map((d, index) => {
                                    return (
                                        <tr className="tableRow" key={index}>
                                            <td align="center">
                                                {d.name}
                                            </td>
                                            <td scope="col" align="center">
                                                <img src={d.flag} width="20px" height="20px"/>
                                            </td>
                                            <td align="center">
                                                {d.region}
                                            </td>
                                            <td align="center">
                                                {d.subregion}
                                            </td>
                                            <td align="center">
                                                {d.population}
                                            </td>
                                            <td scope="col" align="center">
                                                {d.area}
                                            </td>
                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
            :
            ""
        }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        isLoaded: state.isLoaded,
        error: state.error
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getData: () => dispatch(getCountriesData())
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)