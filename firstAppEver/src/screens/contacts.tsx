import React, {useEffect, useRef, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList, PanGestureHandler, State} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {Contact} from '../components/contact';

export const Contacts = () => {
  const [contacts, setContacts] = useState([{id: '', name: ''}]);
  const [headers, setHeaders] = useState<any>([]);
  const [headersLetter, setHeadersLetter] = useState<any>([]);
  const listRef = useRef(null);

  useEffect(() => {
    firestore()
      .collection('contacts')
      .orderBy('name', 'asc')
      .get()
      .then((querySnapShot) => {
        const data: any = querySnapShot.docs.map((snapShot, index) =>
          snapShot.data(),
        );
        const local = data.reduce((acc: any, cur: any, index: any) => {
          acc[cur.name[0]] = acc[cur.name[0]] || [
            {name: cur.name[0], id: index, header: true},
          ];
          acc[cur.name[0]].push({...cur, header: false});
          return acc;
        }, {});
        const localContact: any = Object.values(local).reduce(
          (acc: any, cur: any) => {
            cur.map((i: any) => {
              acc.push({id: acc.length, name: i.name, header: i.header});
              if (i.header) setHeaders((headers) => [...headers, acc.length]);
            });
            return acc;
          },
          [],
        );
        setHeadersLetter(Object.keys(local));

        setContacts(localContact);
      });
  }, []);

  const toHeader = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      const positionX = event.nativeEvent.y;
      if (positionX < headers.length * 40) {
        const i = (positionX - (positionX % 40)) / 40;

        listRef.current?.scrollToIndex({
          animated: true,
          index: headers[i],
        });
      }
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ref={listRef}
        style={styles.container}
        ListHeaderComponent={<Text style={styles.header}>Contacts</Text>}
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({index, item}) => (
          <Contact name={item.name} header={item.header} />
        )}
        stickyHeaderIndices={headers}
      />
      <PanGestureHandler onGestureEvent={(event) => toHeader(event)}>
        <View style={[styles.headeContainer, {height: headers.length * 40}]}>
          {headersLetter.map((cur: any, index: any) => (
            <Text
              onPress={() =>
                listRef.current?.scrollToIndex({
                  animated: true,
                  index: headers[index],
                })
              }
              key={index}>
              {cur}
            </Text>
          ))}
        </View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    fontSize: 50,
    width: '100%',
    marginLeft: 20,
  },
  container: {
    width: '100%',
  },
  headeContainer: {
    marginRight: 10,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});
