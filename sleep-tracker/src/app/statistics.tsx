import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import StatCard from '../components/stat-card';

const statistics = [
  {
    title: '7-Day Sleep Duration',
    value: '7h 24m',
  },
  {
    title: '7-Day Average Quality',
    value: 'Good',
  },
  {
    title: 'Average Time to Bed',
    value: '10:45 PM',
  },
  {
    title: 'Average Wake Time',
    value: '6:30 AM',
  },
];

export default function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Statistics</Text>

      <Text style={styles.description}>
        Your sleep overview for the last seven days.
      </Text>

      <View style={styles.grid}>
        {statistics.map((stat) => (
             <StatCard
                 key={stat.title}
                 title={stat.title}
                value={stat.value}
              />
     
        ))}
      </View>

      <Link href="/" style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statCard: {
    width: '47%',
    minHeight: 150,
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  statTitle: {
    fontSize: 15,
    color: '#627D98',
    lineHeight: 21,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#243B53',
  },
  backButton: {
    marginTop: 30,
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