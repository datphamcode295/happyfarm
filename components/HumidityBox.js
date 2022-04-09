import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

//https://www.npmjs.com/package/react-native-chart-kit

export default function HumidityBox() {
  return (
    <View>

    <LineChart
        data={{
        // labels: ["20:05", "20:10", "20:15", "20:20", "20:25"],
        datasets: [
            {
            data: [
                31,33,33.5,33.6,33.9
            ]
            }
        ]
        }}
        width={210} // from react-native
        height={170}
        // yAxisLabel="$"
        // yAxisSuffix="RH"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: "#eeeee4",
        // backgroundColor: "#e26a00",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        padding:0

        },
        propsForDots: {
            r: "2",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
        }}
        bezier
        style={{
        marginVertical: 0,
        borderRadius: 16,
        }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});