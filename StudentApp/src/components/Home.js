import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="security" size={48} color="white" />
        <Text style={styles.headerText}>IntelliSafe</Text>
        <Text style={styles.headerSubtext}>Campus Security & Safety</Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Campus Status: SECURE</Text>
        <Text style={{ marginTop: 5 }}>All systems operational</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.quickAction}
          onPress={() => navigation.navigate('Report')}
        >
          <MaterialIcons name="report-problem" size={32} color="#ff6b6b" />
          <Text style={styles.quickActionText}>Report Incident</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>Quick & Anonymous</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.quickAction}>
          <MaterialIcons name="videocam" size={32} color="#667eea" />
          <Text style={styles.quickActionText}>Live Cameras</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>View Campus</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.quickAction}
          onPress={() => navigation.navigate('Emergency')}
        >
          <MaterialIcons name="phone" size={32} color="#e74c3c" />
          <Text style={styles.quickActionText}>Emergency</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>Get Help Now</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.quickAction}
          onPress={() => navigation.navigate('MyReports')}
        >
          <MaterialIcons name="assignment" size={32} color="#27ae60" />
          <Text style={styles.quickActionText}>My Reports</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>Track Status</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Recent Alerts</Text>
        <View style={styles.alert}>
          <Text style={styles.alertText}>
            <Text style={{ fontWeight: 'bold' }}>Maintenance Notice:</Text> CCTV maintenance scheduled for Block A tomorrow 2-4 PM
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;