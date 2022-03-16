import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { ScrollView, Picker, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-datepicker';
import { CheckBox } from "react-native-elements";
import axios from 'axios'

export default function Appointement(props) {
    const [selectedTime, setSelectedTime] = useState("")
    const { navigation, route } = props;
    const [CheckBoxValue, setCheckBoxValue] = useState(false)

    const [Time] = useState(
        [
            "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
        ].sort())
    const [date, setDate] = useState('')
    const presslogin = () => {
        var ip = "http://192.168.250.37:3000"
        axios.get(`${ip}/user/apps`).then(res => {

            navigation.navigate('Profile')
        }).catch(err => { console.log(err); })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: {
                fontWeight: "bold",
                margin: 10,
                marginLeft: 70,
                textAlign: "center",
                alignSelf: "center",
                color: 'white',
                flex: 1,
            },
            headerRight: () => <View />,
        });
    }, []);
    return (
        <ScrollView>
            <View style={styles.categoriesItemContainer}>
                <View>
                    <Text style={styles.textTitle}>Appointement</Text>
                </View>
                <Text></Text>
                <View >
                    <Text style={styles.text}>Choose the day:</Text>
                </View>
                <Text></Text>

                <DatePicker
                    style={{ width: '100%' }}
                    date={date}
                    placeholder='select date'
                    format='DD-MM-YY'
                    name='date'
                    confirmBtnText="confirm"
                    cancelBtnText="cancel"
                    onDateChange={(d) => setDate(d)
                    }

                />
                <Text></Text>
                <Text style={styles.text}>Choose the time:</Text>
                <Text></Text>
                <Picker
                    style={{ marginLeft: 15 }}
                    SelectedValue={{ selectedTime }}
                // onValueChange={(itemVal)=>{
                // setSelectedTime(presslogin)
                // }}
                >
                    {Time.map((c) => (<Picker.Item label={c} value={c} />))}

                </Picker>
                <Text></Text>

                <View>
                </View>
                <Text></Text>

                <View>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>   Name:</Text>
                    <TextInput style={{ flex: 1, height: 44, backgroundColor: '#fff', marginLeft: 10, borderRadius: 8, paddingHorizontal: 10 }}
                        placeholder='full name'
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>   Phone number:</Text>
                    <TextInput style={{ flex: 1, height: 44, backgroundColor: '#fff', marginLeft: 10, borderRadius: 8, paddingHorizontal: 10 }}
                        placeholder='xx xxx xxx'
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>   Date of birth:</Text>
                    <DatePicker
                        style={{ width: '70%' , marginLeft: 20}}
                        date={date}
                        placeholder='select your date of birth'
                        format='DD-MM-YY'
                        confirmBtnText="confirm"
                        cancelBtnText="cancel"
                        onDateChange={(d) => setDate(d)
                        }

                    />
                </View>
                <Text></Text>
                <View>
                    <CheckBox containerStyle={{ marginLeft: 17, width: '90%' }}
                        title={'I have already visited this doctor'}
                        checked={CheckBoxValue}
                        onPress={() => setCheckBoxValue(!CheckBoxValue)}
                    />
                </View>
                <Text></Text>
                <View >
                    <TouchableOpacity style={styles.containerButton}>
                        <Text style={styles.textButton}
                            onPress={presslogin}>
                            validate
                        </Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    basicTextInput: {
        width: '100',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#26619c',
        fontSize: 28,
    },
    roundedButton: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 40,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    categoriesItemContainer: {
        flex: 1,
        margin: 30,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 1000,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    container: {
        flex: 1,
        padding: 40,
    },
    containerButton: {
        flex: 1,
        height: 50,
        width: 270,
        marginTop: 20,
        marginLeft:40,
        marginRight: 20,
        borderRadius: 100,
        borderColor: '#74b3ce',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 14,
        color: '#74b3ce'
    }
})