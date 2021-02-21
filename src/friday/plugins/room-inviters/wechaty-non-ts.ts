import {
  RoomInviter,
  RoomInviterConfig,
}                       from 'wechaty-plugin-contrib'

import {
  MULTI_LANG_ROOM_ID,
}                             from '../../../database'

import {
  repeat,
  WECHATY_DEVELOPERS_ROOM_RULES,
  WECHATY_DEVELOPERS_ROOM_WELCOME,
}                                       from './config'

const wechatyNonTsConfig: RoomInviterConfig = {
  password : [
    /^\s*(python|go|java|scala|php|dotnet|rust)\s*(wechaty)*\s*$/i,
  ],
  repeat,
  room    : MULTI_LANG_ROOM_ID,
  rule    : WECHATY_DEVELOPERS_ROOM_RULES,
  welcome : WECHATY_DEVELOPERS_ROOM_WELCOME,
}

const WechatyNonTsRoomInviter = RoomInviter(wechatyNonTsConfig)

export {
  WechatyNonTsRoomInviter,
}
