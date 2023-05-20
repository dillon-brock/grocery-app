import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSharedLists } from '../../../hooks/useSharedLists';
import { List } from '../../../types/types';
import DetailLink from '../../../components/molecules/DetailLink/DetailLink';

type Props = {
  activeTabId: number;
}

export default function SharedLists({ activeTabId }: Props) {

  const { sharedLists } = useSharedLists(activeTabId);

  if (activeTabId == 2) {
    return (
      <View>
        <ScrollView>
          {sharedLists.map((list: List) => {
            const createdAtFormatted: string = (new Date(list.createdAt)).toDateString();
            const formattedPlaceholderName = `${createdAtFormatted} (${list.id})`;
            const title = list.title ? list.title : formattedPlaceholderName;
            return (
              <DetailLink key={list.id} id={list.id} text={title} type='List' />
            )
          })}
        </ScrollView>
      </View>
    )
  }
  else {
    return <></>;
  }
}