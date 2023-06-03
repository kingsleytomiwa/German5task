import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import {
  homeSvgXml,
  profileSvgXml,
  pawSvgXml,
  createSvgXml,
  searchSvgXml,
} from "../helpers/helper";

const BottomNav = () => {
  return (
    <View
      style={[
        tw`bg-white pb-[2.5rem] absolute bottom-0 w-full border-t-[1px] border-[#E2E2E2]`,
      ]}
    >
      <View style={[tw`px-5 py-3 flex-row justify-between`]}>
        <TouchableOpacity style={[tw`flex gap-[0.5rem] items-center`]}>
          <SvgXml xml={homeSvgXml} width={30} height={30} />
          <Text style={[tw`text-gray-500`]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`flex gap-[0.5rem] items-center`]}>
          <SvgXml xml={searchSvgXml} width={30} height={30} />
          <Text style={[tw`text-gray-500`]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`flex gap-[0.5rem] items-center`]}>
          <SvgXml xml={createSvgXml} width={30} height={30} />
          <Text style={[tw`text-gray-500`]}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`flex gap-[0.5rem] items-center`]}>
          <SvgXml xml={pawSvgXml} width={30} height={30} />
          <Text style={[tw`text-gray-500`]}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`flex gap-[0.5rem] items-center`]}>
          <SvgXml xml={profileSvgXml} width={30} height={30} />
          <Text style={[tw`text-gray-500`]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;
