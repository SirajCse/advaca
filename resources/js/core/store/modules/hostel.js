import Block from './hostel/block';
import Blockincharge from './hostel/blockIncharge';
import Floor from './hostel/floor';
import Room from './hostel/room';
import Roomallocation from './hostel/roomAllocation';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        block: Block,
        blockIncharge: Blockincharge,
        floor: Floor,
        room: Room,
        roomAllocation: Roomallocation,
    },
};
