import { current } from '@reduxjs/toolkit'

export const isLiveMatch = (currentInning) => {
  return [1, 2, -1, -2].includes(currentInning)
}

export const isUpcomingMatch = (currentInning) => {
  return currentInning === 0
}

export const isPastMatch = (currentInning) => {
  return currentInning === 3
}

export const isSecondInning = (currentInning) => {
  return [2, -2].includes(currentInning)
}

export const isFirstInning = (currentInning) => {
  return [1, -1].includes(currentInning)
}

export const getOversFromBalls = (balls) => {
  return parseInt(balls / 6) + '.' + (balls % 6)
}

export const findPlayerById = ({ players = [], playerId }) => {
  return players.find((player) => player.id === playerId)
}
