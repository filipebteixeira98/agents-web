import lib from 'dayjs'
import 'dayjs/locale/en'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.locale('en')
lib.extend(relativeTime)

export const dayjs = lib
