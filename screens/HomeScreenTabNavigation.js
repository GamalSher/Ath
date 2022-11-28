import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [cars, setCars] = useState([
    {
      name: "BMW-e34",
      index: "1",
      backside:
        "https://www.classiceuroparts.com/wp-content/uploads/imported/1/BMW-E34-full-M-rear-bumper-tech-mtech-apron-valance-euro-525-535-540-M5-233349162721-9.JPG",
      frontside: "https://a.d-cd.net/d4db15u-960.jpg",
      img: "https://static3.car.ru/uploaded/2017/4/22/1855/650_411e7b3f313676943f99b5feedc803e8_ca69e77d4f1ffe2eb7a66f610f7baa5e.jpg",
      description:
        "BMW E34 — третье поколение BMW пятой серии, выпускавшееся с 1987 года по 1995-й с кузовом седан и по 1996-й с кузовом универсал. Всего было выпущено 1 333 412 автомобилей, из них 124 656 универсалов. Автомобиль был выдержан в стиле традиционного BMW, но в то же время содержал в себе современные технологии. Он был также оснащён автоматическим контролем устойчивости (ASC) или тяги (ASC + T).",
    },
    {
      name: "Lada-2114",
      index: "2",
      backside: "https://if.drivenn.ru/flt1xjolsp17f_3qw3gy.jpeg",
      frontside:
        "https://all-auto.org/wp-content/uploads/2019/03/VAZ-2114-9.jpg",
      img: "https://abrakadabra.fun/uploads/posts/2021-12/1639827350_2-abrakadabra-fun-p-oboi-na-telefon-chetirka-2.jpg",
      description:
        "Объем 1.5 л Мощность 77 л. с. Коробка механика Тип двигателя бензин Топливо АИ-95. ... Размеры, мм Длина 4122. Ширина 1650. Высота 1402. Колёсная база 2460. Клиренс 165. ... Двигатель Тип двигателя бензин Расположение двигателя переднее, поперечное Объем двигателя, см³ 1499. Тип наддува нет Максимальная мощность, л.с./кВт при об/мин",
    },
    {
      name: "Audi-100Quattro",
      index: "3",
      backside: "https://www.powercar.kz/gallery/audi_100_c4_4.jpg",
      frontside: "https://a.d-cd.net/71585v/960.jpg",
      img: "http://www.ableitet.no/wp-content/uploads/2018/11/audi-200-20v.jpg",
      description:
        "Audi 100 2.8 MT CS Quattro - технические характеристики Передние шины 195/65 R15. Задние шины 195/65 R15. Объем 2.8 л Мощность 172 л. с. Расход 10,0 л Тип топлива Бензин АИ-95. Трансмиссия МКПП Привод Полный (4WD) Кол-во мест 5 мест Кол-во дверей 4 двери Клиренс 140 мм Объем багажника 510 л ",
    },
  ]);
  const [modalwindow, setModalwindow] = useState(false);
  const [image, setImage] = useState(null);

  const addArticle = (article) => {
    setCars((list) => {
      article.index = Math.random().toString();
      return [article, ...list];
    });
    setModalwindow(false);
  };
  const [newsModel, setnewsModel] = useState({});

  useEffect(() => {
    async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Premission denied");
      }
      const { status2 } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status2 !== "granted") {
        alert("Premission denied");
      }
    };
  }, []);

  const PickImage = async (item) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickimageingallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      props.values.img = result.assets[0].uri;
    }
  };

  return (
    <View>
      <Modal visible={modalwindow}>
        <Ionicons
          name="md-close-circle"
          size={40}
          color="red"
          style={styles.iconAdd2}
          onPress={() => setModalwindow(false)}
        />
        <View>
          <Text style={styles.text}>Форма добавления статей</Text>
          <Formik
            initialValues={{
              name: "",
              description: "",
              img: "",
              frontside: "",
              backside: "",
            }}
            onSubmit={(values, action) => {
              addArticle(values);
              action.resetForm();
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.input}
                  value={props.values.name}
                  placeholder={"Введите название машины"}
                  onChangeText={props.handleChange("name")}
                />
                <TextInput
                  style={styles.input}
                  value={props.values.description}
                  placeholder={"Напишите описание для машины"}
                  onChangeText={props.handleChange("description")}
                />
                <TextInput
                  style={styles.input}
                  value={props.values.img}
                  placeholder={"Вставьте изображение машины"}
                  onChangeText={props.handleChange("img")}
                />
                <TouchableOpacity
                  style={styles.buttonst}
                  onPress={pickimageingallery}
                >
                  <Text>Выбрать из галереи</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonst} onPress={PickImage}>
                  <Text>Открыть камеру</Text>
                </TouchableOpacity>
                <MaterialIcons
                  name="done-outline"
                  size={40}
                  color="green"
                  onPress={props.handleSubmit}
                  style={styles.apply}
                />
              </View>
            )}
          </Formik>
        </View>
      </Modal>
      <FlatList
        data={cars}
        ListHeaderComponent={
          <AntDesign
            name="pluscircle"
            size={30}
            color="green"
            style={styles.iconAdd}
            onPress={() => setModalwindow(true)}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Описание", item)}
          >
            <Text style={styles.text}>{item.name}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.img ? item.img : null,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconAdd2: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  iconAdd: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#DAA520",
  },
  apply: {
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 10,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 50,
    backgroundColor: "#696969",
  },
  buttonst: {
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 50,
    backgroundColor: "#98FB98",
  },
});
