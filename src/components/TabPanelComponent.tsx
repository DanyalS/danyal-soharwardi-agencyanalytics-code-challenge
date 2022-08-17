import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab.less";
import rain from "../assets/rain.png";
import { IWeather } from "../types/weather";

type MyProps = {
  allDaysData: IWeather[];
  todayData: IWeather;
};

type MyState = {};

export default class TabPanelComponent extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {

    const today = this.props.todayData;
    const allDay = this.props.allDaysData.slice(1);
    console.log(today, "today");
    console.log(allDay, "all");
    
    return (
      <>

        <div className="panel-top">
          <p>Today</p>
          <div className="today-data">
            <img
              src={`https://openweathermap.org/img/wn/${today.icon}@2x.png`}
              alt={today.main}
            />
            <div className="d">
              <h4 className="data">{today.temp}° </h4> 
              <p className="type"> {today.main} </p>
            </div>
          </div>
        </div>

        <div className="panel-down">
          {allDay.map((day: IWeather, i: number) => {
            return (
              <div className="day" key={i}>
                <p> {day.dayName} </p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} 
                  alt={day.dayName}
                />
                <h6> {day.temp}° </h6>
              </div>
            );
          })}
        </div>

      </>
    );
  }
}
