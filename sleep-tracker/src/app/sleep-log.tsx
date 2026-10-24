
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function SleepLogScreen() {
  const [date, setDate] = useState('');
  const [bedTime, setBedTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  const [quality, setQuality] = useState('');
  const [message, setMessage] = useState('');

  // Validate and submit the sleep entry
  function handleSubmit() {
    // Check if any field is empty
    if (!date.trim() || !bedTime.trim() || !wakeTime.trim() || !quality) {
      setMessage('Please fill in all fields.');
      return;
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

    const parsedDate = new Date(`${date}T00:00:00`);

    // Validate the date
    if (
      !datePattern.test(date) ||
      Number.isNaN(parsedDate.getTime()) ||
      parsedDate.getFullYear() !== Number(date.slice(0, 4)) ||
      parsedDate.getMonth() + 1 !== Number(date.slice(5, 7)) ||
      parsedDate.getDate() !== Number(date.slice(8, 10))
    ) {
      setMessage('Please enter a valid date (YYYY-MM-DD).');
      return;
    }

    // Validate bedtime and wake time
    if (!timePattern.test(bedTime) || !timePattern.test(wakeTime)) {
      setMessage('Please enter times in HH:MM format, such as 22:30.');
      return;
    }

    // Successful submission
    setMessage('Sleep entry submitted successfully!');

    // Reset the form
    setDate('');
    setBedTime('');
    setWakeTime('');
    setQuality('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Log Entry</Text>

      <Text style={styles.description}>
        Enter your sleep information for last night.
      </Text>

      <View style={styles.form}>
        {/* Date */}
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={date}
          onChangeText={(text) => {
            setDate(text);
            setMessage('');
          }}
        />

        {/* Time to Bed */}
        <Text style={styles.label}>Time to Bed</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM (e.g. 22:30)"
          value={bedTime}
          onChangeText={(text) => {
            setBedTime(text);
            setMessage('');
          }}
        />

        {/* Time Awake */}
        <Text style={styles.label}>Time Awake</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM (e.g. 06:30)"
          value={wakeTime}
          onChangeText={(text) => {
            setWakeTime(text);
            setMessage('');
          }}
        />

        {/* Quality of Sleep */}
        <Text style={styles.label}>Quality of Sleep</Text>

        <View style={styles.qualityContainer}>
          {['Poor', 'Fair', 'Good', 'Excellent'].map((option) => (
            <Pressable
              key={option}
              onPress={() => {
                setQuality(option);
                setMessage('');
              }}
              style={[
                styles.qualityOption,
                quality === option && styles.selectedQuality,
              ]}
            >
              <Text
                style={[
                  styles.qualityText,
                  quality === option && styles.selectedQualityText,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Submit Button */}
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Submit Sleep Log
          </Text>
        </Pressable>

        {/* Validation and success message */}
        {message !== '' && (
          <Text style={styles.message}>{message}</Text>
        )}
      </View>

      {/* Back to Home */}
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
  selectedQuality: {
    backgroundColor: '#4F6DDE',
  },
  selectedQualityText: {
    color: '#FFFFFF',
  },
  submitButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#4F6DDE',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 16,
    fontSize: 15,
    textAlign: 'center',
    color: '#243B53',
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
