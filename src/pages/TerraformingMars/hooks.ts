import { ChangeEventHandler, useCallback, useState } from 'react'
import { computeNextGeneration } from './generation'
import { Resource, Resources } from './types'

const INITIAL_VICTORY_POINTS = 20

const INITIAL_RESOURCE: Resource = {
  production: 0,
  stock: 0,
}

const INITIAL_RESOURCES = {
  money: INITIAL_RESOURCE,
  tech: INITIAL_RESOURCE,
  titanium: INITIAL_RESOURCE,
  plants: INITIAL_RESOURCE,
  power: INITIAL_RESOURCE,
  heat: INITIAL_RESOURCE,
}

export const useTerraformingMars = () => {
  const {
    victoryPoints,
    resetVictoryPoints,
    victoryPointsChangeHandler,
    incrementVictoryPoints,
  } = useVictoryPoints(INITIAL_VICTORY_POINTS)
  const { resources, setResources, resetResources, updateProduction } =
    useResources(INITIAL_RESOURCES)

  const reset = () => {
    resetVictoryPoints()
    resetResources()
  }

  const advanceGeneration = useCallback(
    () => setResources(computeNextGeneration(victoryPoints)),
    [resources, victoryPoints]
  )

  return {
    reset,
    resources: {
      money: {
        resource: resources.money,
        updateProduction: updateProduction('money'),
      },
      tech: {
        resource: resources.tech,
        updateProduction: updateProduction('tech'),
      },
      titanium: {
        resource: resources.titanium,
        updateProduction: updateProduction('titanium'),
      },
      plants: {
        resource: resources.plants,
        updateProduction: updateProduction('plants'),
      },
      power: {
        resource: resources.power,
        updateProduction: updateProduction('power'),
      },
      heat: {
        resource: resources.heat,
        updateProduction: updateProduction('heat'),
      },
    },
    victoryPoints,
    victoryPointsChangeHandler,
    incrementVictoryPoints,
    advanceGeneration,
  }
}

const useVictoryPoints = (initialValue: number) => {
  const [victoryPoints, setVictoryPoints] = useState<number>(initialValue)

  const resetVictoryPoints = useCallback(() => {
    setVictoryPoints(initialValue)
  }, [initialValue, setVictoryPoints])

  const victoryPointsChangeHandler = useCallback<ChangeEventHandler>(
    (event) => {
      setVictoryPoints(+(event.target as HTMLInputElement).value)
    },
    [setVictoryPoints]
  )

  const incrementVictoryPoints = useCallback(() => {
    setVictoryPoints((vp) => vp + 1)
  }, [setVictoryPoints])

  return {
    victoryPoints,
    resetVictoryPoints,
    victoryPointsChangeHandler,
    incrementVictoryPoints,
  }
}

const useResources = (initialValue: Resources) => {
  const [resources, setResources] = useState<Resources>(initialValue)

  const resetResources = useCallback(() => {
    setResources(initialValue)
  }, [initialValue, setResources])

  const updateProduction = useCallback(
    (resource: keyof Resources): ChangeEventHandler =>
      (event) => {
        setResources((resources) => ({
          ...resources,
          [resource]: {
            ...resources[resource],
            production: +(event.target as HTMLInputElement).value,
          },
        }))
      },
    [setResources]
  )

  return { resources, setResources, resetResources, updateProduction }
}
