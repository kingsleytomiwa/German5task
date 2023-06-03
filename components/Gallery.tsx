import { View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import a8 from "../assets/a8.png";
import a9 from "../assets/a9.png";
import a10 from "../assets/a10.png";
import a11 from "../assets/a11.png";
import a12 from "../assets/a12.png";
import a13 from "../assets/a13.png";

const Gallery = () => {
  return (
    <ScrollView
      contentContainerStyle={[tw`px-[1rem] pt-[1rem] flex flex-col gap-[1rem]`]}
    >
      {/* First Flex */}
      <View style={[tw`flex flex-row gap-[0.8rem] justify-center`]}>
        <View style={[tw`flex flex-col gap-[0.8rem]`]}>
          <View style={[tw`flex flex-row gap-[0.8rem]`]}>
            <Image source={a9} style={[tw`rounded-2xl`]} />
            <Image source={a7} style={[tw`rounded-2xl`]} />
          </View>
          <View>
            <Image source={a4} style={[tw`rounded-2xl w-full`]} />
          </View>
        </View>
        <View>
          <Image source={a6} style={[tw`rounded-2xl h-[15.5rem]`]} />
        </View>
      </View>
      {/* Second Flex */}
      <View style={[tw`flex flex-row gap-[0.8rem] justify-center`]}>
        <View>
          <Image source={a3} style={[tw`rounded-2xl  h-[15.5rem]`]} />
        </View>
        <View style={[tw`flex flex-col gap-[0.8rem]`]}>
          <View style={[tw`flex flex-row gap-[0.8rem]`]}>
            <Image source={a11} style={[tw`rounded-2xl`]} />
            <Image source={a10} style={[tw`rounded-2xl`]} />
          </View>
          <View style={[tw`flex flex-row gap-[0.8rem]`]}>
            <Image source={a12} style={[tw`rounded-2xl`]} />
            <Image source={a1} style={[tw`rounded-2xl`]} />
          </View>
        </View>
      </View>
      {/* Thrid Flex */}
      <View style={[tw`flex flex-row gap-[0.8rem] justify-center`]}>
        <View style={[tw`flex flex-col gap-[0.8rem]`]}>
          <View>
            <Image source={a5} style={[tw`rounded-2xl w-full`]} />
          </View>
          <View style={[tw`flex flex-row gap-[0.8rem]`]}>
            <Image source={a2} style={[tw`rounded-2xl`]} />
            <Image source={a13} style={[tw`rounded-2xl`]} />
          </View>
        </View>
        <View>
          <Image source={a8} style={[tw`rounded-2xl h-[15.5rem]`]} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Gallery;
