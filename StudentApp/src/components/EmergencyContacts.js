import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { styles } from '../styles/styles';

const EmergencyContacts = () => {
  const emergencyContacts = [
    {
      name: 'Campus Security',
      number: '100',
      icon: 'security',
      description: '24/7 Campus Security Control Room',
      color: '#e74c3c'
    },
    {
      name: 'Medical Emergency',
      number: '102',
      icon: 'local-hospital',
      description: 'Campus Health Center & Ambulance',
      color: '#e67e22'
    },
    {
      name: 'Fire Emergency',
      number: '101',
      icon: 'local-fire-department',
      description: 'Fire Department & Safety',
      color: '#f39c12'
    },
    {
      name: 'Local Police',
      number: '100',
      icon: 'local-police',
      description: 'Local Police Station',
      color: '#3498db'
    }
  ];

  const campusLocations = [
    {
      name: 'Security Control Room',
      location: 'Admin Block, Ground Floor',
      hours: '24/7',
      icon: 'security'
    },
    {
      name: 'Health Center',
      location: 'Student Services Building',
      hours: '8 AM - 8 PM',
      icon: 'local-hospital'
    },
    {
      name: 'Emergency Assembly Point',
      location: 'Main Playground',
      hours: 'Always Available',
      icon: 'place'
    }
  ];

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="phone" size={32} color="white" />
        <Text style={styles.headerText}>Emergency Contacts</Text>
        <Text style={styles.headerSubtext}>Get help immediately</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.alertDanger}>
          <Text style={{ fontWeight: 'bold', color: '#721c24', marginBottom: 5 }}>⚠️ EMERGENCY ALERT</Text>
          <Text style={{ color: '#721c24' }}>In case of immediate danger, call Campus Security: 100</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>Emergency Numbers</Text>
        {emergencyContacts.map((contact, index) => (
          <View key={index} style={styles.emergencyContact}>
            <MaterialIcons name={contact.icon} size={24} color={contact.color} style={styles.emergencyIcon} />
            <View style={styles.emergencyInfo}>
              <Text style={styles.emergencyName}>{contact.name}</Text>
              <Text style={styles.emergencyDesc}>{contact.description}</Text>
              <TouchableOpacity 
                style={[styles.callButton, { backgroundColor: contact.color }]}
                onPress={() => handleCall(contact.number)}
              >
                <Text style={styles.callButtonText}>📞 Call {contact.number}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>Campus Emergency Locations</Text>
        {campusLocations.map((location, index) => (
          <View key={index} style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomWidth: index < campusLocations.length - 1 ? 1 : 0,
            borderBottomColor: '#eee'
          }}>
            <MaterialIcons name={location.icon} size={20} color="#667eea" style={{ marginRight: 15 }} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{location.name}</Text>
              <Text style={{ fontSize: 14, color: '#666', marginBottom: 3 }}>
                📍 {location.location}
              </Text>
              <Text style={{ fontSize: 12, color: '#999' }}>
                🕒 {location.hours}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>Emergency Procedures</Text>
        <Text style={{ fontSize: 14, lineHeight: 22 }}>
          <Text style={{ fontWeight: 'bold' }}>1. Stay Calm:</Text> Assess the situation carefully{"\n"}
          <Text style={{ fontWeight: 'bold' }}>2. Ensure Safety:</Text> Move to a safe location if possible{"\n"}
          <Text style={{ fontWeight: 'bold' }}>3. Call for Help:</Text> Use appropriate emergency number{"\n"}
          <Text style={{ fontWeight: 'bold' }}>4. Provide Information:</Text> Give clear location and details{"\n"}
          <Text style={{ fontWeight: 'bold' }}>5. Follow Instructions:</Text> Listen to emergency responders
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={[styles.quickAction, { backgroundColor: '#e74c3c' }]}
            onPress={() => handleCall('100')}
          >
            <MaterialIcons name="security" size={24} color="white" />
            <Text style={[styles.quickActionText, { color: 'white' }]}>Security</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>Call Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.quickAction, { backgroundColor: '#e67e22' }]}
            onPress={() => handleCall('102')}
          >
            <MaterialIcons name="local-hospital" size={24} color="white" />
            <Text style={[styles.quickActionText, { color: 'white' }]}>Medical</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>Call Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmergencyContacts;