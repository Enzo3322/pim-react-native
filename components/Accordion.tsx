import { useState } from "react";
import { Text, View } from "./Themed";
import { StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

type AccordionProps = {
  question: string;
  answers: string[];
};

export function Accordion(data: AccordionProps) {
  const [isOpen, setOpen] = useState(false);

  if (!data) return null;

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        setOpen(!isOpen);
      }}
    >
      <>
        <View style={styles.wrapper}>
          <Text style={styles.question}>{data.question}</Text>
          <Text>
            {isOpen ? (
              <FontAwesome
                name="arrow-up"
                size={25}
                color={Colors[useColorScheme()].text}
              />
            ) : (
              <FontAwesome
                name="arrow-down"
                size={25}
                color={Colors[useColorScheme()].text}
              />
            )}
          </Text>
        </View>

        {isOpen && (
          <Text style={styles.answer}>
            {" "}
            {data.answers.map((answer) => answer)}
          </Text>
        )}
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#FFF",
    overflow: "scroll",
  },
  question: {
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 15,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    alignItems: "center",
  },
  answer: {
    fontSize: 18,
    backgroundColor: "#444",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
