import { Linking, Text, View } from 'react-native';

import React from 'react';

const QueueTimesCredit = () => {
  // Component logic and state goes here

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Text
        onPress={() => Linking.openURL('https://queue-times.com/en-US')}
        style={{ fontSize: 12 }}
      >
        Powered by Queue-Times.com
      </Text>
    </View>
  );
};

export default QueueTimesCredit;
