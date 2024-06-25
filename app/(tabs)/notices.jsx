import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const Notices = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await axios.get('https://liveclass.bpatcsc.org/api-bpatcsc-notice.php');
            // Assuming the response data is an array of notices
            setNotices(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Notices</Text>
                    {notices.map((notice, index) => (
                        <View key={index} style={styles.noticeCard}>
                            <Text style={styles.noticeTitle}>{notice.title}</Text>
                            <Text style={styles.noticeContent}>Published Date: {notice.publish_date}</Text>
                            <Text style={styles.noticeContent}>{notice.description}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    noticeCard: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        elevation: 3, // for Android
        shadowColor: '#000000', // for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    noticeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    noticeContent: {
        fontSize: 16,
    },
});

export default Notices;
