import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

import AdmCSS from "./CitysCSS";

import terms from "../../terms/terms.json";
import cityJson from '../../citys/citys.json';

export default function Adm() {

const navigation =  useNavigation();

const idsOfCitys = cityJson;

const setNewCodOfCity = (id) => {
    navigation.navigate('Forecast', { id });
}

    return (
        <View style={AdmCSS.container}>

            <FlatList
                data={idsOfCitys}
                style={{ width: "100%" }}
                showsVerticalScrollIndicator={false}
                keyExtractor={idsOfCitys => String(idsOfCitys.id)}
                renderItem={({ item: citys }) => (
                    <View style={AdmCSS.containerCard}>
                        <Card containerStyle={{ borderRadius: 8, width: "100%" }}>
                            <Card.Title style={AdmCSS.nameCity}>
                                <Card.Divider/>
                                <Text>{citys.name}</Text>
                            </Card.Title>

                            <View style={AdmCSS.containerButton}>
                                <TouchableOpacity
                                    onPress={() => setNewCodOfCity(citys.id)}
                                    style={AdmCSS.button}
                                >
                                    <Text style={AdmCSS.nameButton}>{terms.select}</Text>
                                </TouchableOpacity>
                            </View>
                        </Card>                                              
                    </View>
                )}
            />
        </View>
    );
}
