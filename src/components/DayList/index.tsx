import { SectionList, View } from "react-native";
import * as S from "./styles";
import Meal from "@components/Meal";

export default function DayList() {
  const DATA = [
    {
      title: "12.08.22",
      data: [
        {
          hour: "02:00",
          title: "Pizza",
          status: false,
        },
      ],
    },
    {
      title: "11.08.22",
      data: [
        {
          hour: "14:00",
          title: "Macarrão com molho branco e bacon",
          status: true,
        },
        {
          hour: "13:00",
          title: "Salada Caesar",
          status: true,
        },
        {
          hour: "12:00",
          title: "Pão com ovo",
          status: true,
        },
      ],
    },
    {
      title: "10.08.22",
      data: [
        {
          hour: "17:30",
          title: "Pão com ovo",
          status: true,
        },
        {
          hour: "13:00",
          title: "Cachorro quente",
          status: false,
        },
        {
          hour: "10:00",
          title: "Sala de frutas",
          status: true,
        },
        {
          hour: "08:00",
          title: "Danoninho e sucrilhos",
          status: true,
        },
      ],
    },
  ];
  console.log(DATA[0].data);
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.title + index}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <Meal hour={item.hour} title={item.title} status={item.status} />
      )}
      contentContainerStyle={{ paddingBottom: 130 }}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section: { title } }) => <S.Day>{title}</S.Day>}
    />
  );
}
