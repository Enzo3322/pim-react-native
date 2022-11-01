import { StyleSheet, ScrollView } from "react-native";
import { Accordion } from "../components/Accordion";

import { View } from "../components/Themed";
import { Faqs } from "../mocks/faq";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Faqs.map((question, i) => (
          <Accordion
            answers={question.answers}
            question={question.question}
            key={i}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
