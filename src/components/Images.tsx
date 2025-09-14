import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

import React from 'react'

const data = [
  {
    id: 1,
    name: 'Pankaj',
    email: 'pankaj@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    name: 'Shivam',
    email: 'shivam@gmail.com',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183411-05b939d37bf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    id: 3,
    name: 'Rajeev',
    email: 'rajeev@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 4,
    name: 'Vishal',
    email: 'vishal@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 5,
    name: 'Saurabh',
    email: 'saurabh@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 6,
    name: 'Shalabh',
    email: 'shalabh@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 7,
    name: 'Ishan',
    email: 'Ishan@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 8,
    name: 'Ayushi',
    email: 'ayushi@gmail.com',
    image:
      'https://images.unsplash.com/photo-1757608317604-a124f9930c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Tisha',
    email: 'Tisha@gmail.com',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183183-0e99b6c73437?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Princy',
    email: 'princy@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 11,
    name: 'Shubham',
    email: 'shubham@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 12,
    name: 'Nitish',
    email: 'nitish@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 13,
    name: 'Harish',
    email: 'harish@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 14,
    name: 'Rudra',
    email: 'rudra@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 15,
    name: 'Aniket',
    email: 'aniket@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 16,
    name: 'Kalash',
    email: 'kalash@gmail.com',
    image:
      'https://images.unsplash.com/photo-1755868679492-a708c7626971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
];


const Images = () => {
  return (
    <View style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={item=>item.id} numColumns={2}
              ItemSeparatorComponent={<View style={{height:20}}/>}
              columnWrapperStyle={{gap:10}}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                    source={{
                      uri: item.image,
                    }}
                  ></Image>
                  <Text>{item.name}</Text>
                  <Text>{item.email}</Text>
                </View>)}  
            ></FlatList>
          </View>
  )
}

export default Images

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent:'center'
  },
});