import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";

import { apiClimate, apiStation } from "../../service/api";

import { getAllDataClimate, allDataOfStation } from "../../utils/ForecastUtils";

import ForecastDashboardCSS from "./ForecastDashboardCSS";

import terms from "../../terms/terms.json";

export default function ForecastDashboard() {

  const route = useRoute();

  const [codCity, setCodCity] = useState(route.params.id);
  const [dataOfStation, setDataOfStation] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  const [dataClimate, setDataClimate] = useState([]);
  const [percentageRain, setPercentageRain] = useState([]);
  const [period, setPeriod] = useState([{ 0:"Manhã", 1:"Tarde", 2:"Noite", 3:"Manhã", 4:"Tarde", 5:"Noite", 6:"Dia todo", 7:"Dia todo", 8:"Dia todo"}]);

  useEffect(() => {
    try {
      const getAllDataClimate = async () => {
        const { data } = await apiClimate.get(`/${codCity}`);
        const { data: dataStation } = await apiStation.get(`/${codCity}`);

        const cities = data[codCity];
        const station = dataStation["dados"];

        setDataOfStation(station);
        setDataCity(cities);
      };

      getAllDataClimate();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {

    const allDateClimate = getAllDataClimate(dataCity);
    if(dataOfStation.length !== 0) {
      const percentageChanceOfRain = allDataOfStation(dataOfStation);

      setPercentageRain(percentageChanceOfRain);
    }

    setDataClimate(allDateClimate);

  }, [dataCity]);

  return (
    <View style={ForecastDashboardCSS.container}>

      {percentageRain.length !== 0 &&
        <View style={ForecastDashboardCSS.containerCard}>
            <Card containerStyle={{ borderRadius: 8, width: '100%' }}>
              <Card.Title>
                {terms.dateOfForecast}: {percentageRain["0"].datePrevision}
              </Card.Title>
              <Card.Divider/>

              <View style={[ForecastDashboardCSS.containerProperty, { width: '80%' }]}>
                <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                  {terms.statusOfRain}: 
                </Text>

                <Text style={[ForecastDashboardCSS.item, { width: '65%' }]}>
                  {percentageRain["0"].rain}
                </Text>
              </View>

            </Card>
          </View>   
      }
     

      <FlatList
        data={dataClimate}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => String(Math.floor(Math.random() * 65536))}
        renderItem={({ item: climate, index }) =>(
          <View style={ForecastDashboardCSS.containerCard}>
            <Card containerStyle={{ borderRadius: 8, width: '100%' }}>
                <Card.Title>
                  {terms.period}: {period["0"][index]}
                </Card.Title>
                <Card.Divider/>

                <View style={ForecastDashboardCSS.containerProperty}>
                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                    {terms.city}:
                  </Text>

                  <Text style={ForecastDashboardCSS.item}>
                    {climate.entidade} - {climate.uf}
                  </Text>
                </View>

                <View style={ForecastDashboardCSS.containerProperty}>
                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                    {terms.detail}:
                  </Text>

                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.resume]}>
                    {climate.resumo}
                  </Text>
                </View>

                <View style={ForecastDashboardCSS.containerProperty}>
                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                    {terms.dayWeek}:
                  </Text>

                  <Text style={ForecastDashboardCSS.item}>{climate.dia_semana}</Text>
                </View>

                <View style={ForecastDashboardCSS.containerProperty}>
                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                    {terms.tempMax}:
                  </Text>

                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemTempMax, ForecastDashboardCSS.itemBold]}>
                    {climate.temp_max} °
                  </Text>

                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemBold]}>
                    {terms.tempMin}:
                  </Text>

                  <Text style={[ForecastDashboardCSS.item, ForecastDashboardCSS.itemTempMin, ForecastDashboardCSS.itemBold]}>
                    {climate.temp_min} °
                  </Text>
                </View>
            </Card>
          </View>
        )}
      >
      </FlatList>
    </View>
  );
}
