import { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

class Radio extends Component<
  {},
  { radioBtnsData: Array<string>; checked: number }
> {
  constructor(radioBtnsData: Array<string>, checked: number) {
    super(radioBtnsData, checked);
    this.state = {
      radioBtnsData: ["Item1", "Item2"],
      checked: 0,
    };
  }
  render() {
    <View>
      {this.state.radioBtnsData.map((data, key) => {
        return (
          <View key={key}>
            {this.state.checked == key ? (
              <TouchableOpacity style={styles.btn}>
                {/* <Image style={styles.img} source={require("./img/rb_selected.png")}/> */}
                <Text>{data}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ checked: key });
                }}
                style={styles.btn}
              >
                {/* <Image style={styles.img} source={require("./img/rb_unselected.png")} /> */}
                <Text>{data}</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>;
  }
}

export default Radio;

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
  btn: {
    flexDirection: "row",
  },
});
