import {
  SafeAreaView,
  SafeAreaViewBase,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import {Component, useState} from 'react';
import InputBox from './src/Components/InputBox';
// function App() {

//   const [count, setCount] = useState(0);
//   const [secondCount, secondSetCount] = useState(0);
//   function degeriArttir() {
//     setCount(count + 1);
//     console.log(count);
//   }
//   function tekArttir() {
//     secondSetCount(2*secondCount+1);
//     console.log(secondCount);
//   }

//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop: 300,
//         }}>
//         <Text
//           style={{
//             fontSize: 80,
//             fontWeight: 'bold',
//           }}>
//           {count}
//         </Text>

//         <Pressable
//           onPress={() => {
//             degeriArttir();
//           }}
//           style={{
//             backgroundColor: 'purple',
//             width: '70%',
//             height: 30,
//             borderRadius: 20,
//             marginBottom: 20,
//           }}></Pressable>
//         <Text style={{
//           fontSize: 80,
//           fontWeight: 'bold',
//           color:"black",
//         }}>{secondCount}</Text>

//         <Pressable
//           onPress={() => {
//             TekArttir();
//           }}
//           style={{
//             backgroundColor: 'purple',
//             width: '70%',
//             height: 30,
//             borderRadius: 20,
//             marginBottom: 20,
//           }}></Pressable>
//       </View>

//     </SafeAreaView>
//   );
// }

function App() {
  const [sayi, setSayi] = useState(0);
  function degeriArttir() {
    setSayi(3*sayi);
    console.log(sayi);
  }
  const [sayim, setSayim] = useState(sayi);
  function degerAzalt() {
    setSayim(sayi - 1);
    console.log(sayim);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'pink',
            width: '100%',
            height: 910,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              height: 217,
              width: '90%',
              borderRadius: 40,
              backgroundColor: 'orange',
              padding: 10,
              marginTop: 10,
              marginBottom: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: 'black',
                
              }}>
              Sarı Kedi Fan Club
            </Text>
          </Pressable>
          <View
            style={{
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/Images/Oluşu.jpg')}
              style={{
                width: 350,
                height: 350,
                marginTop: -130,
                borderRadius: 20,
              }}

             
           />
          </View>
          <View>
            <Text
              style={{
                fontSize: 30,
              }}>
              {sayi}
            </Text>
          </View>

          <Pressable
         
            style={{
              backgroundColor: 'white',
              borderColor: 'orange',
              borderWidth: 2,
              width: 290,
              height: 80,
              marginBottom: 5,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 15,
              flexDirection: 'row-reverse',
            }}>
            <Pressable
              onPress={() => {
                degeriArttir();
              }}
              style={{
                marginRight: -70,
                marginLeft: 30,
              }}>
              <Image
                source={require('./src/Images/cat.png')}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 0,
                }}
              />
            </Pressable>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
              }}>
              Beni seviyorsan tıkla Miyavv..
            </Text>
          </Pressable>
          <View>
            <Text
              style={{
                fontSize: 30,
              }}>
              {sayim}
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              borderColor: 'orange',
              borderWidth: 2,
              width: 290,
              height: 80,
              marginBottom: 60,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 15,
              flexDirection: 'row-reverse',
            }}>
            <Pressable
              onFocus={() => {
                degeriAzalt();
              }}
              style={{
                marginRight: -70,
                marginLeft: 50,
              }}>
              <Image
                source={require('./src/Images/broken-heart.png')}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 0,
                }}
              />
            </Pressable>
            <Text
              style={{
                fontSize: 20,
              }}>
              Yoksam sevmiyor musun :((
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
