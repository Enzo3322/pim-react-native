import { useState } from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

type AccordionProps = {
  question: string;
  answers: string[];
};

export function Accordion(data: AccordionProps) {
  const [isOpen, setOpen] = useState(false);

  if (!data) return null;

  return (
    <View style={styles.container}>
      <Text
        style={styles.question}
        onPress={() => {
          setOpen(!isOpen);
        }}
      >
        {data.question}
      </Text>
      {isOpen && (
        <Text style={styles.answer}>
          {data.answers.map((answer) => answer)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
        padding: 20
  },
    question: {
      fontWeight: 'bold'
  },
  answer: {},
});
