export const ACTIONS = Object.freeze({
  BUSHES_LIST: 'BUSHES_LIST',
  ADD_BUSH: 'ADD_BUSH',
  SEND_NOTIFICATION: 'SEND_NOTIFICATION',
  MARK_WATERING: 'MARK_WATERING',
  TO_DELAY: 'TO_DELAY',
  EDIT: 'EDIT',
  CANCEL: 'CANCEL',
})

export const INPUT_STATES = Object.freeze({
  NEW_BUSH_NAME: 'NEW_BUSH_NAME',
  NEW_BUSH_SCHEDULE: 'NEW_BUSH_SCHEDULE',
})
export const SCHEDULES = Object.freeze({
  EACH_WEEK: 'EACH_WEEK',
  EACH_5_DAYS: 'EACH_5_DAYS',
  EACH_4_DAYS: 'EACH_3_DAYS',
  EACH_DAY: 'EACH_DAY',
})
export const SCHEDULE_TIMES = {
  [SCHEDULES.EACH_WEEK]: 7 * 24,
  [SCHEDULES.EACH_5_DAYS]: 5 * 24,
  [SCHEDULES.EACH_4_DAYS]: 4 * 24,
  [SCHEDULES.EACH_DAY]: 1 * 24,
}
