import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SleepLogScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Log Entry</Text>

      <Text style={styles.description}>
        Enter your sleep information for last night.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value="October 1, 2026"
          editable={false}
        />

        <Text style={styles.label}>Time to Bed</Text>
        <TextInput
          style={styles.input}
          placeholder="Example: 10:30 PM"
        />

        <Text style={styles.label}>Time Awake</Text>
        <TextInput
          style={styles.input}
          placeholder="Example: 6:30 AM"
        />

        <Text style={styles.label}>Quality of Sleep</Text>

        <View style={styles.qualityContainer}>
          <View style={styles.qualityOption}>
            <Text style={styles.qualityText}>Poor</Text>
          </View>

          <View style={styles.qualityOption}>
            <Text style={styles.qualityText}>Fair</Text>
          </View>

          <View style={styles.qualityOption}>
            <Text style={styles.qualityText}>Good</Text>
          </View>

          <View style={styles.qualityOption}>
            <Text style={styles.qualityText}>Excellent</Text>
          </View>
        </View>
      </View>

      <Link href="/" style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#627D98',
    marginBottom: 30,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9E2EC',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#F8FAFC',
  },
  qualityContainer: {
    gap: 10,
  },
  qualityOption: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#E8EDFF',
  },
  qualityText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#35469C',
  },
  backButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#4F6DDE',
    textAlign: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});