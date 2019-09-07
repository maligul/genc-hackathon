import React from 'react';
import {

} from 'react-native';

import CardWithAvatar  from './CardWithAvatar';

export default function MissionCard(props){
    const {
        charityName,
        photoUrl,
        point,
        description
    } = props;

    return (
        <CardWithAvatar
            url={photoUrl}
        >

        </CardWithAvatar>
    );

}