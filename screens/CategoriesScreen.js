import React from 'react'
import { FlatList, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'


export default function CategoriesScreen({navigation}) {
  function renderCategory(itemData) {
    const pressHandler = () => {
      navigation.navigate('MealsOverView',{
        categoryId:itemData.item.id
      });
    }
    return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
  }
  return (
    <View style={{margin:15}}>
          <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategory} numColumns={2} key={2} />
    </View>
  )
}
