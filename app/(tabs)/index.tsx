import "@/globals.css";
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { aartiCollection } from '@/data/aartiData';
import { SegmentProps, AartiIndicatorProps, VerseProps, ChorusCardProps, AartiProps, AartiNavigationProps, FooterComponentProps } from '@/types/AartiTypes';

import NavigationButton from '@/components/NavigationButton';


// Reusable Text Styles
const textStyles = {
  devanagari: {
    lineHeight: 36,
    letterSpacing: 0.5,
  },
  title: {
    lineHeight: 60,
    letterSpacing: 1,
  },
  chorus: {
    lineHeight: 40,
    letterSpacing: 1,
  }
};



const Segment = ({ active, onPress }: SegmentProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        className="h-2 mx-1 rounded-full bg-orange-500"
        style={{
          width: active ? 32 : 10,
          opacity: active ? 1 : 0.4
        }}
      />
    </TouchableOpacity>
  );
};


const AartiIndicator = ({ totalAartis, currentIndex, onDotPress }: AartiIndicatorProps) => {
  return (
    <View className="flex-row justify-center mt-4">
      {Array.from({ length: totalAartis }, (_, i) => (
        <Segment key={i} active={i === currentIndex} onPress={() => onDotPress(i)} />
      ))}
    </View>
  )
};

const VerseCard = ({ verse }: VerseProps) => (
  <View className=" backdrop-blur-sm rounded p-6 mb-6 shadow-sm border border-orange-100">
    <Text
      className="text-xl font-semibold text-gray-800 text-center"
      style={textStyles.devanagari}
    >
      {verse.lines.join('\n')}
    </Text>
    {verse.number && (
      <View className="items-center mt-4">
        <Text className="text-lg font-bold text-orange-600">॥{verse.number}॥</Text>
      </View>
    )}
  </View>
);



const ChorusCard = ({ verse, gradient = "from-orange-400 to-red-400" }: ChorusCardProps) => (
  <View className={`bg-gradient-to-r ${gradient} rounded-2xl p-6 mb-6 shadow-lg`}>
    <Text
      className="text-2xl font-bold text-orange-500 text-center"
      style={textStyles.chorus}
    >
      {verse.lines[0]}{verse.lines[1] ? '\n' : ''}
      {verse.lines[1] && (
        <Text className="text-2xl font-bold" style={textStyles.chorus}>
          {verse.lines[1]}
        </Text>
      )}
    </Text>
    {verse.number && (
      <View className="items-center mt-3">
        <Text className="text-white font-bold text-lg">॥{verse.number}॥</Text>
      </View>
    )}
  </View>
);


const Header = ({ aarti, currentIndex, totalAartis, onPrevious, onNext, onDotPress }: AartiProps & AartiIndicatorProps & AartiNavigationProps) => (
  <View className="items-center py-2 px-4">
    <AartiIndicator
      totalAartis={totalAartis}
      currentIndex={currentIndex}
      onDotPress={onDotPress}
    />
    <View className="flex-row items-center justify-between w-full mb-4 px-8">
      <NavigationButton
        onPress={onPrevious}
        icon="arrow-back-outline"
        disabled={currentIndex === 0}
        direction="prev"
      />

      <View className="items-center flex-1">
        <Text
          className="text-4xl font-bold text-orange-800 text-center"
          style={textStyles.title}
        >
          {aarti?.title}
        </Text>
      </View>
      <NavigationButton
        onPress={onNext}
        icon="arrow-forward-outline"
        disabled={currentIndex === totalAartis - 1}
        direction="next"
      />
    </View>

    {/* Title */}

  </View>
);


const Footer = ({ subtitle, totalAartis, currentIndex, onPrevious, onNext, onDotPress }: FooterComponentProps) => (
  <View className="flex-row items-center justify-between mt-8">
    <NavigationButton
      onPress={onPrevious}
      icon="arrow-back-outline"
      disabled={currentIndex === 0}
      direction="prev"
    />
    <View className="items-center">
      <Text className="text-3xl">🙏</Text>
      <Text
        className="text-orange-600 font-semibold mt-2 text-center"
        style={textStyles.devanagari}
      >
        {subtitle}
      </Text>
      {/* <View className="flex-row space-x-2 mt-3">
        <View className="w-3 h-3 bg-orange-400 rounded-full"></View>
        <View className="w-3 h-3 bg-red-400 rounded-full"></View>
        <View className="w-3 h-3 bg-yellow-400 rounded-full"></View>
      </View> */}
    </View>
    <NavigationButton
      onPress={onNext}
      icon="arrow-forward-outline"
      disabled={currentIndex === totalAartis - 1}
      direction="next"
    />
  </View>
);

const renderVerse = (verse: any, index: number) => {
  const gradients = [
    "from-orange-400 to-red-400",
    "from-red-400 to-pink-400",
    "from-yellow-400 to-orange-400",
    "from-purple-400 to-indigo-400",
    "from-green-400 to-teal-400"
  ];

  switch (verse.type) {
    case 'verse':
      return <VerseCard key={verse.id} verse={verse} />;

    case 'chorus':
      // return (
      //   <ChorusCard
      //     key={verse.id}
      //     verse={verse}
      //     gradient={gradients[index % gradients.length]}
      //   />
      return <VerseCard key={verse.id} verse={verse} />;
    // );


    default:
      return null;
  }
};

export default function HomeScreen() {
  const [currentAartiIndex, setCurrentAartiIndex] = useState(0);
  const currentAarti = aartiCollection[currentAartiIndex];


  const handlePrevious = () => {
    if (currentAartiIndex > 0) {
      setCurrentAartiIndex(currentAartiIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentAartiIndex < aartiCollection.length - 1) {
      setCurrentAartiIndex(currentAartiIndex + 1);
    }
  };

  const handleDotPress = (index: number) => {
    setCurrentAartiIndex(index);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1 bg-white">

          <Header
            aarti={currentAarti}
            currentIndex={currentAartiIndex}
            totalAartis={aartiCollection.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotPress={handleDotPress}
          />

          <View key={currentAartiIndex} className="flex-1">
            <ScrollView
              className="flex-1 px-6"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
            >
              {currentAarti.verses.map((verse, index) => renderVerse(verse, index))}
              <Footer subtitle={currentAarti.subtitle} currentIndex={currentAartiIndex}
                totalAartis={aartiCollection.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onDotPress={handleDotPress} />
            </ScrollView>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}