import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab.less";
import rain from "../assets/rain.png";
import TabPanelComponent from "./TabPanelComponent";
import { fetchData, fetchToday } from "../api";
import Loader from "./Loader";

type MyProps = {};
type MyState = {
  latitude: number;
  longitude: number;
  isLoading: boolean;
  allDaysData: any;
  todayData: any;
};

export default class TabComponent extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      latitude: 43.65107,
      longitude: -79.347015,
      allDaysData: null,
      todayData: null,
      isLoading: true,
    };
  }

  async setLatLong(latitude: number, longitude: number) {
    this.setState(() => ({
      latitude,
      longitude,
      isLoading: false,
    }));

    this.setState({
      allDaysData: await fetchData(latitude, longitude),
      todayData: await fetchToday(latitude, longitude),
    });
  }

  async componentDidMount() {
    const { latitude, longitude } = this.state;
    this.setState({
      allDaysData: await fetchData(latitude, longitude),
      todayData: await fetchToday(latitude, longitude),
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (

      <div className="tab-area">
        <Tabs>
          <TabList>
            <Tab onClick={() => this.setLatLong(43.65107, -79.347015)}>
              <p>TORONTO</p>
            </Tab>
            <Tab onClick={() => this.setLatLong(40.73061, -73.935242)}>
              <p>NEW YORK</p>
            </Tab>
            <Tab onClick={() => this.setLatLong(51.509865, -0.118092)}>
              <p>LONDON</p>
            </Tab>
          </TabList>

          <div className="panel">
            <div className="panel-inner">
              <TabPanel>
                {this.state.allDaysData && this.state.todayData && (
                  <TabPanelComponent
                    todayData={this.state.todayData}
                    allDaysData={this.state.allDaysData}
                  />
                )}
              </TabPanel>
              <TabPanel>
                {this.state.allDaysData && this.state.todayData && (
                  <TabPanelComponent
                    todayData={this.state.todayData}
                    allDaysData={this.state.allDaysData}
                  />
                )}
              </TabPanel>
              <TabPanel>
                {this.state.allDaysData && this.state.todayData && (
                  <TabPanelComponent
                    todayData={this.state.todayData}
                    allDaysData={this.state.allDaysData}
                  />
                )}
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>

    );
  }
}