import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Text,
  Appbar,
  Card,
  ProgressBar,
  Divider,
  IconButton,
  FAB,
} from "react-native-paper";

const Track = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Current Status Card */}
        <Card style={styles.card}>
          <Card.Title title="Current Status" />
          <Card.Content>
            <Text variant="bodyMedium">In Transit</Text>
            {/* <Text variant="bodySmall">Arrived at Sorting Facility</Text> */}
            <Text variant="bodySmall">Estimated Delivery: Nov 3, 2024</Text>
            <ProgressBar
              progress={0.6}
              color="#6200ee"
              style={styles.progress}
            />
          </Card.Content>
        </Card>

        {/* Timeline Section */}
        <Text style={styles.sectionTitle}>Tracking Updates</Text>
        <Divider />
        {[
          "Shipment Created",
          "Picked Up",
          "Arrived at Facility",
          "In Transit",
        ].map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <IconButton icon="check-circle" size={20} />
            <View style={styles.stepText}>
              <Text>{step}</Text>
              <Text variant="bodySmall">Date & Time Here</Text>
            </View>
            <Divider style={styles.stepDivider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
  },
  progress: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  stepText: {
    flex: 1,
  },
  stepDivider: {
    marginVertical: 10,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#6200ee",
  },
});

export default Track;
