// based on https://snack.expo.dev/@rizwanamjad/mqtt

import Paho from "paho-mqtt";



export async function getMQTTCredentials() {
    const broker = "io.adafruit.com"
    const username = "vandat2000"
    const password = "aio_NXks88fRRsstNaYuREEoyX75MnpJ"

    const settings = {
        broker: broker,
        userName: username,
        password: password,
    };
    return settings;
  }

export async function mqtt_connect(
     onMessage=(message)=>{ console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString); },
     onConnect=(client)=>{ console.log("Connected to broker", client); }
     ) {
    const mqtt_credentials = await getMQTTCredentials();
    // console.log("credentials are:", mqtt_credentials);

    let client = new Paho.Client(
        mqtt_credentials.broker,
        Number(443), // this has to be a port using websockets
        `flight-monitor-${parseInt(Math.random() * 100)}`
    );
    console.log("oh")

    client.onConnectionLost = (responseObject)=>{ console.log("Connection lost", responseObject)};
    client.onMessageArrived = onMessage;

    let mqtt_option = {
        onSuccess: ()=>{ onConnect(client) },
        onFailure: ()=>{ console.log("Failed to connect")},
        userName: mqtt_credentials.userName,
        password: mqtt_credentials.password,
        useSSL: true,
        
    }
    client.connect(mqtt_option);
    return client;
}

export function mqtt_disconnect(client) {
    client.disconnect();
    console.log("disconnected");
}
